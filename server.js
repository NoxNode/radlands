const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

app.use("/assets", express.static(__dirname + '/assets'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('/favicon.ico', (req, res) => {
	res.sendFile(__dirname + '/favicon.ico');
});
app.get('/seedrandom.js', (req, res) => {
	res.sendFile(__dirname + '/seedrandom.js');
});
app.get('/rad.js', (req, res) => {
	res.sendFile(__dirname + '/rad.js');
});

// map from url to game data
var lobbies = {};
// map from socket to random seed aka lobby id
var sock_to_seed = {};
// matchmaking lobbies
var waiting_for_match = null;
var matches = 0;
// timing stuff to free up memory when server is idle for a long time
function secs_since_epoch() {
	return Math.floor(Date.now() / 1000);
}
var prev_message_ts = secs_since_epoch();
var reset_interval = 86400 * 14;

io.on('connection', (socket) => {
	socket.on('con', url => {
		// clear mem next connection if no connection in 14 days
		now = secs_since_epoch();
		if(now - prev_message_ts > reset_interval) {
			lobbies = {};
			sock_to_seed = {};
			console.log("memory cleared");
		}
		prev_message_ts = now;

		if(url == null || url.length < 5) return;
		// handle matchmaking
		if(url.endsWith("/?match")) {
			if(waiting_for_match == null) {
				waiting_for_match = socket;
				socket.emit("chat", "waiting for opponent...");
				return;
			}
			// randomize who's first and redirect both players to the newest match url
			var who_first = Math.floor(Math.random() + 0.5);
			var who_next = who_first == 0 ? 1 : 0;
			socket.emit("state", "redirect:" + url + matches + "_" + who_first);
			waiting_for_match.emit("state", "redirect:" + url + matches + "_" + who_next);
			matches += 1;
			waiting_for_match = null;
			return;
		}

		// last character of url is id
		var id = Number(url[url.length - 1]);
		if(isNaN(id)) {socket.emit("chat", "ERROR: need player id at end of url (0 or 1)"); return;}
		// rest of url is treated as random seed as well as lobby id
		var seed = url.substring(0, url.length - 1);
		// if this is the first connection to this lobby, set it up
		if(lobbies[seed] == null) {
			lobbies[seed] = {};
			sock_to_seed[socket.id] = seed;
			lobbies[seed][id] = socket;
			console.log("player " + id + " created game with seed " + seed);
			return;
		}
		// if this is a connection to an existing lobby, keep track of and update this person with prev_state
		sock_to_seed[socket.id] = seed;
		lobbies[seed][id] = socket;
		if(lobbies[seed].prev_sent_state != null)
			lobbies[seed][id].emit('state', lobbies[seed].prev_sent_state);
		else if(lobbies[seed].prev_state != null)
			lobbies[seed][id].emit('state', lobbies[seed].prev_state);
		console.log("player " + id + " connected to game with seed " + seed);
	});

	socket.on('state', state => {
		// get the lobby this user is updating the state for
		var seed = sock_to_seed[socket.id];
		if(seed == null) return;
		if(lobbies[seed] == null) return;
		// update the prev_state of the lobby and relay the state to others in the lobby
		var game_state = JSON.parse(state);
		if(game_state.end_of_turn) {
			lobbies[seed].prev_state = state;
			lobbies[seed].prev_sent_state = null;
		}
		else if(game_state.estack.length > 0 && game_state.estack[0].to_send)
			lobbies[seed].prev_sent_state = state;
		var sender = game_state.my_id;
		for(var i = 0; i <= 9; i++) {
			if(sender == i) continue; // skip sender
			if(lobbies[seed][i] == null) continue; // skip untaken spectator slots
			lobbies[seed][i].emit('state', state);
		}
	});
	socket.on('chat', chat => {
		var seed = sock_to_seed[socket.id];
		if(seed == null) return;
		if(lobbies[seed] == null) return;
		for(var i = 0; i <= 9; i++) {
			if(lobbies[seed][i] == null) continue; // skip untaken spectator slots
			lobbies[seed][i].emit('chat', chat);
		}
	});
	socket.on('restart_turn', () => {
		var seed = sock_to_seed[socket.id];
		if(seed == null) return;
		if(lobbies[seed] == null) return;
		var state = lobbies[seed].prev_state;
		lobbies[seed].prev_sent_state = null;
		for(var i = 0; i <= 9; i++) {
			if(lobbies[seed][i] == null) continue; // skip untaken spectator slots
			lobbies[seed][i].emit('state', state);
		}
	});
});

http.listen(port, () => {
	console.log(`Socket.IO server running at http://localhost:${port}/`);
});
