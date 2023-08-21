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

function secs_since_epoch() {
	return Math.floor(Date.now() / 1000);
}

var prev_message_ts = secs_since_epoch();
var reset_interval = 86400 * 7;

io.on('connection', (socket) => {
	socket.on('con', url => {
		// clear mem next connection if no connection in 7 days
		now = secs_since_epoch();
		if(now - prev_message_ts > reset_interval) {
			lobbies = {};
			sock_to_seed = {};
			console.log("memory cleared");
		}
		prev_message_ts = now;

		if(url == null || url.length < 3) return;
		// last character of url is id
		var id = Number(url[url.length - 1]);
		// rest of url is treated as random seed as well as lobby id
		var seed = url.substring(0, url.length - 1);

		// if this is the first connection to this lobby, set it up
		if(lobbies[seed] == null) {
			lobbies[seed] = {};
			lobbies[seed][id] = socket;
			sock_to_seed[socket] = seed;
			console.log("player " + id + " created game with seed " + seed);
		}
		else {
			// if this is a connection to an existing lobby
				// keep track of and update this person with prev_state
			sock_to_seed[socket] = seed;
			lobbies[seed][id] = socket;
			if(lobbies[seed].prev_state != null) {
				lobbies[seed][id].emit('msg', lobbies[seed].prev_state);
			}
			console.log("player " + id + " connected to game with seed " + seed);
		}
	});
	socket.on('msg', msg => {
		// get the lobby this user is updating the state for
		var seed = sock_to_seed[socket];
		if(seed == null) return;
		if(lobbies[seed] == null) return;
		// update the prev_state of the lobby and relay the state to others in the lobby
		var game_state = JSON.parse(msg);
		if(game_state.end_of_turn)
			lobbies[seed].prev_state = msg;
		var sender = game_state.my_id;
		for(var i = 0; i <= 9; i++) {
			if(sender == i) continue; // skip sender
			if(lobbies[seed][i] == null) continue; // skip untaken spectator slots
			lobbies[seed][i].emit('msg', msg);
		}
		//io.emit('msg', msg);
		//console.log(msg);
	});
	socket.on('restart_turn', () => {
		var seed = sock_to_seed[socket];
		if(seed == null) return;
		if(lobbies[seed] == null) return;
		var msg = lobbies[seed].prev_state;
		for(var i = 0; i <= 9; i++) {
			if(lobbies[seed][i] == null) continue; // skip untaken spectator slots
			lobbies[seed][i].emit('msg', msg);
		}
	});
});

//http.listen(port, "10.0.0.18", () => {
http.listen(port, () => {
	console.log(`Socket.IO server running at http://localhost:${port}/`);
});
