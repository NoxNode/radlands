/*
------ saved games -----
ApplyGameState({"packet_sequence_num":77,"my_id":0,"water":0,"turn":7,"pile_cards":[[62,63,52,43,46,70,52,72,44,59,69,55,47,48,49,72,51,49,67,74,48,66,73,65,69,73,71,68,64,56,57,40,50,54,58,60,53,74,44,45,55,58,54,39,57,51,67],[41,61,42,53,68,43,71],[3,0,-1],[-1,41,-1,40,42,-1,21,22,36],[-1,1,-1],[56,70,39],[2,0,1],[-1,50,-1,47,46,-1,20,35,24],[-1,-1,-1],[66,65,45]],"pile_card_states":[[0,1,0,1,130,0,129,1,128],[0,1,0,128,128,0,128,128,130]],"end_of_turn":false,"estack":[{"str":"2d(1m)","i":6,"self_pile":{"cards":[3,0,1],"card_states":[0,0,0],"uses_card_states":false,"scrollX":0,"scrollXStart":0,"scrolling":false,"always_full":true,"max_cols":1,"max_cards":3,"xdiff":138,"ydiff":147,"card_width":90,"card_height":130},"self_i":2,"prev_target_pile":null,"prev_target_i":null,"cur_effect":"2","mods":"","any_num":-1,"resolving_any_num":false,"success":false,"received":null,"to_send":"d(1m)","my_num_in_temp":0,"prev_total_in_temp":0}],"response":true,"event_resolved_this_turn":true,"event_played_this_turn":false,"ability_used_this_turn":false,"p0_raiders_resolved_this_turn":false,"p0_high_ground_resolved_this_turn":false,"p1_raiders_resolved_this_turn":true,"p1_high_ground_resolved_this_turn":false,"people_placed_this_turn":0,"prev_sound_played_i":2,"turn_time_left":""});SendGameState(false, true);
ApplyGameState({"packet_sequence_num":108,"my_id":0,"water":3,"turn":8,"pile_cards":[[53,41,71,65,72,63,47,71,60,70,66,73,68,65,44,56,47,41,72,57,56,64,40,70,45,67,48,51,46,74,43,45,42,49],[62,39,57,50,39,67,46,53,58,40,61,59,69,68,52,43,73,69,66,50,54],[2,0,1],[-1,42,-1,49,44,54,37,19,33],[-1,-1,-1],[52,51],[3,-1,1],[74,-1,55,48,58,55,34,38,12],[-1,-1,-1],[0]],"pile_card_states":[[0,128,0,128,1,128,130,128,128],[130,0,2,130,0,0,1,130,128]],"estack":[],"event_resolved_this_turn":false,"event_played_this_turn":false,"ability_used_this_turn":false,"p0_raiders_resolved_this_turn":false,"p0_high_ground_resolved_this_turn":false,"p1_raiders_resolved_this_turn":false,"p1_high_ground_resolved_this_turn":false,"people_placed_this_turn":0,"prev_sound_played_i":-1,"turn_time_left":""});SendGameState(undefined, undefined);

------ gameplay bugs -----
famine bug, state (band-aided):
ApplyGameState({"packet_sequence_num":408,"my_id":1,"water":4,"turn":35,"pile_cards":[[55,71,60,49,63,67,71,41,45,48,72,74,54,49,66,55,66,47,69,61,67,58,39,50,69,56,50,52,39,46,42,73,43,41,56,46,48,73,70,74,40,68,65,45,42,40,44,44,70,59,57,53,53,54,65],[58,68,51],[2,0,1],[-1,-1,-1,-1,-1,52,6,28,14],[-1,-1,-1],[64],[3,-1,-1],[-1,57,43,-1,72,47,37,22,10],[-1,1,-1],[0,62,51]],"pile_card_states":[[0,0,0,0,0,128,129,130,130],[0,130,130,0,130,128,130,130,1]],"estack":[{"str":"{?(fp)/k(1p)?(fp)}2{?(fp)/k(1p)?(fp)}","i":37,"self_pile":{"cards":[58,68,51],"card_states":[],"uses_card_states":false,"scrollX":4.9007812499986585,"scrollXStart":4.9007812499986585,"scrolling":false,"always_full":false,"max_cols":9001,"max_cards":9001,"xdiff":90,"ydiff":130,"card_width":90,"card_height":130},"self_i":0,"prev_target_pile":{"cards":[-1,-1,-1,-1,-1,52,6,28,14],"card_states":[0,0,0,0,0,128,129,130,130],"uses_card_states":true,"scrollX":0,"scrollXStart":0,"scrolling":false,"always_full":true,"max_cols":3,"max_cards":9,"xdiff":138,"ydiff":147,"card_width":90,"card_height":130},"prev_target_i":2,"cur_effect":"2","mods":"","any_num":-1,"resolving_any_num":false,"success":true,"received":null,"to_send":"{?(fp)/k(1p)?(fp)}","my_num_in_temp":0,"prev_total_in_temp":0}],"event_resolved_this_turn":true,"event_played_this_turn":false,"ability_used_this_turn":false,"p0_raiders_resolved_this_turn":false,"p0_high_ground_resolved_this_turn":false,"p1_raiders_resolved_this_turn":false,"p1_high_ground_resolved_this_turn":false,"people_placed_this_turn":0,"prev_sound_played_i":14,"turn_time_left":107});SendGameState(undefined, undefined);
mobile double-clicks end turn sometimes

------ visual/audio bugs -----
shouldn't be able to scroll such that nothing is visible
strafe not making sound
follow up sounds like catapult and pyromancer
rotated cards should create more space and have wider, more accurate hitbox
rotated cards should change "where_on_card" to take the rotation into account
fix problem of non-turn player not being able to restore the same state until turn player does something

----- features TODO -----
restart turn maybe shouldn't reset the timer
in timed mode, high ground should maybe add 30 seconds to the clock
timer on camp selection?
draft pick camps (draw 7 each, each player bans 1 of the other person's camps)
	or just reveal all at the start in temp and drag from temp to board, auto-ends turn
	could add a &draft=[true/false] to the url
experimental rules
	could add a &experimental=[true/false] to the url
	if true, use new card defs and assets
optimize assets
	render cards in order of id into one big row jpg
	render effects in order of id into one big row png
		https://stackoverflow.com/questions/11112321/how-to-save-canvas-as-png-image
sound effects
	make screaming sound inherent to k(1p), then on_resolve_sound can be for follow-ups
		maybe change screaming to WITNESS ME to reference mad max fury road
	more specific sounds for specific cards
	match found sound (hard to do with the current redirect method)
		need to do something like play the sound then redirect, but had problems playing a sound in that place of the code for some reason
auto-resolve single target effects
	could save gamestate, do effect to every spot like an 'a' modifier
		if it hit 1 target, don't revert, otherwise revert gamestate and proceed normally
		if sending an effect, you could do the same from their perspective
			if there's only 1 valid target, you don't need to send the effect over
show log behind hovered card
within-turn history
better messaging system
make server just use the regular port 80
	shortens url and steps to create google cloud server
to clean up the replacement on full column effect, can make a mod that doesn't change the target
	then just treat c(3fi) as another on_drag_to_board to target thing
to clean up the omen clock on raiders or famine stuff
	should really say which player started an effect
	then when we send an effect, we know if the other person sent it or we did
	and we can just resolve the stuff sent to us that we know is from the other person

------ potential balance changes -----
restoring enemy cards should be an option just like advancing their event is an option
	the use case is so you can use mimic on their person
	allowing a mimic to restore a molgur or magnus and use their effect to end the game
damaging your own card should be an option too
	the use case is so you can adrenaline lab or atomic garden them after using their ability once already
	so you could do 2 molgur stang effects in a turn without a mimic
water and draw junks
	currently the cards with water junks always feel bad to have in hand
	I think water and draw junks should be on cards that are situational
		the draw junks should be on cards with aggressive situations
			high ground, cult leader, exterminator, pyromaniac, doomsayer
		the water junks could be on cards that are defensive situations
			strafe, truce, famine, radiation
		the reasoning behind this:
			if your board is worse, you want to skip situational aggressive cards
			if your board is better, you can afford to hold defensive cards
				or junk them to activate more people abilities that you have
			doomsayer fits in both categories, so defaulting to draw junk is fine
		could alternatively put water junks on cards with generally great effects
			strafe, truce, sniper, repair bot
		reasoning behind this: just balance great main effect with bad junk effect
actual changes inspired by the above reasons
	High Ground junk effect (water -> draw)
	Strafe      junk effect (draw  -> water)
	Interrogate junk effect (water -> injur)
		currently it's just a 1 water replace this with the best of the next 4
			which kinda sucks when you're not desperate
		maybe 1 water, delay 2: draw 4 discard 2
		so you trade off tempo for card advantage at an efficient water cost
	Truce       junk effect (injur -> water)
	then
	Radiation   junk effect (raid  -> water)
	Looter      junk effect (water -> raid)
	Famine      junk effect (injur -> water)
	Scout       junk effect (water -> injur)
	or
	Sniper      junk effect (restore -> water)
	Looter      junk effect (water   -> restore)
	Repair Bot  junk effect (injur   -> water)
	Scout       junk effect (water   -> injur)
	also maybe
	Pyromaniac  junk effect (injur -> draw)
	I don't see a good matching draw -> injur change so the above would change the junk effect ratios
		maybe just make famine or repair bot not change into water and we'd be down a water instead of injur junk
inital draw changes
	command post   2 -> 1
	transplant lab 2 -> 1
	parachute base 1 -> 0 (maybe)
	oasis          1 -> 0 (maybe)
	resonator      1 -> 2
	blood bank     1 -> 2 (maybe)
	railgun        0 -> 1
	octagon        0 -> 1 (or make it cost 0 water)
	watchtower     0 -> 1 (maybe)
	nest of spies  1 -> 0 (if watchtower isn't buffed, nest of spies should maybe be nerfed)
bonfire should maybe cost 1 water
juggernaut should maybe cost 3 water and only need to advance twice
vera vosh and karli blaze should probably be reworked
	vera could probably just be made into a 2 cost
	karli could probably also be made into a 2 cost and change ability to 1 cost injur

----- file layout -----
general funcs
	Init
	chat
	play_sound_for_junk
	SaveGame
	SendGameState
	ApplyGameState
	timer
	start_turn
	end_turn
	done_with_optionals
	restart_turn
	Update
helper funcs
	push_effect
	resolve
	is_continuing_later
	continue_effect
	place_on_board
	place_on_events
	damage_card
	use_ability
	can_resolve_effect
	get_effect_source_card
	get_other_person_spot
	is_camp
	is_person
	is_protected
	is_trait_active
	is_resolving
specific event listeners
	on_click_basic
	on_click_board
	on_drag_to_board
	on_drag_to_discard
	on_drag_to_events
common card game stuff
common js/canvas stuff

---- effect lang -----
	2 = send all following effects to opponent
	* = first instance means any number of times
		subsequent * means that first number
		+ or -'s after subsequent * increase or decrease
	w = water
	a = raid
	t = topdeck/draw card
	j = discard/junk
	c = play card (need water if no free mod)
	i = injur
	r = heal/restore
	p = play a punk
	d = damage
	k = kill/destroy
	h = to hand
	f = flip over where it is
	m = make ready
	u = juggernaut ability
	b = use ability (need water if no free mod - below are unique mods)
		j = junk ability
	v = event (below are unique mods)
		(v) = advance
		(z) = delay
	? = if (below are unique mods)
		(r)    = raid resolved
		(vr)   = event resolved
		(1v)   = our event exists
		(2v)   = thier event exists
		(p)    = have 1+ punks
		(y)    = you have a ready person or they have an undamaged person
		(2um)  = they have an unprotected camp
		(cx)   = you have at least x cards in hand
		(fp)   = have 0 or 1 people
		(1p)   = you have 1 or more people
		(1dp)  = you have 1 or more damaged people
		(2p)   = they have 1 or more people
		(2up)  = they have 1 or more unprotected people
		(2udc) = they have 1 or more unprotected damaged cards
		(mp)   = placed 2+ people
		(s)    = undamaged self
		(im)   = it was a camp (target of prev)
		(iv)   = it was a event (target of prev)
		(ip)   = it was a person (target of prev)
		(26mk) = their 6'th board slot aka camp is killed/destroyed
		(27mk) = their 7'th board slot aka camp is killed/destroyed
		(28mk) = their 8'th board slot aka camp is killed/destroyed
	: = do follow if previous was successful
		need to have water for both (parachute base)
	:: = skip all the following if previous was unsuccessful
	/ = do following if previous was unsuccessful
	{} = until fail
	[] = optional skip
	() = modifiers
		1 = to own board
		2 = to other's board
		3 = from temp
		4 = to temp
		i = it (target of previous effect)
		s = self aka this card
		a = all
		u = unprotected
		d = damaged
		l = column
		n = flipped (punk or destroyed camp)
		y = healthY aka unharmed aka undamaged
		m = camp
		p = person/people
		f = for freeeeee

------ sound attributions -----


https://freesound.org/people/InspectorJ/sounds/411089/
	https://cdn.freesound.org/previews/411/411089_5121236-lq.mp3
	"Bell, Candle Damper, A (H1).wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org
https://freesound.org/people/LuannWepener/sounds/326119/
	https://cdn.freesound.org/previews/326/326119_5627725-lq.mp3
	pump shotgun
https://freesound.org/people/andrest2003/sounds/524912/
	https://cdn.freesound.org/previews/524/524912_6324148-lq.mp3
	gunshot
https://freesound.org/people/mnslugger20/sounds/242846/
	https://cdn.freesound.org/previews/242/242846_4121395-lq.mp3
	gunning
https://freesound.org/people/qubodup/sounds/172589/
	https://cdn.freesound.org/previews/172/172589_71257-lq.mp3
	restore
https://freesound.org/people/jimbo555/sounds/630498/
	https://cdn.freesound.org/previews/630/630498_10616645-lq.mp3
	shuffling
https://freesound.org/people/dersuperanton/sounds/434472/
	https://cdn.freesound.org/previews/434/434472_1992856-lq.mp3
	pickup card
https://freesound.org/people/Johnny2810/sounds/559531/
	https://cdn.freesound.org/previews/559/559531_9742122-lq.mp3
	place card
https://freesound.org/people/Splashdust/sounds/84322/
	https://cdn.freesound.org/previews/84/84322_754949-lq.mp3
	flip card
https://freesound.org/people/mr333me/sounds/656005/
	https://cdn.freesound.org/previews/656/656005_14420812-lq.mp3
	rev engine
https://freesound.org/people/squareal/sounds/237375/
	https://cdn.freesound.org/previews/237/237375_1502374-lq.mp3
	crash
https://freesound.org/people/ejfortin/sounds/51826/
	https://cdn.freesound.org/previews/51/51826_490973-lq.mp3
	omen clock
https://freesound.org/people/ultraaxvii/sounds/591155/
	https://cdn.freesound.org/previews/591/591155_11076342-lq.mp3
	blade slice
https://freesound.org/people/thecoolcookie17/sounds/573047/
	https://cdn.freesound.org/previews/573/573047_12946586-lq.mp3
	baseball bat bonk
https://freesound.org/people/tomaszblaszczyk/sounds/670839/
	https://cdn.freesound.org/previews/670/670839_12717327-lq.mp3
	deep crazy laugh
https://freesound.org/people/derplayer/sounds/587174/
	https://cdn.freesound.org/previews/587/587174_13123807-lq.mp3
	explosion
https://freesound.org/people/derplayer/sounds/587180/
	https://cdn.freesound.org/previews/587/587180_13123807-lq.mp3
	triple explosion
https://freesound.org/people/InspectorJ/sounds/398719/
	https://cdn.freesound.org/previews/398/398719_5121236-lq.mp3
	water
https://freesound.org/people/j1987/sounds/140715/
	https://cdn.freesound.org/previews/140/140715_367313-lq.mp3
	lit_fuse
https://freesound.org/people/roscoetoon/sounds/26389/
	https://cdn.freesound.org/previews/26/26389_186469-lq.mp3
	shredder
https://freesound.org/people/Breviceps/sounds/450616/
	https://cdn.freesound.org/previews/450/450616_9159316-lq.mp3
	error
https://freesound.org/people/gastonrnr/sounds/476237/
	https://cdn.freesound.org/previews/476/476237_9571129-lq.mp3
	spooky laugh
https://freesound.org/people/Thanra/sounds/141196/
	https://cdn.freesound.org/previews/141/141196_2534855-lq.mp3
	maniacal laugh
https://freesound.org/people/Creeper_Ciller78/sounds/275997/
	https://cdn.freesound.org/previews/275/275997_5142212-lq.mp3
	spectral laugh
batter up from back to the future
https://freesound.org/people/SilverIllusionist/sounds/472688/
	https://cdn.freesound.org/previews/472/472688_7395592-lq.mp3
	fire burst
https://freesound.org/people/jorickhoofd/sounds/180350/
	https://cdn.freesound.org/previews/180/180350_2888453-lq.mp3
	man_screaming_no
https://freesound.org/people/XHALE303/sounds/535592/
	https://cdn.freesound.org/previews/535/535592_9015615-lq.mp3
	boom impact
https://freesound.org/people/bubaproducer/sounds/151021/
	https://cdn.freesound.org/previews/151/151021_1838182-lq.mp3
	laser shot
https://freesound.org/people/Unlistenable/sounds/391539/
	https://cdn.freesound.org/previews/391/391539_5235550-lq.mp3
	win
https://freesound.org/people/alanmcki/sounds/400581/
	https://cdn.freesound.org/previews/400/400581_5564376-lq.mp3
	lose



*/

var imgs = [];
var mat1_i       = 0; // 1920x1080
var mat2_i       = 1; // 1920x1080
var camps1_i     = 2; // 1200x900
var camps2_i     = 3; // 1200x900
var camps3_i     = 4; // 657x900
var events_i     = 5; // 1920x1080
var people1_i    = 6; // 1200x860
var people2_i    = 7; // 869x900
var components_i = 8; // 1200x800
var effects_i    = 9; // 1034x40

// spacing constants
var people_xoff = 225;
var people_xdiff = 138;
var people_ydiff = 147;
var people_endx = people_xoff + people_xdiff * 3 - 45;
var event_xoff = people_xoff + people_xdiff * 3.4;
var basic_xoff = people_xoff - people_xdiff * 1.4;
var xpadd = people_xdiff - card_width;
var ypadd = people_ydiff - card_height;
var p2_people_yoff = 10;
var p1_people_yoff = 487;
var p1_people_endy = p1_people_yoff + people_ydiff*2;
var p2_people_endy = p2_people_yoff + people_ydiff*2;
var card_width = 90;
var card_height = 130;
var mat_endx = 787;
var discard_yoff = 640;
var temp_yoff = discard_yoff - 30 - card_height;
var text_scale = 26;
var hovered_card_scale = 5.5;
var end_turn_width = card_width * 2;
var done_width = card_width * 2;

var camps1_dims = [
	{ num_cards: 5,
		topleft: {x: 150, y:   25}, topright: {x: 1902, y:   32},
		botleft: {x: 150, y:  520}, botright: {x: 1905, y: 525} },
	{ num_cards: 5,
		topleft: {x: 150, y:  520}, topright: {x: 1900, y: 525},
		botleft: {x: 150, y: 1016}, botright: {x: 1900, y: 1022} },
	{ num_cards: 5,
		topleft: {x: 150, y: 1016}, topright: {x: 1890, y: 1022},
		botleft: {x: 155, y: 1502}, botright: {x: 1885, y: 1510} },
];
var camps2_dims = [
	{ num_cards: 5,
		topleft: {x: 132, y:   20}, topright: {x: 1857, y:  17},
		botleft: {x: 130, y:  507}, botright: {x: 1867, y: 502} },
	{ num_cards: 5,
		topleft: {x: 127, y:  507}, topright: {x: 1867, y: 502},
		botleft: {x: 125, y: 1000}, botright: {x: 1870, y: 1000} },
	{ num_cards: 5,
		topleft: {x: 125, y: 1000}, topright: {x: 1865, y: 1000},
		botleft: {x: 125, y: 1495}, botright: {x: 1865, y: 1487} },
];
var camps3_dims = [
	{ num_cards: 2,
		topleft: {x: 13, y:   23},  topright: {x: 690, y:  23},
		botleft: {x:  8, y:  503},  botright: {x: 700, y: 500} },
	{ num_cards: 2,
		topleft: {x: 12, y:  503},  topright: {x: 700, y: 500},
		botleft: {x: 13, y:  996},  botright: {x: 705, y: 990} },
];
var events_dims = [
	{ num_cards: 5,
		topleft: {x: 35, y:  300},  topright: {x: 1965, y: 305},
		botleft: {x: 30, y:  850},  botright: {x: 1970, y: 845} },
	{ num_cards: 5,
		topleft: {x: 25, y:  850},  topright: {x: 1967, y: 845},
		botleft: {x: 20, y: 1407},  botright: {x: 1970, y: 1387} },
];
var people1_dims = [
	{ num_cards: 5,
		topleft: {x: 210, y:   30}, topright: {x: 1885, y: 45 },
		botleft: {x: 205, y:  500}, botright: {x: 1890, y: 515} },
	{ num_cards: 5,
		topleft: {x: 200, y:  500}, topright: {x: 1890, y: 515},
		botleft: {x: 195, y:  977}, botright: {x: 1890, y: 990} },
	{ num_cards: 5,
		topleft: {x: 190, y:  980}, topright: {x: 1887, y: 997},
		botleft: {x: 190, y: 1455}, botright: {x: 1880, y: 1475} },
];
var people1_dims_old = [
	{ num_cards: 5,
		topleft: {x: 125, y:   37}, topright: {x: 1845, y: 50 },
		botleft: {x: 125, y:  530}, botright: {x: 1845, y: 540} },
	{ num_cards: 5,
		topleft: {x: 130, y:  530}, topright: {x: 1840, y: 540},
		botleft: {x: 140, y: 1010}, botright: {x: 1830, y: 1017} },
	{ num_cards: 5,
		topleft: {x: 140, y: 1010}, topright: {x: 1825, y: 1017},
		botleft: {x: 142, y: 1477}, botright: {x: 1815, y: 1477} },
];
var people2_dims = [
	{ num_cards: 4,
		topleft: {x: 360, y:  25},  topright: {x: 1700, y: 27},
		botleft: {x: 360, y: 492},  botright: {x: 1710, y: 500} },
	{ num_cards: 4,
		topleft: {x: 360, y: 495},  topright: {x: 1710, y: 510},
		botleft: {x: 357, y: 972},  botright: {x: 1714, y: 977} },
	{ num_cards: 3,
		topleft: {x: 360, y: 975},  topright: {x: 1375, y: 980},
		botleft: {x: 360, y: 1452}, botright: {x: 1377, y: 1460} },
];
var components_dims = [
	{ num_cards: 2,
		topleft: {x: 267, y:   25}, topright: {x: 1295, y: 22},
		botleft: {x: 257, y:  745}, botright: {x: 1300, y: 750} },
	{ num_cards: 3,
		topleft: {x: 255, y:  757}, topright: {x: 1820, y: 755},
		botleft: {x: 255, y: 1495}, botright: {x: 1822, y: 1490} },
];
var effects_dims = [
	{ num_cards: 1, // 0 aka Destroy
		topleft: {x: 5, y: 67},    topright: {x: 5+75, y: 67},
		botleft: {x: 5, y: 67+75},   botright: {x: 5+75, y: 67+75} },
	{ num_cards: 1, // 1 ka To Hand
		topleft: {x: 5, y: 67+75},    topright: {x: 5+75, y: 67+75},
		botleft: {x: 5, y: 67+75+75},   botright: {x: 5+75, y: 67+75+75} },
	{ num_cards: 1, // 2 aka Flip
		topleft: {x: 5, y: 67+75*2},    topright: {x: 5+75, y: 67+75*2},
		botleft: {x: 5, y: 67+75*3},   botright: {x: 5+75, y: 67+75*3} },
	{ num_cards: 1, // 3 aka Advance
		topleft: {x: 5, y: 67+75*3},    topright: {x: 5+75, y: 67+75*3},
		botleft: {x: 5, y: 67+75*4},   botright: {x: 5+75, y: 67+75*4} },
	{ num_cards: 1, // 4 aka Play
		topleft: {x: 5, y: 67+75*4},    topright: {x: 5+75, y: 67+75*4},
		botleft: {x: 5, y: 67+75*5},   botright: {x: 5+75, y: 67+75*5} },
	{ num_cards: 1, // 5 aka Use Ability
		topleft: {x: 5, y: 67+75*5},    topright: {x: 5+75, y: 67+75*5},
		botleft: {x: 5, y: 67+75*6},   botright: {x: 5+75, y: 67+75*6} },
	{ num_cards: 1, // 6 aka Damage
		topleft: {x: 473, y: 4},    topright: {x: 473+75, y: 4},
		botleft: {x: 473, y: 4+75},   botright: {x: 473+75, y: 4+75} },
	{ num_cards: 1, // 7 aka Injur
		topleft: {x: 935, y: 0},    topright: {x: 935+75, y: 0},
		botleft: {x: 935, y: 0+75},   botright: {x: 935+75, y: 0+75} },
	{ num_cards: 1, // 8 aka Restore
		topleft: {x: 935, y: 218},    topright: {x: 935+75, y: 218},
		botleft: {x: 935, y: 218+75},   botright: {x: 935+75, y: 218+75} },
	{ num_cards: 1, // 9 aka Draw
		topleft: {x: 1410, y: 0},    topright: {x: 1410+75, y: 0},
		botleft: {x: 1410, y: 0+85},   botright: {x: 1410+75, y: 0+85} },
	{ num_cards: 1, // 10 aka Punk
		topleft: {x: 1410, y: 175},    topright: {x: 1410+75, y: 175},
		botleft: {x: 1410, y: 175+85},   botright: {x: 1410+75, y: 175+85} },
	{ num_cards: 1, // 11 aka Make Ready (symbol is not ready because we use that but never show "make ready")
		topleft: {x: 10, y: 67+75*6},    topright: {x: 10+75, y: 67+75*6},
		botleft: {x: 10, y: 67+75*7},   botright: {x: 10+75, y: 67+75*7} },
	{ num_cards: 1, // 12 aka water
		topleft: {x: 1421, y: 465},      topright: {x: 1421+65, y: 465},
		botleft: {x: 1421, y: 465+75},   botright: {x: 1421+65, y: 465+75} },
];

var sound_urls = [
	"https://cdn.freesound.org/previews/411/411089_5121236-lq.mp3",  // bell
	"assets/pump_shotgun.mp3",                                       // pump_shotgun
	"https://cdn.freesound.org/previews/524/524912_6324148-lq.mp3",  // gunshot
	"https://cdn.freesound.org/previews/172/172589_71257-lq.mp3",    // restore
	"https://cdn.freesound.org/previews/630/630498_10616645-lq.mp3", // shuffling
	"assets/pickup_card.mp3",                                        // pickup_card
	"assets/place_card.mp3",                                         // place_card
	"https://cdn.freesound.org/previews/84/84322_754949-lq.mp3",     // flip_card
	"https://cdn.freesound.org/previews/656/656005_14420812-lq.mp3", // rev_engine
	"https://cdn.freesound.org/previews/237/237375_1502374-lq.mp3",  // crash
	"https://cdn.freesound.org/previews/51/51826_490973-lq.mp3",     // omen_clock
	"https://cdn.freesound.org/previews/591/591155_11076342-lq.mp3", // blade_slice
	"assets/baseball_bat_bonk.mp3",                                  // baseball_bat_bonk
	"https://cdn.freesound.org/previews/670/670839_12717327-lq.mp3", // crazy_laugh
	"https://cdn.freesound.org/previews/587/587174_13123807-lq.mp3", // explosion
	"https://cdn.freesound.org/previews/587/587180_13123807-lq.mp3", // triple_explosion
	"https://cdn.freesound.org/previews/398/398719_5121236-lq.mp3",  // water
	"https://cdn.freesound.org/previews/140/140715_367313-lq.mp3",   // lit_fuse
	"https://cdn.freesound.org/previews/26/26389_186469-lq.mp3",     // shredder
	"https://cdn.freesound.org/previews/450/450616_9159316-lq.mp3",  // error
	"https://cdn.freesound.org/previews/242/242846_4121395-lq.mp3",  // gunning
	"assets/batter_up.mp3",                                          // batter_up
	"https://cdn.freesound.org/previews/141/141196_2534855-lq.mp3",  // maniacal_laugh
	"https://cdn.freesound.org/previews/472/472688_7395592-lq.mp3",  // fire_burst
	"https://cdn.freesound.org/previews/180/180350_2888453-lq.mp3",  // man_screaming_no
	"https://cdn.freesound.org/previews/391/391539_5235550-lq.mp3",  // win
	"https://cdn.freesound.org/previews/400/400581_5564376-lq.mp3",  // lose
];
var sound_bell_i = 0;
var sound_pump_shotgun_i = 1;
var sound_gunshot_i = 2;
var sound_restore_i = 3;
var sound_shuffling_i = 4;
var sound_pickup_card_i = 5;
var sound_place_card_i = 6;
var sound_flip_card_i = 7;
var sound_rev_engine_i = 8;
var sound_crash_i = 9;
var sound_omen_clock_i = 10;
var sound_blade_slice_i = 11;
var sound_baseball_bat_bonk_i = 12;
var sound_crazy_laugh_i = 13;
var sound_explosion_i = 14;
var sound_triple_explosion_i = 15;
var sound_water_i = 16;
var sound_lit_fuse_i = 17;
var sound_shredder_i = 18;
var sound_error_i = 19;
var sound_gunning_i = 20;
var sound_batter_up_i = 21;
var sound_maniacal_laugh_i = 22;
var sound_fire_burst_i = 23;
var sound_man_screaming_no_i = 24;
var sound_win_i = 25;
var sound_lose_i = 26;

// gameplay constants
var num_players = 2;
var JUNK_WATER   = "w";
var JUNK_RAID    = "a";
var JUNK_DRAW    = "t";
var JUNK_INJUR   = "i(2up)";
var JUNK_RESTORE = "r(1c)";
var JUNK_PUNK    = "p";
var empty_i          = -1;
var water_i          = 0;
var raiders_i        = 1;
var aid_i            = 2;
var punk_i           = 3;
var destroyed_camp_i = 4;
var destroy_effect_i = 75;
var to_hand_effect_i = 76;
var flip_effect_i    = 77;
var advance_effect_i = 78;
var play_effect_i    = 79;
var ability_effect_i = 80;
var damage_effect_i  = 81;
var injur_effect_i   = 82;
var restore_effect_i = 83;
var draw_effect_i    = 84;
var punk_effect_i    = 85;
var ready_effect_i   = 86;
var water_effect_i   = 87;
var camps_start_i    = 5;
var people_start_i   = 39;
var events_start_i   = 65;
var effects_start_i  = 75;
var UNHARMED = 0;
var HARMED   = 1;
var FLIPPED  = 2; // punk if person, destroyed if camp
var READY    = 128;

var cards = [
	// basics
	{id: 0,  name: "Water Silo", junk: JUNK_WATER,        img_i: components_i, dims: components_dims, row_i: 1, col_i: 1},
	{id: 1,  name: "Raiders", delay: 2, effect: "2d(1m)", img_i: components_i, dims: components_dims, row_i: 1, col_i: 2},
	{id: 2,  name: "Effect Aid",                          img_i: components_i, dims: components_dims, row_i: 1, col_i: 0},
	{id: 3,  name: "Punk",                                img_i: components_i, dims: components_dims, row_i: 0, col_i: 0},
	{id: 4,  name: "Destroyed Camp",                      img_i: components_i, dims: components_dims, row_i: 0, col_i: 1},
	// camps1
	{id: 5,  name: "Catapult",          abilities: [{cost: 2, effect: "k(1p)d(2c)"}],                           initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 0, col_i: 0, on_resolve_sound: sound_man_screaming_no_i},
	{id: 6,  name: "The Octagon",       abilities: [{cost: 1, effect: "k(1p)2k(1p)"}],                          initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 0, col_i: 1, on_resolve_sound: sound_man_screaming_no_i},
	{id: 7,  name: "Watchtower",        abilities: [{cost: 1, effect: "?(vr)::d(2uc)"}],                        initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 0, col_i: 2},
	{id: 8,  name: "Juggernaut",        abilities: [{cost: 1, effect: "u"}],                                    initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 0, col_i: 3},
	{id: 9,  name: "Railgun",           abilities: [{cost: 2, effect: "d(2uc)"}],                               initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 0, col_i: 4},
	{id: 10, name: "Scud Launcher",     abilities: [{cost: 1, effect: "2d(1c)"}],                               initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 1, col_i: 0},
	{id: 11, name: "Mercenary Camp",    abilities: [{cost: 2, effect: "2?(c2):[jj]k(1c)"}],                     initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 1, col_i: 1},
	{id: 12, name: "Garage",            abilities: [{cost: 1, effect: "a"}],                                    initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 1, col_i: 2},
	{id: 13, name: "Mulcher",           abilities: [{cost: 0, effect: "k(1p)t"}],                               initial_draw: 0, img_i: camps1_i,  dims: camps1_dims,  row_i: 1, col_i: 3, on_resolve_sound: sound_shredder_i},
	{id: 14, name: "Victory Totem",     abilities: [{cost: 2, effect: "i(2up)"}, {cost: 2, effect: "a"}],       initial_draw: 1, img_i: camps1_i,  dims: camps1_dims,  row_i: 1, col_i: 4},
	{id: 15, name: "Cache",             abilities: [{cost: 0, effect: "d(s)[p][r(1c)]t"}],                      initial_draw: 1, img_i: camps1_i,  dims: camps1_dims,  row_i: 2, col_i: 0},
	{id: 16, name: "Blood Bank",        abilities: [{cost: 0, effect: "k(1p)w"}],                               initial_draw: 1, img_i: camps1_i,  dims: camps1_dims,  row_i: 2, col_i: 1, on_resolve_sound: sound_water_i},
	{id: 17, name: "Reactor",           abilities: [{cost: 2, effect: "k(s)k(ap)"}],                            initial_draw: 1, img_i: camps1_i,  dims: camps1_dims,  row_i: 2, col_i: 2, on_activate_sound: sound_explosion_i},
	{id: 18, name: "Cannon",            abilities: [{cost: 1, effect: "d(s)d(2uc)"}],                           initial_draw: 1, img_i: camps1_i,  dims: camps1_dims,  row_i: 2, col_i: 3},
	{id: 19, name: "Adrenaline Lab",    abilities: [{cost: 0, effect: "?(1dp)::b(1dp)k(i)"}],                   initial_draw: 1, img_i: camps1_i,  dims: camps1_dims,  row_i: 2, col_i: 4},
	// camps2
	{id: 20, name: "Nest of Spies",     abilities: [{cost: 1, effect: "?(mp)::d(2uc)"}],                        initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 0, col_i: 0},
	{id: 21, name: "Omen Clock",        abilities: [{cost: 1, effect: "v(v)"}],                                 initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 0, col_i: 1, on_activate_sound: sound_omen_clock_i},
	{id: 22, name: "Scavenger Camp",    abilities: [{cost: 2, effect: "a"}, {cost: 1, effect: "?(r)::r(1c)"}],  initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 0, col_i: 2},
	{id: 23, name: "Training Camp",     abilities: [{cost: 1, effect: "?(p)::f(1np)?(iv)::j(i)pw"}],            initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 0, col_i: 3},
	{id: 24, name: "Oasis",             abilities: [],                                                          initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 0, col_i: 4},
	{id: 25, name: "Labor Camp",        abilities: [{cost: 0, effect: "k(1p)r(1c)"}],                           initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 1, col_i: 0},
	{id: 26, name: "Atomic Garden",     abilities: [{cost: 2, effect: "?(1dp)::r(1dp)m(i)"}],                   initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 1, col_i: 1},
	{id: 27, name: "Parachute Base",    abilities: [{cost: 0, effect: "?(c1)::cb(i)d(i)"}],                     initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 1, col_i: 2},
	{id: 28, name: "Arcade",            abilities: [{cost: 1, effect: "?(fp)::p"}],                             initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 1, col_i: 3},
	{id: 29, name: "Resonator",         abilities: [{cost: 2, effect: "?(2udc)::k(2udc)"}],                     initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 1, col_i: 4},
	{id: 30, name: "Bonfire",           abilities: [{cost: 0, effect: "d(s)*r(1c)"}],                           initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 2, col_i: 0},
	{id: 31, name: "Pilbox",            abilities: [{cost: 3, effect: "d(2uc)"}],                               initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 2, col_i: 1},
	{id: 32, name: "Outpost",           abilities: [{cost: 2, effect: "a"}, {cost: 2, effect: "r(1c)"}],        initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 2, col_i: 2},
	{id: 33, name: "Warehouse",         abilities: [{cost: 0, effect: "?(c1)::d(s)j*j*++t"}],                   initial_draw: 1, img_i: camps2_i,  dims: camps2_dims,  row_i: 2, col_i: 3},
	{id: 33, name: "Supply Depot",      abilities: [{cost: 2, effect: "t(4)t(4)j(3)h(3)"}],                     initial_draw: 2, img_i: camps2_i,  dims: camps2_dims,  row_i: 2, col_i: 4},
	// camps3
	{id: 35, name: "Transplant Lab",    abilities: [{cost: 1, effect: "?(mp)::r(1c)"}],                         initial_draw: 2, img_i: camps3_i,  dims: camps3_dims,  row_i: 0, col_i: 0},
	{id: 36, name: "Command Post",      abilities: [{cost: 3, effect: "d(2uc)"}],                               initial_draw: 2, img_i: camps3_i,  dims: camps3_dims,  row_i: 0, col_i: 1},
	{id: 37, name: "Construction Yard", abilities: [{cost: 1, effect: "?(sy)::f(1nm)m(i)k(s)"}],                initial_draw: 2, img_i: camps3_i,  dims: camps3_dims,  row_i: 1, col_i: 0},
	{id: 38, name: "Obelisk",           abilities: [],                                       initial_damage: 2, initial_draw: 3, img_i: camps3_i,  dims: camps3_dims,  row_i: 1, col_i: 1},
	// people1
	{id: 39, name: "Mimic",             abilities: [{cost: 0, effect: "?(y)::b(yp)"}],                          play_cost: 1, junk: JUNK_INJUR  , img_i: people1_i, dims: people1_dims, row_i: 0, col_i: 0},
	{id: 40, name: "Wounded Soldier",   abilities: [{cost: 1, effect: "d(2uc)"},null,{effect:"td(s)"}],         play_cost: 1, junk: JUNK_INJUR  , img_i: people1_i, dims: people1_dims, row_i: 0, col_i: 1},
	{id: 41, name: "Muse",              abilities: [{cost: 0, effect: "w"}],                                    play_cost: 1, junk: JUNK_INJUR  , img_i: people1_i, dims: people1_dims, row_i: 0, col_i: 2},
	{id: 42, name: "Cult Leader",       abilities: [{cost: 0, effect: "k(1p)d(2uc)"}],                          play_cost: 1, junk: JUNK_DRAW   , img_i: people1_i, dims: people1_dims, row_i: 0, col_i: 3},
	{id: 43, name: "Pyromaniac",        abilities: [{cost: 1, effect: "?(2um)::d(2um)"}],                       play_cost: 1, junk: JUNK_INJUR  , img_i: people1_i, dims: people1_dims, row_i: 0, col_i: 4, on_activate_sound: sound_maniacal_laugh_i, on_resolve_sound: sound_fire_burst_i},
	{id: 44, name: "Mutant",            abilities: [{cost: 0, effect: "d(2uc)r(1c)d(s)"}],                      play_cost: 1, junk: JUNK_INJUR  , img_i: people1_i, dims: people1_dims, row_i: 1, col_i: 0, on_resolve_sound: sound_baseball_bat_bonk_i},
	{id: 45, name: "Vigilante",         abilities: [{cost: 1, effect: "i(2up)"}],                               play_cost: 1, junk: JUNK_RAID   , img_i: people1_i, dims: people1_dims, row_i: 1, col_i: 1, on_activate_sound: sound_batter_up_i, on_resolve_sound: sound_baseball_bat_bonk_i},
	{id: 46, name: "Gunner",            abilities: [{cost: 2, effect: "i(a2up)"}],                              play_cost: 1, junk: JUNK_RESTORE, img_i: people1_i, dims: people1_dims, row_i: 1, col_i: 2, on_activate_sound: sound_gunning_i},
	{id: 47, name: "Assassin",          abilities: [{cost: 2, effect: "?(2up)::k(2up)"}],                       play_cost: 1, junk: JUNK_RAID   , img_i: people1_i, dims: people1_dims, row_i: 1, col_i: 3, on_resolve_sound: sound_blade_slice_i},
	{id: 48, name: "Rabble Rouser",     abilities: [{cost: 1, effect: "p"}, {cost: 1, effect: "?(p)::d(2uc)"}], play_cost: 1, junk: JUNK_RAID   , img_i: people1_i, dims: people1_dims, row_i: 1, col_i: 4},
	{id: 49, name: "Doomsayer",         abilities: [{cost: 1, effect: "?(2v)::d(2uc)"},null,{effect:"v(z)"}],   play_cost: 1, junk: JUNK_DRAW   , img_i: people1_i, dims: people1_dims, row_i: 2, col_i: 0},
	{id: 50, name: "Scientist",         abilities: [{cost: 1, effect: "t(4)t(4)t(4)j(3)j(3)b(3j)"}],            play_cost: 1, junk: JUNK_RAID   , img_i: people1_i, dims: people1_dims, row_i: 2, col_i: 1, on_activate_sound: sound_crazy_laugh_i},
	{id: 51, name: "Vanguard",          abilities: [{cost: 1, effect: "d(2uc)2d(2uc)"},null,{effect:"p"}],      play_cost: 1, junk: JUNK_RAID   , img_i: people1_i, dims: people1_dims, row_i: 2, col_i: 2, on_resolve_sound: sound_blade_slice_i},
	{id: 52, name: "Looter",            abilities: [{cost: 2, effect: "d(2uc)?(im):t"}],                        play_cost: 1, junk: JUNK_WATER  , img_i: people1_i, dims: people1_dims, row_i: 2, col_i: 3},
	{id: 53, name: "Scout",             abilities: [{cost: 1, effect: "a"}],                                    play_cost: 1, junk: JUNK_WATER  , img_i: people1_i, dims: people1_dims, row_i: 2, col_i: 4},
	// people2
	{id: 54, name: "Exterminator",      abilities: [{cost: 1, effect: "k(a2dp)"}],                              play_cost: 1, junk: JUNK_DRAW   , img_i: people2_i, dims: people2_dims, row_i: 0, col_i: 0, on_activate_sound: sound_gunning_i},
	{id: 55, name: "Sniper",            abilities: [{cost: 2, effect: "d(2c)"}],                                play_cost: 1, junk: JUNK_RESTORE, img_i: people2_i, dims: people2_dims, row_i: 0, col_i: 1},
	{id: 56, name: "Rescue Team",       abilities: [{cost: 0, effect: "h(1p)"},null,{effect:"m(s)"}],           play_cost: 1, junk: JUNK_INJUR  , img_i: people2_i, dims: people2_dims, row_i: 0, col_i: 2},
	{id: 57, name: "Repair Bot",        abilities: [{cost: 2, effect: "r(1c)"},null,{effect:"r(1c)"}],          play_cost: 1, junk: JUNK_INJUR  , img_i: people2_i, dims: people2_dims, row_i: 0, col_i: 3},
	{id: 58, name: "Holdout",           abilities: [{cost: 1, effect: "d(2uc)"}],                               play_cost: 2, junk: JUNK_RAID   , img_i: people2_i, dims: people2_dims, row_i: 1, col_i: 0},
	{id: 59, name: "Vera Vosh",         abilities: [{cost: 1, effect: "i(2up)"}],                               play_cost: 3, junk: JUNK_PUNK   , img_i: people2_i, dims: people2_dims, row_i: 1, col_i: 1, on_play_sound: sound_pump_shotgun_i},
	{id: 60, name: "Zeto Khan",         abilities: [{cost: 1, effect: "tttjjj"}],                               play_cost: 3, junk: JUNK_PUNK   , img_i: people2_i, dims: people2_dims, row_i: 1, col_i: 2, on_play_sound: sound_lit_fuse_i},
	{id: 61, name: "Argo Yesky",        abilities: [{cost: 1, effect: "d(2uc)"},null,{effect:"p"}],             play_cost: 3, junk: JUNK_PUNK   , img_i: people2_i, dims: people2_dims, row_i: 1, col_i: 3, on_play_sound: sound_gunning_i},
	{id: 62, name: "Magnus Karv",       abilities: [{cost: 2, effect: "d(2lc)"}],                               play_cost: 3, junk: JUNK_PUNK   , img_i: people2_i, dims: people2_dims, row_i: 2, col_i: 0, on_play_sound: sound_blade_slice_i, on_resolve_sound: sound_blade_slice_i},
	{id: 63, name: "Molgur Stang",      abilities: [{cost: 1, effect: "k(2m)"}],                                play_cost: 4, junk: JUNK_PUNK   , img_i: people2_i, dims: people2_dims, row_i: 2, col_i: 1, on_play_sound: sound_explosion_i, on_resolve_sound: sound_explosion_i},
	{id: 64, name: "Karli Blaze",       abilities: [{cost: 1, effect: "d(2uc)"}],                               play_cost: 3, junk: JUNK_PUNK   , img_i: people2_i, dims: people2_dims, row_i: 2, col_i: 2, on_play_sound: sound_batter_up_i, on_resolve_sound: sound_baseball_bat_bonk_i},
	// events
	{id: 65, name: "High Ground",       delay: 1, effect: "h(4a1p*)*c(3f)",                                     play_cost: 0, junk: JUNK_WATER  , img_i: events_i,  dims: events_dims,  row_i: 0, col_i: 0},
	{id: 66, name: "Banish",            delay: 1, effect: "?(2p)::k(2p)",                                       play_cost: 1, junk: JUNK_RAID   , img_i: events_i,  dims: events_dims,  row_i: 0, col_i: 1},
	{id: 67, name: "Interrogate",       delay: 0, effect: "t(4)t(4)t(4)t(4)j(3)j(3)j(3)h(3)",                   play_cost: 1, junk: JUNK_WATER  , img_i: events_i,  dims: events_dims,  row_i: 0, col_i: 2},
	{id: 68, name: "Famine",            delay: 1, effect: "{?(fp)/k(1p)?(fp)}2{?(fp)/k(1p)?(fp)}",              play_cost: 1, junk: JUNK_INJUR  , img_i: events_i,  dims: events_dims,  row_i: 0, col_i: 3},
	{id: 69, name: "Uprising",          delay: 2, effect: "ppp",                                                play_cost: 1, junk: JUNK_INJUR  , img_i: events_i,  dims: events_dims,  row_i: 0, col_i: 4},
	{id: 70, name: "Strafe",            delay: 0, effect: "i(a2up)",                                            play_cost: 2, junk: JUNK_DRAW   , img_i: events_i,  dims: events_dims,  row_i: 1, col_i: 0, on_resolve_sound: sound_gunning_i},
	{id: 71, name: "Truce",             delay: 0, effect: "h(a1p)2h(a1p)",                                      play_cost: 2, junk: JUNK_INJUR  , img_i: events_i,  dims: events_dims,  row_i: 1, col_i: 1},
	{id: 72, name: "Radiation",         delay: 1, effect: "i(ap)",                                              play_cost: 2, junk: JUNK_RAID   , img_i: events_i,  dims: events_dims,  row_i: 1, col_i: 2},
	{id: 73, name: "Napalm",            delay: 1, effect: "?(2p)::k(2lp)",                                      play_cost: 2, junk: JUNK_RESTORE, img_i: events_i,  dims: events_dims,  row_i: 1, col_i: 3},
	{id: 74, name: "Bombardment",       delay: 3, effect: "d(a2m)?(26mk):t?(27mk):t?(28mk):t",                  play_cost: 4, junk: JUNK_RESTORE, img_i: events_i,  dims: events_dims,  row_i: 1, col_i: 4, on_resolve_sound: sound_triple_explosion_i},
	// effects
	{id: 75, name: "Destroy",           effect: "k",    img_i: effects_i, dims: effects_dims, row_i: 0,  col_i: 0, on_activate_sound: sound_lit_fuse_i, on_resolve_sound: sound_explosion_i},
	{id: 76, name: "To Hand",           effect: "h",    img_i: effects_i, dims: effects_dims, row_i: 1,  col_i: 0, on_resolve_sound: sound_pickup_card_i},
	{id: 77, name: "Flip",              effect: "f",    img_i: effects_i, dims: effects_dims, row_i: 2,  col_i: 0, on_resolve_sound: sound_flip_card_i},
	{id: 78, name: "Advance",           effect: "v(v)", img_i: effects_i, dims: effects_dims, row_i: 3,  col_i: 0},
	{id: 79, name: "Play",              effect: "c",    img_i: effects_i, dims: effects_dims, row_i: 4,  col_i: 0, on_resolve_sound: sound_place_card_i},
	{id: 80, name: "Use Ability",       effect: "b",    img_i: effects_i, dims: effects_dims, row_i: 5,  col_i: 0},
	{id: 81, name: "Damage",            effect: "d",    img_i: effects_i, dims: effects_dims, row_i: 6,  col_i: 0, on_activate_sound: sound_pump_shotgun_i, on_resolve_sound: sound_gunshot_i},
	{id: 82, name: "Injur",             effect: "i",    img_i: effects_i, dims: effects_dims, row_i: 7,  col_i: 0, on_activate_sound: sound_pump_shotgun_i, on_resolve_sound: sound_gunshot_i},
	{id: 83, name: "Restore",           effect: "r",    img_i: effects_i, dims: effects_dims, row_i: 8,  col_i: 0, on_resolve_sound: sound_restore_i},
	{id: 84, name: "Draw",              effect: "t",    img_i: effects_i, dims: effects_dims, row_i: 9,  col_i: 0, on_resolve_sound: sound_pickup_card_i},
	{id: 85, name: "Punk",              effect: "p",    img_i: effects_i, dims: effects_dims, row_i: 10, col_i: 0, on_resolve_sound: sound_place_card_i},
	{id: 86, name: "Make Ready",        effect: "m",    img_i: effects_i, dims: effects_dims, row_i: 11, col_i: 0},
	{id: 87, name: "Water",             effect: "w",    img_i: effects_i, dims: effects_dims, row_i: 12, col_i: 0, on_resolve_sound: sound_water_i},
];

// gamestate vars
var socket              = null;
var my_id               = 0;
var turn                = -2;
var camp_pile           = null;
var draw_pile           = null;
var discard_pile        = null;
var p1                  = {water: 0}; // player 1
var p2                  = {water: 0}; // player 2
var estack              = []; // effect stack
var packet_sequence_num = 0;
var prev_game_state     = null;
var sent_effect         = false;
var experimental_on     = false;

// this_turn trackers                             currently applies to:
var event_resolved_this_turn          = false; // watchtower
var event_played_this_turn            = false; // zeto
var ability_used_this_turn            = false; // vera
var p0_raiders_resolved_this_turn     = false; // scavenger camp
var p0_high_ground_resolved_this_turn = false; // high ground
var p1_raiders_resolved_this_turn     = false; // scavenger camp
var p1_high_ground_resolved_this_turn = false; // high ground
var people_placed_this_turn           = 0;     // transplant lab, nest of spies
var prev_sound_played_i               = -1;

// ui vars
var dragging_pile = null;
var dragging_from = null;
var dragging_from_i = 0;
var starting_turn = true;
var status_text   = "";
var is_logging    = false;
var oc            = null;
var octx          = null;
var oc_scale      = 3;
var sounds        = [];
var prev_sound    = null;
var game_over     = false;
var is_mobile     = false;

function Init() {
	// connect to server and set up listeners
	socket = io();
	if(socket == null) {console.log("could not connect to server"); return;}
	socket.on('state', function(state) {
		if(state.startsWith("redirect:")) {
			url = state.substring("redirect:".length, state.length);
			window.location.replace(url);
			return;
		}
		var game_state = JSON.parse(state);
		ApplyGameState(game_state);
	});
	socket.on('chat', function(chat_msg) {
		console.log(chat_msg);
		status_text = chat_msg;
	});
	// send connection packet to server and apply random seed
	var url = window.location.href;
	applySeed(url.substring(0, url.length-1));
	my_id = Number(url[url.length-1]);
	timer_enabled = url.includes("timed");
	experimental_on = url.includes("ex");
	socket.emit("con", url);
	// init offscreen canvas and context for an intermediate for drawing cards for smooth scaling
	oc = document.createElement("canvas");
	octx = oc.getContext("2d");
	oc.width = card_width * oc_scale;
	oc.height = card_width * oc_scale;
	// fill imgs array
	for(var i = 0; ; i++) {
		var img = document.getElementById("img" + i);
		if(img == null) break;
		if(experimental_on && i >= 2 && i <= 7) {
			var last_slash_i = img.src.lastIndexOf("/");
			img.src = img.src.substring(0, last_slash_i) + "/ex_" + img.src.substring(last_slash_i + 1, img.src.length);
		}
		imgs.push(img);
	}
	// fill sounds array
	for(var i = 0; i < sound_urls.length; i++) {
		sounds.push(new Audio(sound_urls[i]));
		sounds[sounds.length - 1].volume = 0.2;
	}
	// create global piles
	draw_pile     = new_pile();
	discard_pile  = new_pile(false, false, null, null, card_width, card_height);
	temp_pile     = new_pile(true,  false, null, null, card_width, card_height);
	camp_pile     = new_pile();
	dragging_pile = new_pile(true);
	// create player piles
	for(var i = 0; i < num_players; i++) {
		var people_yoff = i == 0 ? p1_people_yoff : p2_people_yoff;
		var p = i == 0 ? p1 : p2;
		p.basics = new_pile(false, true, 1, 3);
		p.board  = new_pile(true,  true, 3, 9);
		p.events = new_pile(false, true, 1, 3);
		p.hand   = new_pile(false, false, null, null, card_width, card_height);
	}
	// do experimental changes
	if(experimental_on) {
		turn = -4; // discard enemy camp turns
		// allow restoring enemies and damaging own cards
		for(var i = 0; i < cards.length; i++) {
			var card = cards[i];
			if(card.abilities == null) continue;
			for(var j = 0; j < card.abilities.length; j++) {
				if(card.abilities[j] == null) continue;
				card.abilities[j].effect = card.abilities[j].effect.replace("d(2", "d(");
				card.abilities[j].effect = card.abilities[j].effect.replace("i(2", "i(");
				card.abilities[j].effect = card.abilities[j].effect.replace("r(1", "r(");
			}
		}
		// initial draw changes (and initial damage)
		cards[6].initial_draw = 1;    // octagon (maybe 2 cost k(2up) instead of 2k(1p))
		cards[6].initial_damage = 1;  // octagon
		cards[9].initial_draw = 1;    // rail gun
		cards[9].initial_damage = 1;  // rail gun
		cards[13].initial_draw = 1;   // mulcher
		cards[13].initial_damage = 1; // mulcher
		cards[16].initial_draw = 2;   // blood bank
		cards[16].initial_damage = 1; // blood bank
		cards[20].initial_damage = 1; // nest of spies
		cards[21].initial_damage = 1; // omen clock
		cards[24].initial_damage = 1; // oasis
		cards[27].initial_damage = 1; // parachute base
		cards[35].initial_draw = 1;   // transplant lab
		cards[36].initial_draw = 1;   // command post
		// people play and ability cost changes
		cards[59].play_cost = 2; // vera vosh
		cards[64].play_cost = 2; // karli blaze
		cards[64].abilities[0].cost = 2; // karli blaze
		// people junk changes
		cards[55].junk = JUNK_WATER;   // sniper
		cards[52].junk = JUNK_RESTORE; // looter
		cards[57].junk = JUNK_WATER;   // repair bot
		cards[53].junk = JUNK_INJUR;   // scout
		cards[43].junk = JUNK_DRAW;    // pyromaniac
		// events junk changes
		cards[65].junk = JUNK_DRAW;    // high ground
		cards[70].junk = JUNK_WATER;   // strafe
		cards[67].junk = JUNK_INJUR;   // interrogate
		cards[71].junk = JUNK_WATER;   // truce
	}
	// init draw pile
	for(var i = people_start_i; i < effects_start_i; i++) {
		var card = cards[i];
		draw_pile.cards.push(card.id);
		if(i >= events_start_i || i <= 58) // if event or non-unique person, add another copy
			draw_pile.cards.push(card.id);
	}
	shuffle(draw_pile.cards);
	// init camp pile
	for(var i = camps_start_i; i < people_start_i; i++) {
		camp_pile.cards.push(i);
	}
	shuffle(camp_pile.cards);
	// deal camps to each player
	var num_camps = 6;
	if(experimental_on) num_camps = 7;
	for(var i = 0; i < num_camps; i++) {
		if(my_id == 1) {
			move_card(camp_pile, 0, p2.hand, 0);
			move_card(camp_pile, 0, p1.hand, 0);
		}
		else {
			move_card(camp_pile, 0, p1.hand, 0);
			move_card(camp_pile, 0, p2.hand, 0);
		}
	}
	// add silo and raiders to each player
	p1.basics.cards[0] = punk_i;
	p1.basics.cards[1] = water_i;
	p1.basics.cards[2] = raiders_i;
	p2.basics.cards[0] = aid_i;
	p2.basics.cards[1] = water_i;
	p2.basics.cards[2] = raiders_i;
	starting_turn = false;
}

function chat(chat_msg) {
	socket.emit("chat", chat_msg);
}

// other junks will trigger a sound at a different time
function play_sound_for_junk(junk_effect) {
	if(junk_effect == JUNK_WATER) PlaySound(sounds[sound_water_i]);
	if(junk_effect == JUNK_DRAW)  PlaySound(sounds[sound_pickup_card_i]);
}

function SaveGame() {
	console.log("copy the following and run it in the console of a new game to restore this game state");
	console.log(":");
	console.log("ApplyGameState(" + JSON.stringify(prev_game_state) + ");SendGameState(" + prev_game_state.end_of_turn + ", " + prev_game_state.response + ");");
}

function SendGameState(end_of_turn, response) {
	if(my_id > 1) return; // don't send anything as a spectator
	packet_sequence_num += 1;
	var pile_cards = [draw_pile.cards, discard_pile.cards,
		p1.basics.cards, p1.board.cards, p1.events.cards, p1.hand.cards,
		p2.basics.cards, p2.board.cards, p2.events.cards, p2.hand.cards];
	var pile_card_states = [p1.board.card_states, p2.board.card_states];
	var game_state = {
		packet_sequence_num:               packet_sequence_num,
		my_id:                             my_id,
		water:                             p1.water,
		turn:                              turn,
		pile_cards:                        pile_cards,
		pile_card_states:                  pile_card_states,
		end_of_turn:                       end_of_turn,
		estack:                            estack,
		response:                          response,
		event_resolved_this_turn:          event_resolved_this_turn,
		event_played_this_turn:            event_played_this_turn,
		ability_used_this_turn:            ability_used_this_turn,
		p0_raiders_resolved_this_turn:     p0_raiders_resolved_this_turn,
		p0_high_ground_resolved_this_turn: p0_high_ground_resolved_this_turn,
		p1_raiders_resolved_this_turn:     p1_raiders_resolved_this_turn,
		p1_high_ground_resolved_this_turn: p1_high_ground_resolved_this_turn,
		people_placed_this_turn:           people_placed_this_turn,
		prev_sound_played_i:               prev_sound_played_i,
		turn_time_left:                    turn_time_left,
		//version: 1,
	};
	socket.emit("state", JSON.stringify(game_state));
	prev_sound_played_i = -1;
	prev_game_state = game_state;
	if(is_logging) console.log("sending: ");
	if(is_logging) console.log(JSON.parse(JSON.stringify(game_state)));
	if(is_logging) console.trace();
	sent_effect = false;
	return game_state;
}

function ApplyGameState(game_state) {
	// adapt old game_states to new
	//if(game_state.version == null) {
	//}
	if(dragging_pile.cards.length > 0) {
		move_card(dragging_pile, 0, dragging_from, 0);
		dragging_from = null;
	}
	status_text = "";
	if(is_logging) console.log("applying: ");
	if(is_logging) console.log(game_state);
	packet_sequence_num = game_state.packet_sequence_num;
	// apply water and turn state
	if(game_state.my_id == my_id)
		p1.water = game_state.water;
	else
		p2.water = game_state.water;
	turn = game_state.turn;
	event_resolved_this_turn          = game_state.event_resolved_this_turn;
	event_played_this_turn            = game_state.event_played_this_turn;
	ability_used_this_turn            = game_state.ability_used_this_turn;
	p0_raiders_resolved_this_turn     = game_state.p0_raiders_resolved_this_turn;
	p0_high_ground_resolved_this_turn = game_state.p0_high_ground_resolved_this_turn;
	p1_raiders_resolved_this_turn     = game_state.p1_raiders_resolved_this_turn;
	p1_high_ground_resolved_this_turn = game_state.p1_high_ground_resolved_this_turn;
	people_placed_this_turn           = game_state.people_placed_this_turn;
	// play prev_sound_played_i from other player
	if(turn >= 0 && game_state.my_id != my_id && game_state.prev_sound_played_i != null && game_state.prev_sound_played_i != -1) {
		PlaySound(sounds[game_state.prev_sound_played_i]);
	}
	// update cards
	var me = p1;
	var them = p2;
	if(game_state.my_id != my_id) {
		me = p2;
		them = p1;
	}
	me.board.card_states      = game_state.pile_card_states[0];
	draw_pile.cards     = game_state.pile_cards[0];
	discard_pile.cards  = game_state.pile_cards[1];
	me.basics.cards     = game_state.pile_cards[2];
	me.board.cards      = game_state.pile_cards[3];
	me.events.cards     = game_state.pile_cards[4];
	me.hand.cards       = game_state.pile_cards[5];
	them.basics.cards   = game_state.pile_cards[6];
	// set basic cards' first slot for both boards
	p1.basics.cards[0] = punk_i;
	p2.basics.cards[0] = aid_i;
	// return if we're still choosing camps
//	if(turn <= -1 && turn > -3 && game_state.my_id != my_id) return; // don't override our cards when choosing camps
	them.board.cards    = game_state.pile_cards[7];
	them.events.cards   = game_state.pile_cards[8];
	them.hand.cards     = game_state.pile_cards[9];
	them.board.card_states    = game_state.pile_card_states[1];

	// update estack (unless we're waiting for a response on a to_send)
	if(!(estack.length > 0 && estack[0].to_send && game_state.my_id != my_id && turn % 2 == my_id && !game_state.response)) {
		estack = [];
		for(var i = 0; i < game_state.estack.length; i++)
			estack.push(game_state.estack[i]);
	}
	// clear effects and temp if end of turn
	if(game_state.end_of_turn) {
		estack = [];
		temp_pile.cards = [];
		temp_pile.card_states = [];
	}
	// if we're receiving a state update when not our turn that isn't prompting us to do something, clear the stack
	if(game_state.my_id != my_id && turn % 2 != my_id && estack.length > 0 && !estack[0].to_send) {
		estack = [];
		temp_pile.cards = [];
		temp_pile.card_states = [];
	}
	// if recent game state send was the end of a turn and its now our turn start it
	if(game_state.end_of_turn && turn % 2 == my_id && turn >= 0)
		start_turn();
	// view their timer when not our turn
	if(turn % 2 != my_id)
		turn_time_left = game_state.turn_time_left;
	if(game_state.my_id != my_id && game_state.estack.length > 0 && game_state.estack[0].to_send) {
		// if we're receiving the response to something we sent, be done with it and continue if need be
		if(game_state.response) {
			estack.splice(0, 1);
			if(estack.length > 0 && !is_continuing_later(estack[0].cur_effect, estack[0].mods))
				continue_effect(estack[0].prev_target_pile, estack[0].prev_target_i);
		}
		else { // if they sent effects for us to do, resolve them
			temp_pile.cards = [];
			temp_pile.card_states = [];
			PlaySound(sounds[sound_bell_i], true);
			resolve(game_state.estack[0].to_send, null, null, false, false, true);
		}
	}
	// if we're receiving our own response, clear the stack
	if(game_state.response && game_state.my_id == my_id) {
		estack = [];
		temp_pile.cards = [];
		temp_pile.card_states = [];
	}
	prev_sound_played_i = -1;
	prev_game_state = game_state;
	sent_effect = false;
}

var turn_time_left = "";
var timer_interval = setInterval(timer, 1000);
var timer_enabled = false;
function timer() {
	if(turn_time_left === "") return;
	if(!timer_enabled) return;
	if(turn < 0) return;
	if(estack.length > 0 && estack[0].str == "g") return; // stop timer when game is over
	if(estack.length > 0 && estack[0].to_send) return; // don't count when waiting on opponent
	if(estack.length > 1 && estack[1].to_send) return; // don't count when doing a sent effect
	turn_time_left -= 1;
	if(turn_time_left <= 0) {
		turn_time_left = 0;
		if(estack.length == 0) // don't end turn until the final effect is resolved
			end_turn();
	}
}

function start_turn() {
	if(timer_enabled)
		turn_time_left = 120;
	PlaySound(sounds[sound_bell_i], true);
	starting_turn = true;
	if(turn == 0) {
		// draw initial cards
		for(var i = 0; i < 3; i++) {
			var camp1 = cards[p1.board.cards[6 + i]];
			for(var j = 0; j < camp1.initial_draw; j++) {
				move_card(draw_pile, 0, p1.hand, 0);
			}
			var camp2 = cards[p2.board.cards[6 + i]];
			for(var j = 0; j < camp2.initial_draw; j++) {
				move_card(draw_pile, 0, p2.hand, 0);
			}
		}
	}
	event_resolved_this_turn = false;
	event_played_this_turn = false;
	ability_used_this_turn = false;
	p0_raiders_resolved_this_turn = false;
	p0_high_ground_resolved_this_turn = false;
	p1_raiders_resolved_this_turn = false;
	p1_high_ground_resolved_this_turn = false;
	people_placed_this_turn = 0;
	prev_sound_played_i = -1;
	// ready camps and unharmed people
	for(var i = 0; i < p1.board.card_states.length; i++) {
		if(p1.board.cards[i] == empty_i)
			p1.board.card_states[i] = UNHARMED;
		else if(is_person(p1.board, i) && (p1.board.card_states[i] & 3) != HARMED)
			p1.board.card_states[i] |= READY;
		else if(is_camp(p1.board, i))
			p1.board.card_states[i] |= READY;
	}
	// events (resolve 1st slot, move 2nd and 3rd up 1)
	for(var j = 0; j < p1.events.cards.length; j++) {
		if(p1.events.cards[j] == empty_i) continue;
		place_on_events(p1.events, j, p1.events, j - 1, true);
	}
	// income (3 water (1 on first turn), draw 1)
	p1.water = turn == 0 ? 1 : 3;
	move_card(draw_pile, 0, p1.hand, 0);
	// actions (auto-do water silo if in hand)
	for(var i = 0; i < p1.hand.cards.length; i++) {
		if(p1.hand.cards[i] == 0) {
			p1.water += 1;
			move_card(p1.hand, i, p1.basics, 1);
			break;
		}
	}
	starting_turn = false;
	// send all updates at once
	SendGameState();
	status_text = "Your turn";
}

function end_turn() {
	if(turn >= 0 && turn % 2 != my_id) return;
	// auto-use unspent water
	while(p1.water >= 2) on_click_basic(p1.basics, 0);
	if(p1.water == 1) on_click_basic(p1.basics, 1);
	if(turn <= -1 && turn > -3) {
		var empty_camps = 0;
		for(var i = 6; i < 9; i++) {
			if(p1.board.cards[i] == empty_i) {
				empty_camps += 1;
				continue;
			}
		}
		if(empty_camps != 0) {
			status_text = "pick your camps!";
			return;
		}
		// deal initial damage to camps
		for(var i = 6; i < 9; i++) {
			if(cards[p1.board.cards[i]].initial_damage != null)
				p1.board.card_states[i] = cards[p1.board.cards[i]].initial_damage;
		}
		// clear camp cards from hand
		p1.hand.cards = [];
//		p2.hand.cards = [];
	}
	turn++;
	if(is_logging) console.log("sending at end of turn: ");
	prev_sound_played_i = -1;
	SendGameState(true);
	if(turn >= 0 && turn % 2 == my_id)
		start_turn();
}

function done_with_optionals() {
	temp_pile.cards = [];
	temp_pile.card_states = [];
	var prev_effect = estack[0].str[estack[0].i - 1];
	if(prev_effect == '*') {
		estack[0].resolving_any_num = false;
		continue_effect(estack[0].prev_target_pile, estack[0].prev_target_i, true);
		return;
	}
	// [] optional skipped, go to next one
	while(estack[0].str[estack[0].i] != ']') estack[0].i += 1;
	continue_effect(estack[0].prev_target_pile, estack[0].prev_target_i);
}

function restart_turn() {
	if(turn < 0) return;
	socket.emit("restart_turn");
}

function Update() {
	// adjust extra space on right side to avoid stretching
	var screenRatio = scaledCanvas.width / scaledCanvas.height;
	if(scaledCanvas.height > scaledCanvas.width) screenRatio = 1 / screenRatio;
	if(screenRatio > 1650/1080) {
		if(scaledCanvas.width > scaledCanvas.height) {
			var heightRatio = scaledCanvas.height / canvas.height;
			canvas.width = scaledCanvas.width / heightRatio;
		}
		else {
			var heightRatio = scaledCanvas.width / canvas.height;
			canvas.width = scaledCanvas.height / heightRatio;
		}
	}
	DrawRect(0, 0, canvas.width, canvas.height, "black");

	var my_turn = turn >= 0 && turn % num_players == my_id;
	// Control Buttons
	if(my_turn) {
		DoButton("Restart Turn", restart_turn, mat_endx + 10, 140, card_width * 2 + 10, card_width);
	}
	if(!is_resolving() && (turn <= -1 || my_turn) && !(turn == -1 && p1.hand.cards.length == 0) && !(turn <= -3 && p2.hand.cards.length == 6)) {
		DoButton("End Turn", end_turn, mat_endx + 10, 140 + card_width + 10, card_width * 2 + 10, card_width);
	}
	if(innerHeight != screen.height)
		DoButton("Fullscreen", () => document.body.requestFullscreen(), mat_endx + 10, 140 + card_width * 2 + 20, card_width * 2 + 10, card_width);
	else
		DoButton("Windowed", () => document.exitFullscreen(), mat_endx + 10, 140 + card_width * 2 + 20, card_width * 2 + 10, card_width);

	// Temp or Player 0 Hand (for spectators)
	if((my_id == 0 || my_id == 1) && !(experimental_on && turn < 0)) {
		var temp_width = canvas.width;
		var draggable_end_i = -1;
		if(is_resolving()) {
			var prev_effect = estack[0].i > 0 ? estack[0].str[estack[0].i - 1] : null;
			if(prev_effect == '[' || (prev_effect == '*' && estack[0].str.indexOf('*') == estack[0].i - 1)) {
				temp_width -= done_width - 10;
				DoButton("Done", done_with_optionals, canvas.width - done_width, temp_yoff, done_width, card_height);
			}
			if(estack.length > 0) // done_with_optionals might make this false
				draggable_end_i = estack[0].my_num_in_temp;
		}
		DrawRect(mat_endx, temp_yoff, temp_width - mat_endx - 10, card_height, "grey");
		DrawText("Temp:", mat_endx, temp_yoff - 12, 24, "white");
		render_pile(temp_pile, mat_endx, temp_yoff);
		scroll_pile(temp_pile, mat_endx, temp_yoff, mat_endx + temp_width, temp_yoff + card_height);
		drag_from_pile(temp_pile, mat_endx, temp_yoff, draggable_end_i);
	}
	else if(!isNaN(my_id)) {
		DrawRect(mat_endx, temp_yoff, canvas.width - mat_endx, card_height, "grey");
		if(experimental_on) {
			DrawText("Other Player Hand:", mat_endx, temp_yoff - 12, 24, "white");
			if(turn <= -3 && p2.hand.cards.length > 6) {
				status_text = "Discard a camp from the other player's hand";
				click_pile(p2.hand, mat_endx, temp_yoff, (pile, i) => {move_card(pile, i, null, 0);end_turn();status_text = "pick your camps";});
			}
		}
		else
			DrawText("Player 0 Hand:", mat_endx, temp_yoff - 12, 24, "white");
		render_pile(p2.hand, mat_endx, temp_yoff);
		scroll_pile(p2.hand, mat_endx, temp_yoff, mat_endx + temp_width, temp_yoff + card_height);
	}
	// Discard Pile
	DrawRect(mat_endx, discard_yoff, canvas.width - mat_endx, card_height, "grey");
	DrawText("Discard:", mat_endx, discard_yoff - 12, 24, "white");
	render_pile(discard_pile, mat_endx, discard_yoff);
	scroll_pile(discard_pile, mat_endx, discard_yoff, canvas.width, discard_yoff + card_height);
	drag_to_pile(discard_pile, mat_endx, discard_yoff, on_drag_to_discard, canvas.width, discard_yoff + card_height);
	// Self Hand / Player 1 Hand (for spectators)
	DrawRect(mat_endx, canvas.height - card_height, canvas.width - mat_endx, card_height, "grey");
	if(my_id == 0 || my_id == 1)
		DrawText("Hand:", mat_endx, canvas.height - card_height - 12, 24, "white");
	else
		DrawText("Player 1 Hand:", mat_endx, canvas.height - card_height - 12, 24, "white");
	if(!isNaN(my_id))
		render_pile(p1.hand, mat_endx, canvas.height - card_height);
	scroll_pile(p1.hand, mat_endx, canvas.height - card_height, canvas.width, canvas.height);
	if(turn > -3 && (!is_resolving() || estack[0].cur_effect == 'c' || estack[0].cur_effect == 'j'))
		drag_from_pile(p1.hand, mat_endx, canvas.height - card_height);

	// render hovered card on top of temp, discard, and hand
	if(turn <= -3)
		hover_pile(p2.hand, mat_endx, temp_yoff);
	hover_pile(temp_pile, mat_endx, temp_yoff);
	hover_pile(discard_pile, mat_endx, discard_yoff);
	hover_pile(p1.hand, mat_endx, canvas.height - card_height);
	// render mats
	var mat_w = 1920*(1695/1920)/2.15;
	var mat_h = 1080*(950/1032)/2.15;
	DrawImage(imgs[mat1_i], 0, canvas.height - mat_h, mat_w, mat_h, 105, 180, 1800 - 155, 1130 - 200);
	DrawImage(imgs[mat2_i], 0, 0, mat_w, mat_h, 150, 180, 1800 - 90, 1130 - 180, 180);

	// handle each players basics, board, and events
	for(var i = 0; i < num_players; i++) {
		var p = p1;
		var people_yoff = p1_people_yoff;
		var reverse_order = false;
		if(i == 1) {
			p = p2;
			people_yoff = p2_people_yoff;
			reverse_order = true;
		}
		// basics
		render_pile(p.basics, basic_xoff, people_yoff, reverse_order);
		hover_pile(p.basics, basic_xoff, people_yoff, reverse_order);
		if(!is_resolving() && my_turn && i == 0)
			click_pile(p.basics, basic_xoff, people_yoff, on_click_basic);
		// board
		if(turn <= -1 && i == 1) continue; // dont show enemy board before turn 0
		render_pile(p.board, people_xoff, people_yoff, reverse_order);
		hover_pile(p.board, people_xoff, people_yoff, reverse_order);
		if(is_resolving() || turn <= -1 || my_turn)
			drag_to_pile(p.board, people_xoff, people_yoff, on_drag_to_board, null, null, reverse_order);
		if(!is_resolving() && my_turn && i == 0)
			click_pile(p.board, people_xoff, people_yoff, on_click_board);
		// events
		render_pile(p.events, event_xoff, people_yoff, reverse_order);
		hover_pile(p.events, event_xoff, people_yoff, reverse_order);
		if(is_resolving() || turn <= -1 || my_turn)
			drag_to_pile(p.events, event_xoff, people_yoff, on_drag_to_events, null, null, reverse_order);
	}

	// render ui text
	DrawText("c:" + p1.hand.cards.length, 138, canvas.height - 60, 24, "white");
	DrawText("w:" + p1.water, 138, canvas.height - 100, 24, "white");
	DrawText("c:" + p2.hand.cards.length, 138, 60, 24, "white");
	DrawText("w:" + p2.water, 138, 100, 24, "white");
	DrawText("turn: " + turn, mat_endx + 10, 40 * 1, 24, "white");
	DrawText("my_id: " + my_id, mat_endx + 10, 40 * 2, 24, "white");
	DrawText(draw_pile.cards.length, basic_xoff + card_width/2 - 14, p1_people_yoff + card_height/2 + 14, 24, "white");

	// status text / help text
	if(turn == -1 && p1.hand.cards.length == 0) {
		status_text = "waiting for opponent to choose camps...";
	}
	while(is_resolving()) { // diplay help text
		var cur_effect = estack[0].cur_effect;
		var cur_mods = estack[0].mods;
		var help_text = "";
		if(estack[0].to_send) {
			help_text = "waiting for opponent to ";
			cur_effect = estack[0].to_send[0];
			if(cur_effect == '[' || cur_effect == '{' || cur_effect == 'h') {
				status_text = "waiting for opponent...";
				break;
			}
			if(estack[0].to_send[1] == '(') { // get the mod for the effect we've sent
				var start_i = 2;
				var i = start_i;
				while(estack[0].to_send[i] != ')') i++;
				cur_mods = estack[0].to_send.substring(start_i, i);
			}
		}
		// no help text if nothing in temp
		if(temp_pile.cards.length == 0) {
			status_text = "";
			break;
		}

		     if(cur_effect == 'w') help_text += "gain an extra water";
		else if(cur_effect == 'a') help_text += "sent out or advance raid";
		else if(cur_effect == 't') help_text += "draw a card";
		else if(cur_effect == 'j') help_text += "discard a card";
		else if(cur_effect == 'c') help_text += "play a card";
		else if(cur_effect == 'i') help_text += "injur";
		else if(cur_effect == 'r') help_text += "restore";
		else if(cur_effect == 'p') help_text += "play a punk";
		else if(cur_effect == 'd') help_text += "damage";
		else if(cur_effect == 'k') help_text += "destroy";
		else if(cur_effect == 'f') help_text += "flip over";
		else if(cur_effect == 'm') help_text += "make ready";
		else if(cur_effect == 'h' && !cur_mods.includes('4')) help_text += "send to hand";
		else if(cur_effect == 'h')                            help_text += "send to temp";
		else if(cur_effect == 'b' && cur_mods.includes('j'))  help_text += "use the junk effect of";
		else if(cur_effect == 'b')                            help_text += "use the ability (place left/right if 2, up for argo) of";
		else if(cur_effect == 'v' && cur_mods.includes('v'))  help_text += "advance an event";
		else if(cur_effect == 'v' && cur_mods.includes('z'))  help_text += "delay their events";

		     if(cur_mods.includes('i')) help_text += " it";
		else if(cur_mods.includes('s')) help_text += " self";
		else if(cur_mods.includes('a')) help_text += " all";
		     if(cur_mods.includes('1')) help_text += !estack[0].to_send ? " your" : " their";
		else if(cur_mods.includes('2')) help_text += !estack[0].to_send ? " their" : " your";
		     if(cur_mods.includes('3')) help_text += " from temp";
		else if(!cur_mods.includes('3') && (cur_effect == 'c' || cur_effect == 'j')) help_text += " from hand";
		     if(cur_mods.includes('4')) help_text += " to temp";
		     if(cur_mods.includes('u')) help_text += " unprotected";
		     if(cur_mods.includes('d')) help_text += " damaged";
		     if(cur_mods.includes('l')) help_text += " column of";
		     if(cur_mods.includes('n')) help_text += " face down";
		     if(cur_mods.includes('y')) help_text += " an undamaged (if theirs) or ready (if yours)";
		     if(cur_mods.includes('m')) help_text += " camp";
		else if(cur_mods.includes('p')) help_text += " person/people";
		else if(cur_mods.includes('c')) help_text += " card(s)";
		     if(cur_mods.includes('f')) help_text += " for free";

		var prev_effect = estack[0].str[estack[0].i - 1];
		if(prev_effect == '[')
			help_text += " or click Done";
		if(prev_effect == '*' && estack[0].str.indexOf('*') == estack[0].i - 1)
			help_text += " any number of times then click Done";
		// adjust help text for spectators
		if(my_id > 1) {
			help_text = help_text.replace("their", "p0's");
			help_text = help_text.replace("your", "p1's");
			if(help_text.startsWith("waiting for opponent"))
				help_text = "waiting for p0" + help_text.substring("waiting for opponent".length, help_text.length);
			else
				help_text = "waiting for p1 to " + help_text;
		}
		// only set status if help text is not empty
		if(help_text != "")
			status_text = help_text;
		break;
	}

	// lose con
	if((p1.board.card_states[6] & 3) == FLIPPED && (p1.board.card_states[7] & 3) == FLIPPED && (p1.board.card_states[8] & 3) == FLIPPED
	&& is_camp(p1.board, 6) && is_camp(p1.board, 7) && is_camp(p1.board, 8)) {
		status_text = "You Lost";
		game_over = true;
		if(estack.length == 0) {
			push_effect("g");
			// play lose sound after current sound or now if no sound playing
			if(prev_sound != null && !prev_sound.paused) {
				prev_sound.onended = function() {
					prev_sound.onended = null;
					PlaySound(sounds[sound_lose_i], true);
				};
			}
			else {
				PlaySound(sounds[sound_lose_i], true);
			}
		}
	}
	// win con
	if((p2.board.card_states[6] & 3) == FLIPPED && (p2.board.card_states[7] & 3) == FLIPPED && (p2.board.card_states[8] & 3) == FLIPPED
	&& is_camp(p2.board, 6) && is_camp(p2.board, 7) && is_camp(p2.board, 8)) {
		status_text = "You Won!";
		game_over = true;
		if(estack.length == 0) {
			push_effect("g");
			if(mouse.buttonsPressed.length == 0) return; // if user hasn't interacted with the page, don't re-send the end game state
			SendGameState(true);
			// play win sound after current sound or now if no sound playing
			if(prev_sound != null && !prev_sound.paused) {
				prev_sound.onended = function() {
					prev_sound.onended = null;
					PlaySound(sounds[sound_win_i], true);
				};
			}
			else {
				PlaySound(sounds[sound_win_i], true);
			}
		}
	}
	//status_text = innerWidth + ", " + innerHeight + " - " + mouse.x + ", " + mouse.y + " - " + outerHeight + ", " + screen.height + ", " + window.devicePixelRatio;
	DrawText(turn_time_left + " " + status_text, mat_endx + 10, 40 * 3, 24, "white");

	// render dragged card above everything
	render_pile(dragging_pile, mouse.x - card_width/2, mouse.y - card_height/2);
	// if none of our drag_to_pile targets took the dragged card, move it back
	if(dragging_pile.cards.length > 0 && mouse.buttonsReleased[0]) {
		move_card(dragging_pile, 0, dragging_from, 0);
		if(dragging_from == temp_pile)
			PlaySound(sounds[sound_error_i], true);
		else
			PlaySound(sounds[sound_place_card_i], true);
	}
	// reset input and render from fixed size canvas to scaled canvas
	ResetInput();
	if(scaledCanvas.height > scaledCanvas.width)
		DrawImage(myCanvas, scaledCanvas.width / 2, scaledCanvas.height / 2, scaledCanvas.height, scaledCanvas.width, 0, 0, canvas.width, canvas.height, -90, null, null, true, scaledCtx);
	else
		DrawImage(myCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height, 0, 0, canvas.width, canvas.height, null, null, null, null, scaledCtx);
}

//////////////////// helper funcs ////////////////////

function push_effect(effect_str, self_pile, self_i) {
	var new_effect = {
		str: effect_str,
		i: 0,
		self_pile: self_pile,
		self_i: self_i,
		prev_target_pile: null,
		prev_target_i: null,
		cur_effect: '',
		mods: "",
		any_num: -1,
		resolving_any_num: false,
		success: false,
		received: null,
		to_send: null,
		my_num_in_temp: 0,
		prev_total_in_temp: temp_pile.cards.length,
	};
	estack.splice(0, 0, new_effect);
	var source_card = get_effect_source_card();
	if(source_card != null && source_card.on_activate_sound != null) {
		PlaySound(sounds[source_card.on_activate_sound]);
	}
}

function resolve(effect_str, self_pile, self_i, continuing_effect, repeating_effect, sent_to_us) {
	if(effect_str == "g") return; // don't resolve end game
	status_text = "";
	if(is_logging) console.log(effect_str);
	if(!continuing_effect) {
		push_effect(effect_str, self_pile, self_i);
		if(!can_resolve_effect(effect_str, self_pile, self_i)) {
			status_text = "Effect fizzled because condition not met or no valid targets";
			PlaySound(sounds[sound_error_i], true);
			estack[0].i = estack[0].str.length;
		}
		if(!starting_turn && !sent_to_us) {
			if(is_logging) console.log("sending before effect " + effect_str +  ": ");
			SendGameState();
		}
	}
	var skip_next = false;
	var cur_effect = estack[0].cur_effect;
	var cur_mods = "";
	for(var i = estack[0].i; i < effect_str.length; ) {
		if(estack.length == 0) return; // can happen when going down da stack
		estack[0].i = i;
		estack[0].cur_effect = effect_str[i];
		cur_effect = estack[0].cur_effect;
		estack[0].mods = "";
		cur_mods = "";
		if(effect_str[i] == '(') { // if continuing after a modded effect, skip the mod
			while(effect_str[i] != ')') i++;
			continue;
		}
		if(skip_next && effect_str[i] == '[') { // if skipping an optional block
			while(effect_str[i] != ']') i++;
			i++;
			skip_next = false;
			continue;
		}
		i += 1; // i should always point to next effect
		if(cur_effect == '{' || cur_effect == '[' || cur_effect == ')') {
			continue;
		}
		if(cur_effect == ']') { // if didn't skip an optional, skip the rest
			i = effect_str.length;
			break;
		}
		if(effect_str[i] == '(') { // get the mod for the current effect
			var start_i = i + 1;
			while(effect_str[i] != ')') i++;
			cur_mods = effect_str.substring(start_i, i);
			estack[0].mods = cur_mods;
		}
		if(is_logging) console.log(cur_effect + " w/ mods " + cur_mods);
		if(skip_next) { // if : or / said we should skip, skip now (after passing the mod)
			skip_next = false;
			continue;
		}
		if(cur_effect == '}') { // if hit end of {} return to start if success
			if(estack[0].success)
				continue;
			while(effect_str[i] != '{') i--;
			continue;
		}
		if(cur_effect == ':') { // skip next if previous failed
			if(effect_str[i] == ':' && !estack[0].success) { // if :: and prev not sucess, end effect
				i = effect_str.length;
				break;
			}
			if(!estack[0].success)
				skip_next = true;
			continue;
		}
		if(cur_effect == '/') { // skip next if previous succeeded
			if(estack[0].success)
				skip_next = true;
			continue;
		}

		if(estack[0].cur_effect == '*') {
			// on first instance, resolve any number of next effect
			if(effect_str.indexOf('*') == estack[0].i) {
				estack[0].any_num = 0;
				estack[0].resolving_any_num = true;
				continue;
			}
			// on subsequent instances, resolve following event x times
			var num_times = estack[0].any_num;
			while(effect_str[i] == '+') {
				i++;
				num_times++;
			}
			while(effect_str[i] == '-') {
				i++;
				num_times--;
			}
			var repeat_start_i = i;
			estack[0].i = repeat_start_i;
			resolve(effect_str, self_pile, self_i, true, true);
			// if the thing we're repeating requires continuing later, just return and let it do its thing
			if(is_continuing_later(estack[0].cur_effect, estack[0].mods)) {
				return;
			}
			// finish the rest of the num_times for stuff we're continuing now
			for(var j = 1; j < num_times; j++) {
				estack[0].i = repeat_start_i;
				resolve(effect_str, self_pile, self_i, true, true);
			}
			i = repeat_start_i + 1;
			continue;
		}
		if(cur_effect == '2') { // send effects for other player to resolve
			estack[0].i = effect_str.length;
			estack[0].to_send = effect_str.substring(i, effect_str.length);
			sent_effect = true;
			if(is_logging) console.log("sending effect for other to do " + estack[0].to_send);
			if(!starting_turn)
				SendGameState();
			break;
		}
		if(cur_effect == 'w') { // water
			p1.water += 1;
			continue;
		}
		if(cur_effect == 'a') { // raiders
			// move to event queue
			if(p1.basics.cards[2] != empty_i) {
				place_on_events(p1.basics, 2, p1.events, 1);
				continue;
			}
			// or move raiders up
			for(var j = 0; j < p1.events.cards.length; j++) {
				if(p1.events.cards[j] == raiders_i)
					place_on_events(p1.events, j, p1.events, j - 1, true);
			}
			continue;
		}

		var to = cur_mods.includes('4') ? temp_pile : p1.hand;
		var from = cur_mods.includes('3') ? temp_pile : p1.hand;
		var target_card = null;
		if(estack[0].prev_target_pile != null)
			target_card = cards[estack[0].prev_target_pile.cards[estack[0].prev_target_i]];
		if(cur_effect == 't') { // topdeck / draw card
			move_card(draw_pile, 0, to, 0);
			continue;
		}
		if(cur_effect == 'j') { // junk / discard
			if(cur_mods.includes('i')) {
				move_card(estack[0].prev_target_pile, estack[0].prev_target_i, discard_pile, 0);
				continue;
			}
			// skip discard option if we don't have enough to discard
			if(effect_str[estack[0].i - 1] == '[' && effect_str[estack[0].i + 1] == 'j' && p1.hand.cards.length < 2) {
				done_with_optionals();
			}
		}
		if(cur_effect == 'c') { // play card (handled by on_drag_to_board)
			if(cur_mods.includes('3') && !cur_mods.includes('i') && temp_pile.cards.length == 0) // exit High Ground on empty board
				continue;
		}

		// targeting effects (add an effect card to temp to drag to a card to target)
		if(cur_effect == 'i') move_card(null, injur_effect_i, temp_pile, 0);
		if(cur_effect == 'r') move_card(null, restore_effect_i, temp_pile, 0);
		if(cur_effect == 'p') move_card(null, punk_effect_i, temp_pile, 0);
		if(cur_effect == 'd') move_card(null, damage_effect_i, temp_pile, 0);
		if(cur_effect == 'k') move_card(null, destroy_effect_i, temp_pile, 0);
		if(cur_effect == 'h') move_card(null, to_hand_effect_i, temp_pile, 0);
		if(cur_effect == 'f') move_card(null, flip_effect_i, temp_pile, 0);
		if(cur_effect == 'm') move_card(null, ready_effect_i, temp_pile, 0);
		if(cur_effect == 'b') move_card(null, ability_effect_i, temp_pile, 0);
		// simulate drag from the effect card to the board for a,s,i,3,5 modifiers
		if(temp_pile.cards.length > 0 && temp_pile.cards[0] >= effects_start_i && (cur_effect != 'b' || cur_mods.includes('3')) &&
		(cur_mods.includes('a') || cur_mods.includes('s') || cur_mods.includes('i') || cur_mods.includes('3') || cur_mods.includes('5'))) {
			var effect_card_i = temp_pile.cards.splice(0, 1)[0];
			temp_pile.card_states.splice(0,1); // also remove the card state to stay in sync
			dragging_pile.cards[0] = effect_card_i;
			dragging_from = temp_pile;
			dragging_from_i = 0;
			if(cur_mods.includes('a')) {
				var num_applied_to = 0;
				for(var j = 8; j >= 0; j--) {
					if(on_drag_to_board(p1.board, j, null, true))
						num_applied_to += 1;
					if(on_drag_to_board(p2.board, j, null, true))
						num_applied_to += 1;
				}
				if(cur_mods.includes('*'))
					estack[0].any_num = num_applied_to;
			}
			if(cur_mods.includes('s')) on_drag_to_board(self_pile, self_i, null, true);
			if(cur_mods.includes('i')) on_drag_to_board(estack[0].prev_target_pile, estack[0].prev_target_i, null, true);
			if(cur_mods.includes('3') || cur_mods.includes('5')) on_drag_to_board(p1.board, 0, null, true);
			dragging_pile.cards = [];
			dragging_from = null;
			if(!repeating_effect)
				continue;
		}
		// special event effects (there's probably a better or more general way to represent these)
		if(cur_effect == 'v') {
			if(cur_mods == "v")
				move_card(null, advance_effect_i, temp_pile, 0);
			if(cur_mods == "z") {
				if(p2.events.cards[2] == empty_i) {
					move_card(p2.events, 1, p2.events, 2);
					move_card(p2.events, 0, p2.events, 1);
					p2.events.cards[0] = empty_i;
				}
				if(p2.events.cards[1] == empty_i) {
					move_card(p2.events, 0, p2.events, 1);
					p2.events.cards[0] = empty_i;
				}
				continue;
			}
		}
		if(cur_effect == 'u') {
			var row = Math.floor(self_i / 3);
			if(row == 0) {
				// move camp to temp, move any card in column up, then move camp to back row
				move_card(self_pile, self_i, temp_pile, 0);
				move_card(self_pile, 3 + (self_i % 3), self_pile, 0 + (self_i % 3));
				move_card(self_pile, 6 + (self_i % 3), self_pile, 3 + (self_i % 3));
				move_card(temp_pile, 0, self_pile, 6 + (self_i % 3));
				self_i = 6 + (self_i % 3);
				estack[0].self_i = self_i;
				resolve("2k(1m)", self_pile, self_i);
			}
			else {
				// move camp to temp, move any card in front behind, then move camp up
				move_card(self_pile, self_i, temp_pile, 0);
				if(row == 2) move_card(self_pile, 3 + (self_i % 3), self_pile, 6 + (self_i % 3));
				if(row == 1) move_card(self_pile, 0 + (self_i % 3), self_pile, 3 + (self_i % 3));
				move_card(temp_pile, 0, self_pile, (row - 1) * 3 + (self_i % 3));
				continue;
			}
		}

		// special conditionals (again there's probably a better, more general way)
		estack[0].success = false;
		if(cur_effect == '?') {
			if(cur_mods == "vr")
				estack[0].success = event_resolved_this_turn;
			if(cur_mods == "r" && my_id == 0)
				estack[0].success = p0_raiders_resolved_this_turn;
			if(cur_mods == "r" && my_id == 1)
				estack[0].success = p1_raiders_resolved_this_turn;
			if(cur_mods.startsWith("c")) {
				var num_cards = Number(cur_mods[1]);
				estack[0].success = p1.hand.cards.length >= num_cards;
			}
			if(cur_mods == "2v") {
				estack[0].success = false;
				for(var j = 0; j < p2.events.cards.length; j++)
					if(p2.events.cards[j] != empty_i)
						estack[0].success = true;
			}
			if(cur_mods == "p") {
				estack[0].success = false;
				for(var j = 0; j < 9; j++)
					if(is_person(p1.board, j) && (p1.board.card_states[j] & 3) == FLIPPED)
						estack[0].success = true;
			}
			if(cur_mods == "y") {
				estack[0].success = false;
				for(var j = 0; j < 9; j++) {
					if(is_person(p1.board, j) && (p1.board.card_states[j] & READY))
						estack[0].success = true;
					if(is_person(p2.board, j) && (p2.board.card_states[j] & 3) != HARMED)
						estack[0].success = true;
				}
			}
			if(cur_mods == "fp" || cur_mods == "1p" || cur_mods == "2p" || cur_mods == "1dp" || cur_mods == "2up" || cur_mods == "2udc" || cur_mods == "2um") {
				estack[0].success = false;
				var num_people = 0;
				var board = cur_mods.includes("2") ? p2.board : p1.board
				var num_damaged = 0;
				var num_unprotected = 0;
				var num_camps = 0;
				for(var j = 0; j < 9; j++) {
					if(is_person(board, j)) {
						num_people++;
						if(cur_mods.includes("p") && (board.card_states[j] & 3) == HARMED)
							num_damaged++;
						if(cur_mods == "2up" && !is_protected(board, j))
							num_unprotected++;
					}
					if(cur_mods.includes("c") && (board.card_states[j] & 3) == HARMED && !is_protected(board, j))
						num_damaged++;
					if(cur_mods.includes("m") && !is_protected(board, j))
						num_camps++;
				}
				if(cur_mods == "fp")   estack[0].success = num_people <= 1;
				if(cur_mods == "1p")   estack[0].success = num_people  > 0;
				if(cur_mods == "2p")   estack[0].success = num_people  > 0;
				if(cur_mods == "1dp")  estack[0].success = num_damaged > 0;
				if(cur_mods == "2up")  estack[0].success = num_unprotected > 0;
				if(cur_mods == "2udc") estack[0].success = num_damaged > 0;
				if(cur_mods == "2um")  estack[0].success = num_camps   > 0;
			}
			if(cur_mods == "mp")
				estack[0].success = people_placed_this_turn >= 2;
			if(cur_mods == "sy")
				estack[0].success = (self_pile.card_states[self_i] & 3) == UNHARMED;
			if(cur_mods == "im") // if killing a person, target_card will be null for Looter (cuz damage_card moved the target)
				estack[0].success = target_card != null && target_card.id >= camps_start_i && target_card.id < people_start_i;
			if(cur_mods == "iv")
				estack[0].success = target_card.id >= events_start_i && target_card.id < effects_start_i;
			if(cur_mods == "ip")
				estack[0].success = target_card.id >= people_start_i && target_card.id < events_start_i;
			if(cur_mods == "26mk")
				estack[0].success = (p2.board.card_states[6] & 3) == FLIPPED && is_camp(p2.board, 6);
			if(cur_mods == "27mk")
				estack[0].success = (p2.board.card_states[7] & 3) == FLIPPED && is_camp(p2.board, 7);
			if(cur_mods == "28mk")
				estack[0].success = (p2.board.card_states[8] & 3) == FLIPPED && is_camp(p2.board, 8);
			continue;
		}
		break;
	}
	if(estack.length > 0 && temp_pile.cards.length != estack[0].prev_total_in_temp) {
		estack[0].my_num_in_temp += temp_pile.cards.length - estack[0].prev_total_in_temp;
		estack[0].prev_total_in_temp = temp_pile.cards.length;
	}

	// pop effect if done with it
	if(!is_continuing_later(cur_effect, cur_mods) && !repeating_effect && i >= effect_str.length) {
		estack.splice(0, 1);
		if(turn % 2 != my_id) { // if finishing a sent effect
			if(!starting_turn) {
				SendGameState(false, true);
				estack = [];
			}
			temp_pile.cards = [];
			temp_pile.card_states = [];
			return;
		}
		else if(turn % 2 == my_id && estack.length > 0 && estack[0].str[0] == '2') {
			// we just resolved a sent effect as the turn player, so we must've omen clocked their event
			// so remove all the effect sending stuff on the stack and continue if need be
			while(estack.length > 0 && estack[0].str[0] == '2') {
				estack.splice(0, 1);
			}
			if(estack.length > 0 && !is_continuing_later(estack[0].cur_effect, estack[0].mods))
				continue_effect(estack[0].prev_target_pile, estack[0].prev_target_i);
		}
		if(estack.length > 0 && !is_continuing_later(estack[0].cur_effect, estack[0].mods)) { // continue down the stack if not empty yet
			continue_effect(self_pile, self_i);
		}
		if(estack.length == 0 && !starting_turn) {
			if(is_logging) console.log("sending after effect " + effect_str);
			SendGameState();
		}
	}
	return;
}

function is_continuing_later(cur_effect, cur_mods) {
	if(estack.length == 0) return false;
	if(estack[0].to_send != null) return true;
	if(estack[0].i >= estack[0].str.length) return false;
	if(estack[0].success) return false;
	return (estack[0].my_num_in_temp > 0 && temp_pile.cards.length > 0)
		|| (cur_effect == 'j' && !cur_mods.includes('i'))
		|| (cur_effect == 'c' && !cur_mods.includes('i'));
}

// used to continue an effect after dragging an effect icon to a target
function continue_effect(pile, i, finishing_any_num) {
	dragging_pile.cards = [];
	dragging_from = null;
	if(estack.length == 0)
		return;
	estack[0].prev_target_pile = pile;
	estack[0].prev_target_i = i;
	if(estack[0].resolving_any_num && !finishing_any_num)
		estack[0].any_num += 1;
	else
		estack[0].i += 1;
	resolve(estack[0].str, estack[0].self_pile, estack[0].self_i, true);
}

function place_on_board(from, from_i, to, to_i) {
	status_text = "";
	// 3 cases: no person already there, person there but not other spot, or column filled
	if(to.cards[to_i] == empty_i) {
		move_card(from, from_i, to, to_i);
		return;
	}
	var other_spot = get_other_person_spot(to, to_i);
	if(to.cards[other_spot] == empty_i) {
		move_card(to, to_i, to, other_spot);
		move_card(from, from_i, to, to_i);
		return;
	}
	// move both cards to temp and put the new one in place
	move_card(to, to_i, temp_pile, 0);
	move_card(to, other_spot, temp_pile, 1);
	// resolve an effect with a pre-filled target to play a card to the target and junk the other
	push_effect("j(3)c(3fi)", to, to_i);
	estack[0].my_num_in_temp = 2;
	estack[0].prev_target_pile = to;
	estack[0].prev_target_i = other_spot;
	resolve("j(3)c(3fi)", to, to_i, true);
	move_card(from, from_i, to, to_i);
}

function place_on_events(from, from_i, to, to_i, override_correct) {
	status_text = "";
	var card = cards[from.cards[from_i]];
	if(card == null) return;
	var correct_spot = card.delay - 1;
	if(override_correct) correct_spot = to_i;
	if(is_trait_active("Zeto Khan") && !event_played_this_turn) correct_spot = -1;
	// resolve right away if 0 delay event (or moving up past slot 0)
	if(correct_spot == -1) {
		event_resolved_this_turn = true;
		if(from != p1.events && from != p2.events)
			event_played_this_turn = true;
		var new_to = discard_pile;
		var new_to_i = 0;
		if(card.name == "High Ground") {
			if     ((to == p1.events && my_id == 0) || (to == p2.events && my_id == 1))
				p0_high_ground_resolved_this_turn = true;
			else if((to == p1.events && my_id == 1) || (to == p2.events && my_id == 0))
				p1_high_ground_resolved_this_turn = true;
		}
		if(card.name == "Raiders") {
			if     ((to == p1.events && my_id == 0) || (to == p2.events && my_id == 1))
				p0_raiders_resolved_this_turn = true;
			else if((to == p1.events && my_id == 1) || (to == p2.events && my_id == 0))
				p1_raiders_resolved_this_turn = true;
			new_to = to == p2.events ? p2.basics : p1.basics; // if for some reason you advance their raiders
			new_to_i = 2;
			PlaySound(sounds[sound_crash_i]);
		}
		else if(card.on_resolve_sound != null)
			PlaySound(sounds[card.on_resolve_sound]);
		// move before resolve so they get the move when we send state before effect
		move_card(from, from_i, new_to, new_to_i);
		if(to == p2.events) // triggered if omen clock advanced an enemy event
			resolve("2" + card.effect, new_to, new_to_i);
		else
			resolve(card.effect, new_to, new_to_i);
		return;
	}
	// place event at correct spot or further down if occupied
	var placed = false;
	for(var i = correct_spot; i < 3; i++) {
		if(to.cards[i] == empty_i) {
			move_card(from, from_i, to, i);
			if(to.cards[i] == null) console.log("ERROR: null card in events");
			placed = true;
			break;
		}
	}
	if(!placed) {
		status_text = "cannot play event when queue at that delay+ is taken";
	}
	// play sound for placing an event
	if(!starting_turn) {
		if(card.name == "Raiders")
			PlaySound(sounds[sound_rev_engine_i]);
		else if(card.on_activate_sound != null)
			PlaySound(sounds[card.on_activate_sound]);
		else
			PlaySound(sounds[sound_lit_fuse_i]);
	}
}

function damage_card(pile, i, kill, injur, restore) {
	if(pile.cards[i] == empty_i) return false;
	var card = cards[pile.cards[i]];
	if(injur && is_camp(pile, i)) return false;
	if((pile.card_states[i] & 3) == FLIPPED && !restore) {
		// can't hurt a destroyed camp
		if(is_camp(pile, i))
			return false;
		// assume punk, move to draw pile
		move_card(pile, i, draw_pile, 0);
		return true;
	}
	// change state
	if(restore) {
		if((pile.card_states[i] & 3) != HARMED) return false; // can't resore unharmed things
		if(estack[0].self_pile == pile && estack[0].self_i == i) return false; // can't restore self
		if(card.name == "Bonfire") return false; // can't restore bonfire
		pile.card_states[i] -= 1;
		if(!is_camp(pile, i))
			pile.card_states[i] &= ~READY;
	}
	else {
		pile.card_states[i] += 1;
		if(kill && (pile.card_states[i] & 3) != FLIPPED)
			pile.card_states[i] += 1;
		if(is_person(pile, i))
			pile.card_states[i] &= ~READY;
	}
	// discard killed people
	if((pile.card_states[i] & 3) == FLIPPED && is_person(pile, i)) {
		move_card(pile, i, discard_pile, 0);
	}
	// move destroyed camps to back row (only applies to juggernaut for now)
	if((pile.card_states[i] & 3) == FLIPPED && is_camp(pile, i) && i < 6) {
		// move camp to temp, move any other cards in column up 1, then move camp to back row
		move_card(pile, i, temp_pile, 0);
		if(pile.cards[0 + (i % 3)] == empty_i) move_card(pile, 3 + (i % 3), pile, 0 + (i % 3));
		if(pile.cards[3 + (i % 3)] == empty_i) move_card(pile, 6 + (i % 3), pile, 3 + (i % 3));
		move_card(temp_pile, 0, pile, 6 + (i % 3));
	}
	return true;
}

function use_ability(pile, i, where_on_card, must_be_ready, redirect_self) {
	var card = cards[pile.cards[i]];
	if(card == null) return false;
	var cost = 9999;
	var effect = "";
	if(is_person(pile, i) && is_trait_active("Argo Yesky") && where_on_card.y < card_height / 2) {
		cost = 1;
		effect = "d(2uc)";
	}
	if(cost == 9999 && (pile.card_states[i] & 3) == FLIPPED) return false; // can't use ability of a flipped over card without argo
	if(cost == 9999 && card.abilities != null && card.abilities.length > 0) {
		var ability_i = 0;
		if(card.abilities[1] != null && where_on_card.x > card_width / 2)
			ability_i = 1;
		cost = card.abilities[ability_i].cost;
		effect = card.abilities[ability_i].effect;
	}
	if(!can_resolve_effect(effect, pile, i)) {
		status_text = "Cannot use ability because condition not met";
		PlaySound(sounds[sound_error_i], true);
		return false;
	}
	if(card.name == "Pilbox") { // reduce cost by destroyed camps
		for(var j = 6; j < 9; j++)
			if((pile.card_states[j] & 3) == FLIPPED && is_camp(pile, j))
				cost -= 1;
	}
	if(card.name == "Command Post") { // reduce cost by punks on board
		for(var j = 0; j < 9; j++)
			if((pile.card_states[j] & 3) == FLIPPED && is_person(pile, j))
				cost -= 1;
		cost = cost < 0 ? 0 : cost; // make sure we don't go below 0
	}
	var ready = true;
	if(must_be_ready) ready = (pile.card_states[i] & READY);
	if(ready && p1.water >= cost) {
		if(must_be_ready)
			pile.card_states[i] &= ~READY;
		if(is_trait_active("Vera Vosh") && !ability_used_this_turn)
			pile.card_states[i] |= READY;
		ability_used_this_turn = true;
		p1.water -= cost;
		if(redirect_self && estack.length > 0 && estack[0].self_pile != null)
			resolve(effect, estack[0].self_pile, estack[0].self_i);
		else
			resolve(effect, pile, i);
	}
	return true;
}

function can_resolve_effect(effect_str, pile, i) {
	if(effect_str == null || effect_str.length == 0) return false;
	if(effect_str[0] == 'i') // injur should just check for them having people by default
		effect_str = "?(2p)::" + effect_str;
	if(effect_str.startsWith("k(1p)")) // kill own person cards should check if you have a person by default
		effect_str = "?(1p)::" + effect_str;
	var cutoff_index = effect_str.indexOf("::");
	if(effect_str[0] != '?' || cutoff_index == -1) return true;
	// while there's an initial condition with a cutoff
	while(effect_str[0] == '?' && cutoff_index != -1) {
		// resolve just the initial condition with a skippable c and final c (success determined by which one we end at)
		resolve(effect_str.substring(0, cutoff_index) + ":cc", pile, i);
		// then record if it succeeded, splice it off, return failure or continue until no more conditions or success
		var success = estack[0].i == cutoff_index + 1;
		estack.splice(0, 1);
		if(!success) return false;
		effect_str = effect_str.substring(cutoff_index + 2, effect_str.length);
		cutoff_index = effect_str.indexOf("::");
	}
	return true;
}

function get_effect_source_card() {
	if(estack.length == 0) return null;
	if(estack[0].self_pile == null) return null;
	if(estack[0].self_pile.cards[estack[0].self_i] == empty_i) return null;
	if((estack[0].self_pile.card_states[estack[0].self_i] & 3) == FLIPPED) return null;
	return cards[estack[0].self_pile.cards[estack[0].self_i]];
}

function get_other_person_spot(pile, i) {
	var col = i % 3;
	var row = Math.floor(i / 3);
	if(!is_camp(pile, ((row + 1) % 3) * 3 + col)) return ((row + 1) % 3) * 3 + col;
	return ((row + 2) % 3) * 3 + col;
}

function is_camp(pile, i) {
	if(pile == null) return false;
	var card = cards[pile.cards[i]];
	if(card == null) return false;
	return card.id >= camps_start_i && card.id < people_start_i;
}

function is_person(pile, i) {
	if(pile == null) return false;
	var card = cards[pile.cards[i]];
	if(card == null) return false;
	return (card.id >= people_start_i && card.id < events_start_i) || ((pile.card_states[i] & 3) == FLIPPED && card.id >= people_start_i);
}

function is_protected(pile, i) {
	if((p0_high_ground_resolved_this_turn && my_id == 0) || (p1_high_ground_resolved_this_turn && my_id == 1))// && pile == p2.board)
		return false;
	// is there a card in this column more far up than us
	var col = i % 3;
	var row = Math.floor(i / 3);
	for(var cur_row = row - 1; cur_row >= 0; cur_row--) {
		spot = cur_row * 3 + col;
		if(pile.cards[spot] != empty_i) return true;
	}
	return false;
}

function is_trait_active(person_name) {
	for(var i = 0; i < 9; i++) {
		if(p1.board.cards[i] == empty_i) continue;
		if(!is_person(p1.board, i)) continue;
		if(cards[p1.board.cards[i]].name == person_name && (p1.board.card_states[i] & 3) == UNHARMED) {
			return true;
		}
	}
	return false;
}

function is_resolving() {
	return estack.length > 0;
}

//////////////////// specific event listeners ////////////////////

function on_click_basic(pile, i, where_on_card) {
	if(pile.cards[i] == empty_i) return;
	// TODO: prolly wanna play sounds here
	if(i == 0 && p1.water >= 2) {
		p1.water -= 2;
		move_card(draw_pile, 0, p1.hand, 0);
	}
	else if(i == 1 && p1.water >= 1) {
		p1.water -= 1;
		move_card(p1.basics, 1, p1.hand, 0);
	}
}

function on_click_board(pile, i, where_on_card) {
	use_ability(pile, i, where_on_card, true);
}

function on_drag_to_board(pile, i, where_on_card, effect_only) {
	var cur_effect = estack.length > 0 ? estack[0].cur_effect : null;
	var cur_mods = estack.length > 0 ? estack[0].mods : "";
	if(turn <= -1) {
		if(pile != p1.board) return false;
		if(i < 6) return false;
		if(pile.cards[i] != empty_i)
			move_card(pile, i, dragging_from, 0);
		move_card(dragging_pile, 0, pile, i);
		dragging_from = null;
		return false;
	}
	var card = cards[dragging_pile.cards[0]];
	if(card == null) return false;
	var play_cost = card.play_cost;
	if(is_camp(pile, 6 + (i % 3)) && cards[pile.cards[6 + (i % 3)]].name == "Oasis" && (pile.card_states[6 + (i % 3)] & 3) != FLIPPED) {
		var other_spot = get_other_person_spot(pile, i);
		if(pile.cards[i] == empty_i && pile.cards[other_spot] == empty_i)
			play_cost -= 1;
	}
	if(card.name == "Holdout" && is_camp(pile, 6 + (i % 3)) && (pile.card_states[6 + (i % 3)] & 3) == FLIPPED)
		play_cost = 0;
	var from = p1.hand;
	if(cur_effect == 'c' && cur_mods.includes('3'))
		from = temp_pile;
	if(cur_effect == 'c' && cur_mods.includes('f'))
		play_cost = 0;
	if(((!is_resolving() && turn % 2 == my_id) || cur_effect == 'c') && dragging_from == from && p1.water >= play_cost && pile == p1.board && is_person(dragging_pile, 0)) {
		p1.water -= play_cost;
		if(from != temp_pile) // don't count rearranging as placing
			people_placed_this_turn += 1;
		var prev_estack_len = estack.length;
		// before-placement on play abilities (don't trigger when dragging from temp)
		var resolved_on_play_already = false;
		if(from != temp_pile && card.abilities.length == 3 && !card.abilities[2].effect.includes('s')) {
			resolve(card.abilities[2].effect, pile, i);
			resolved_on_play_already = true;
		}
		// place on board (potentially get the replacement effect if played on full column)
		place_on_board(dragging_pile, 0, pile, i);
		if(is_trait_active("Karli Blaze"))
			pile.card_states[i] |= READY;
		// after-placement on play abilities (don't trigger when dragging from temp)
		if(!resolved_on_play_already && from != temp_pile && card.abilities.length == 3) {
			resolve(card.abilities[2].effect, pile, i);
		}
		if(is_continuing_later(cur_effect, cur_mods) && estack[0].str[estack[0].i - 1] == '*' && estack[0].str.indexOf('*') != estack[0].i - 1) {
			// if we're resolving an any_num that requires targeting, decrement any_num
			estack[0].any_num -= 1;
			if(estack[0].any_num == 0) // if done with that targeting effect, continue
				continue_effect(pile, i);
			return false;
		}
		// if we got a new effect, see if we shouldn't continue that one
		if(estack.length > prev_estack_len && is_continuing_later(estack[0].cur_effect, estack[0].mods)) {
			if(estack.length - prev_estack_len < estack.length) // set the effect to play this card to be done so we don't replay it later
				estack[estack.length - prev_estack_len].success = true;
			return false;
		}
		// continue effects that didn't break out in the above 2 conditions
		continue_effect(pile, i);
		return false;
	}
	if(is_resolving() && card.id >= effects_start_i) {
		var tp = pile == p1.board ? p1 : p2;
		if(cur_mods.includes('1') && tp != p1) return false;
		if(cur_mods.includes('2') && tp != p2) return false;
		if(cur_mods.includes('p') && !is_person(pile, i)) return false;
		if(cur_mods.includes('m') && !is_camp(pile, i)) return false;
		if(cur_mods.includes('u') && is_protected(pile, i) && !(experimental_on && pile == p1.board && (card.id == injur_effect_i || card.id == damage_effect_i))) return false;
		if(cur_mods.includes('d') && (pile.card_states[i] & 3) != HARMED) return false;
		if(cur_mods.includes('y') && (pile.card_states[i] & 3) != UNHARMED) return false;
		if(cur_mods.includes('y') && pile == p1.board && !(pile.card_states[i] & READY)) return false;
		if(cur_mods.includes('n') && (pile.card_states[i] & 3) != FLIPPED) return false;
		if(cur_mods.includes('s') && (pile != estack[0].self_pile || i != estack[0].self_i)) return false;
		if(cur_mods.includes('i') && (pile != estack[0].prev_target_pile || i != estack[0].prev_target_i)) return false;

		if(card.id == damage_effect_i) {
			if(!damage_card(pile, i)) return false;
		}
		if(card.id == destroy_effect_i) {
			if(!damage_card(pile, i, true)) return false;
		}
		if(card.id == injur_effect_i) {
			if(!damage_card(pile, i, false, true)) return false;
		}
		if(card.id == restore_effect_i) {
//			if(pile != p1.board && !experimental_on) return false;
			if(!damage_card(pile, i, false, false, true)) return false;
		}
		if(card.id == flip_effect_i) {
			if(pile != p1.board) return false;
			if(pile.cards[i] == empty_i) return false;
			pile.card_states[i] = UNHARMED;
			if(is_camp(pile, i)) pile.card_states[i] |= READY;
			if(pile.cards[i] >= people_start_i && pile.cards[i] < events_start_i) {
				people_placed_this_turn += 1;
				var card = cards[pile.cards[i]];
				if(card.abilities[2] != null) {
					resolve(card.abilities[2].effect, pile, i);
				}
			}
		}
		if(card.id == ready_effect_i) {
			if(pile != p1.board) return false;
			if(pile.cards[i] == empty_i) return false;
			pile.card_states[i] |= READY;
		}
		if(card.id == punk_effect_i) {
			if(pile != p1.board) return false;
			if(is_camp(pile, i)) return false;
			var prev_num_effects = estack.length;
			place_on_board(draw_pile, 0, pile, i);
			if(estack.length > prev_num_effects) { // swap effects if we need to resolve replacement
				var temp = estack[0];
				estack[0] = estack[1];
				estack[1] = temp;
			}
			p1.board.card_states[i] = FLIPPED;
			people_placed_this_turn += 1;
		}
		var to = cur_mods.includes('4') ? temp_pile : p1.hand;
		var from = cur_mods.includes('3') ? temp_pile : p1.board;
		if(cur_mods.includes('5')) from = discard_pile;
		if(card.id == ability_effect_i) {
			if(from != temp_pile && from != discard_pile && pile.cards[i] == empty_i) return false;
			estack[0].prev_target_pile = pile;
			estack[0].prev_target_i = i;
			if(cur_mods.includes('j')) {
				move_card(from, 0, discard_pile, 0);
				play_sound_for_junk(cards[discard_pile.cards[0]].junk);
				resolve(cards[discard_pile.cards[0]].junk);
			}
			else {
				var success = false;
				if(cur_mods.includes('y')) // for mimic, redirect (s) mod effects to the mimic (mimic on mutant)
					success = use_ability(pile, i, where_on_card, false, true);
				else
					success = use_ability(pile, i, where_on_card);
				if(!success) return false;
			}
			if(estack.length > 0 && is_continuing_later(estack[0].cur_effect, cur_mods)) {
				dragging_pile.cards = [];
				dragging_from = null;
				return false;
			}
		}
		if(card.id == to_hand_effect_i) {
			if(pile != p1.board) return false;
			if(from != temp_pile && pile.cards[i] == empty_i) return false;
			move_card(from, i, to, 0);
			//if(to == temp_pile)
				//temp_pile.card_states[0] = from.card_states[i];
		}
		if(effect_only) return true;
		if(cur_mods.includes('l')) {
			on_drag_to_board(pile, (i + 3) % 9, where_on_card, true);
			on_drag_to_board(pile, (i + 6) % 9, where_on_card, true);
		}
		continue_effect(pile, i);
		return false;
	}
	return false;
}

function on_drag_to_discard(pile, i) {
	if(turn <= -1) return false;
	var cur_effect = estack.length > 0 ? estack[0].cur_effect : null;
	var cur_mods = estack.length > 0 ? estack[0].mods : "";
	if(!is_resolving() && dragging_from == p1.hand && turn % 2 == my_id) {
		var card = cards[dragging_pile.cards[0]];
		play_sound_for_junk(card.junk);
		if(card.name == "Water Silo") {
			move_card(dragging_pile, 0, p1.basics, 1);
			dragging_pile.cards = [];
			dragging_from = null;
			return false;
		}
		move_card(dragging_pile, 0, discard_pile, 0);
		dragging_pile.cards = [];
		dragging_from = null;
		resolve(card.junk);
		return false;
	}
	var card = cards[dragging_pile.cards[0]];
	if(is_resolving() && (cur_effect == 'j' || cur_effect == 'r' || cur_effect == 'p')) {
		if(cur_mods.includes('3') && dragging_from != temp_pile) return false;
		if(cur_effect == 'j' && !cur_mods.includes('3') && dragging_from != p1.hand) return false;
		if(card.name == "Water Silo") {
			move_card(dragging_pile, 0, dragging_from, 0);
			dragging_pile.cards = [];
			dragging_from = null;
			return false;
		}
		if(card.id < effects_start_i)
			move_card(dragging_pile, 0, discard_pile, 0);
		if(estack[0].str == "j(3)c(3fi)") { // special case for playing on full column
			move_card(temp_pile, 0, estack[0].prev_target_pile, estack[0].prev_target_i);
			estack[0].i = estack[0].str.length;
			estack[0].cur_effect = "";
		}
		continue_effect(pile, i);
		return false;
	}
	return false;
}

function on_drag_to_events(pile, i) {
	var card = cards[dragging_pile.cards[0]];
	if(!is_resolving() && dragging_from == p1.hand && p1.water >= card.play_cost && pile == p1.events && card.id >= events_start_i && card.id < effects_start_i) {
		p1.water -= card.play_cost;
		place_on_events(dragging_pile, 0, pile);
	}
	if(is_resolving() && card.id >= effects_start_i) {
		if(card.id != advance_effect_i) return false; // only advance event can be used on events
		if(i - 1 >= 0 && pile.cards[i - 1] != empty_i) return false; // can't advance into non-empty spot
		place_on_events(pile, i, pile, i - 1, true);
		dragging_pile.cards = [];
		dragging_from = null;
		if(estack.length > 0 && !is_continuing_later(estack[0].cur_effect, estack[0].mods))
			continue_effect(pile, i); // continue effects we aren't continuing later
		return false;
	}
	return false;
}

//////////////////// common card game stuff ////////////////////

function drag_from_pile(pile, pileX, pileY, draggable_end_i) {
	if(!mouse.buttonsPressed[0]) return;
	for(var i = 0; i < pile.cards.length; i++) {
		if(draggable_end_i != -1 && i >= draggable_end_i) continue;
		var xdiff = pile.xdiff * (i % pile.max_cols);
		var ydiff = pile.ydiff * Math.floor(i / pile.max_cols);
		var card_x = pileX + xdiff + pile.scrollX;
		var card_y = pileY + ydiff;
		var mouse_on_card = mouse.x > card_x && mouse.x < card_x + pile.card_width &&
		                    mouse.y > card_y && mouse.y < card_y + pile.card_height;
		if(mouse_on_card) {
			var card = cards[pile.cards[i]];
			var source_card = get_effect_source_card();
			if(pile == temp_pile && card.id >= effects_start_i && card.on_activate_sound != null && !(source_card != null && (source_card.on_activate_sound != null || source_card.on_resolve_sound != null)))
				PlaySound(sounds[card.on_activate_sound], true);
			else
				PlaySound(sounds[sound_pickup_card_i], true);
			move_card(pile, i, dragging_pile, 0);
			dragging_from = pile;
			dragging_from_i = i;
		}
	}
}

function drag_to_pile(pile, pileX, pileY, on_drag, endx, endy, reverse_order) {
	if(!mouse.buttonsReleased[0] || dragging_pile.cards.length == 0) return;
	// either drag to area dedicated to the pile
	if(endx != null) {
		var mouse_on_pile = mouse.x > pileX && mouse.x < endx &&
		                    mouse.y > pileY && mouse.y < endy;
		if(mouse_on_pile) {
			if(on_drag != null && !on_drag(pile)) return;
			move_card(dragging_pile, 0, pile, 0);
			dragging_from = null;
			PlaySound(sounds[sound_place_card_i], true);
		}
		return;
	}
	// or drag to specific card slot for the pile
	for(var i = 0; i < pile.cards.length; i++) {
		var j = i;
		if(reverse_order) j = pile.cards.length - 1 - i;
		var xdiff = pile.xdiff * (i % pile.max_cols);
		var ydiff = pile.ydiff * Math.floor(i / pile.max_cols);
		var card_x = pileX + xdiff + pile.scrollX;
		var card_y = pileY + ydiff;
		var mouse_on_card = mouse.x > card_x && mouse.x < card_x + pile.card_width &&
		                    mouse.y > card_y && mouse.y < card_y + pile.card_height;
		if(mouse_on_card) {
			var dragging_card = cards[dragging_pile.cards[0]];
			var was_dragging_from = dragging_from;
			var was_first_effect = estack.length > 0 && estack[0].i == 0;
			var source_card = get_effect_source_card();
			var was_on_play_effect = source_card != null && source_card.abilities != null && source_card.abilities[2] != null && estack[0].str == source_card.abilities[2].effect;
			var where_on_card = {x: mouse.x - card_x, y: mouse.y - card_y};
			starting_turn = true; // defer sending gamestate to after we choose the sound
			if(on_drag != null) on_drag(pile, j, where_on_card); // call on_drag if it exists
			starting_turn = false;
			if(dragging_pile.cards.length > 0) return; // if didn't take the card, don't play a sound
			if(was_dragging_from == temp_pile && source_card != null && source_card.on_resolve_sound != null && was_first_effect && !was_on_play_effect)
				PlaySound(sounds[source_card.on_resolve_sound]);
			else if(was_dragging_from == temp_pile && dragging_card.id >= effects_start_i && dragging_card.on_resolve_sound != null)
				PlaySound(sounds[dragging_card.on_resolve_sound]);
			else if(was_dragging_from == p1.hand && dragging_card.on_play_sound != null)
				PlaySound(sounds[dragging_card.on_play_sound]);
			else
				PlaySound(sounds[sound_place_card_i]);
			if(turn % 2 != my_id) { // if finishing a sent effect
				if(sent_effect) { // if we're sending an effect in response to a sent effect (omen clock)
					sent_effect = false;
					SendGameState(); // send it as a regular thing, not a response
				}
				else {
					SendGameState(false, true);
				}
			}
			else
				SendGameState();
		}
	}
}

function click_pile(pile, pileX, pileY, on_click) {
	if(!mouse.buttonsPressed[0]) return;
	if(mouse.x < pileX || mouse.y < pileY) return;
	for(var i = 0; i < pile.cards.length; i++) {
		var xdiff = pile.xdiff * (i % pile.max_cols);
		var ydiff = pile.ydiff * Math.floor(i / pile.max_cols);
		var card_x = pileX + xdiff + pile.scrollX;
		var card_y = pileY + ydiff;
		var mouse_on_card = mouse.x > card_x && mouse.x < card_x + pile.card_width &&
		                    mouse.y > card_y && mouse.y < card_y + pile.card_height;
		if(mouse_on_card) {
			var where_on_card = {x: mouse.x - card_x, y: mouse.y - card_y};
			if(on_click != null && !on_click(pile, i, where_on_card)) return;
		}
	}
}

function hover_pile(pile, pileX, pileY, reverse_order) {
	if(mouse.x < pileX || mouse.y < pileY) return;
	for(var i = 0; i < pile.cards.length; i++) {
		var j = i;
		if(reverse_order) j = pile.cards.length - 1 - i;
		var xdiff = pile.xdiff * (i % pile.max_cols);
		var ydiff = pile.ydiff * Math.floor(i / pile.max_cols);
		var card_x = pileX + xdiff + pile.scrollX;
		var card_y = pileY + ydiff;
		var mouse_on_card = mouse.x > card_x && mouse.x < card_x + pile.card_width &&
		                    mouse.y > card_y && mouse.y < card_y + pile.card_height;
		if(mouse_on_card) {
			var card = cards[pile.cards[j]];
			if(card == null) continue;
			if((pile.card_states[j] & FLIPPED) && !is_camp(pile, j)) continue;
			var s = hovered_card_scale;
			if(turn <= -3)
				s = 3.5;
			render_cropped_card(card.row_i, card.col_i, card.dims, card.img_i,
				canvas.width - card_width*s, 0, card_width*s, card_height*s, pile.cards[j] < punk_i ? 10 : 1);
		}
	}
}

function render_pile(pile, pileX, pileY, reverse_order) {
	if(pileX == null) return;
	for(var i = 0; i < pile.cards.length; i++) {
		var j = i;
		if(reverse_order) j = pile.cards.length - 1 - i;
		var card = cards[pile.cards[j]];
		if(card == null) continue;
		var xdiff = pile.xdiff * (i % pile.max_cols);
		var ydiff = pile.ydiff * Math.floor(i / pile.max_cols);
		if(pile.card_states[j] & FLIPPED) {
			if(is_camp(pile, j))
				card = cards[destroyed_camp_i];
			else
				card = cards[punk_i];
		}
		var deg = 0;
		if(pile.card_states[j] & HARMED)
			deg = 90;
		// previous render method (didn't smoothly scale down) - apply to effects or on mobile
		if(card.id >= effects_start_i || scaledCanvas.height > scaledCanvas.width || is_mobile) {
			render_cropped_card(card.row_i, card.col_i, card.dims, card.img_i, pileX + xdiff + pile.scrollX, pileY + ydiff, pile.card_width, pile.card_height, 0, deg);
		}
		else {
			// render three times to smoothly scale down - once from full to 3x scale, then 3x to 1.5x, then 1.5x to 1x
			oc.width = pile.card_width * oc_scale;
			oc.height = pile.card_height * oc_scale;
			render_cropped_card(card.row_i, card.col_i, card.dims, card.img_i,
				0, 0, oc.width, oc.height, 0, 0, octx);
			octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
			DrawImage(oc, pileX + xdiff + pile.scrollX, pileY + ydiff, pile.card_width, pile.card_height,
				0, 0, oc.width * 0.5, oc.height * 0.5, deg);
		}
		if(!(pile.card_states[j] & READY) && (pile == p1.board || pile == p2.board) && turn > -1) {
			card = cards[ready_effect_i];
			render_cropped_card(card.row_i, card.col_i, card.dims, card.img_i,
				pileX + xdiff + pile.scrollX + pile.card_width/8, pileY + ydiff + pile.card_height / 4, pile.card_width*3/4, pile.card_height/2, 0, deg);
		}
	}
}

function scroll_pile(pile, pileX, pileY, endx, endy) {
	var mouse_on_pile = mouse.x > pileX && mouse.x < endx &&
						mouse.y > pileY && mouse.y < endy;
	if(mouse_on_pile && mouse.buttonsPressed[2]) {
		pile.scrolling = true;
	}
	if(pile.scrolling) {
		if(mouse.buttonsDown[2]) {
			pile.scrollX = pile.scrollXStart + (mouse.x - mouse.startX);
		}
		else if(mouse.buttonsReleased[2]) {
			pile.scrollXStart = pile.scrollX;
			pile.scrolling = false;
		}
	}
}

function new_pile(uses_card_states, always_full, max_cols, max_cards, xd, yd, cw, ch) {
	if(xd == null) xd = people_xdiff;
	if(yd == null) yd = people_ydiff;
	if(cw == null) cw = card_width;
	if(ch == null) ch = card_height;
	if(max_cols == null) max_cols = 9001;
	if(max_cards == null) max_cards = 9001;
	var cards = [];
	var card_states = [];
	if(always_full) {
		for(var i = 0; i < max_cards; i++) {
			cards.push(empty_i);
			card_states.push(0);
		}
	}
	return {
		cards: cards,
		card_states: card_states,
		uses_card_states: uses_card_states,
		scrollX: 0,
		scrollXStart: 0,
		scrolling: false,
		always_full: always_full,
		max_cols: max_cols,
		max_cards: max_cards,
		xdiff: xd,
		ydiff: yd,
		card_width: cw,
		card_height: ch,
	};
}

function move_card(from, from_i, to, to_i) {
	if(from == null) {
		from = {cards: [from_i], always_full: false, uses_card_states: false};
		from_i = 0;
	}
	// shuffle discard into new deck if deck empty
	if(from == draw_pile && draw_pile.cards.length == 0) {
		if(discard_pile.cards.length == 0) return; // no draw or discard, can't draw
		for(var i = discard_pile.cards.length - 1; i >= 0; i--) {
			draw_pile.cards.push(discard_pile.cards.splice(0, 1)[0]);
		}
		shuffle(draw_pile.cards);
	}
	var card = from.cards[from_i];
	var card_state = from.uses_card_states ? from.card_states[from_i] : UNHARMED;
	// either set or splice out card from dest
	if(from.always_full) {
		from.cards[from_i] = empty_i;
		if(from.uses_card_states)
			from.card_states[from_i] = UNHARMED;
	}
	else {
		from.cards.splice(from_i, 1);
		if(from.uses_card_states)
			from.card_states.splice(from_i, 1);
	}
	if(to != null) { // either set or splice in card to dest
		if(to.always_full) {
			to.cards[to_i] = card;
			if(to.uses_card_states)
				to.card_states[to_i] = card_state;
		}
		else {
			to.cards.splice(to_i, 0, card);
			if(to.uses_card_states)
				to.card_states.splice(to_i, 0, card_state);
		}
	}
	// update game state
	if((turn >= 0 || turn <= -3) && !starting_turn && to != dragging_pile && to != temp_pile && !is_resolving()) {
		if(is_logging) console.log("sending after card move: ");
		SendGameState();
	}
}

function render_cropped_card(row_i, col_i, dims, whole_img_i, x, y, w, h, x_padd, deg, ctx2) {
	var row = dims[row_i];
	var card_x = row.topleft.x;
	var card_y = row.topleft.y;
	x_padd = x_padd ? x_padd : 1;
	var x_step = (row.botright.x - row.topleft.x - x_padd * (row.num_cards-1)) / row.num_cards;
	var y_step = (row.topright.y - row.topleft.y) / row.num_cards;
	for(var i = 0; i < col_i; i++) {
		card_x += x_step + x_padd;
		card_y += y_step;
	}
	var sh = (1 - col_i/row.num_cards)*(row.botleft.y - row.topleft.y) +
	             (col_i/row.num_cards)*(row.botright.y - row.topright.y);
	if(deg == null) deg = 0;
	DrawImage(imgs[whole_img_i], x, y, w, h, card_x, card_y, x_step - x_padd, sh, deg, null, null, null, ctx2);
}

function applySeed(seedStr) {
	Math.seedrandom(seedStr);
}

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements arr[i] and arr[j]
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
  }
}

//////////////////// common stuff ////////////////////
var canvas;
var ctx;
var scaledCanvas;
var sclaedCtx;
var interval;

var keysDown = [];
var keysPressed = [];
var keysReleased = [];
var mouse = {x: 0, y: 0,  px: 0, py: 0, dx: 0, dy: 0, startX: 0, startY: 0, scrollX: 0, scrollY: 0, scrolled: false, buttonsDown: [], buttonsPressed: [], buttonsReleased: []};

const KEYCODE_TAB   = 9;
const KEYCODE_SHIFT = 16;
const KEYCODE_CTRL  = 17;
const KEYCODE_ALT   = 18;
const KEYCODE_SPACE = 32;
const KEYCODE_LEFT  = 37;
const KEYCODE_UP    = 38;
const KEYCODE_RIGHT = 39;
const KEYCODE_DOWN  = 40;
// can do 'A'.codePointAt(0) to get keyCode of ascii stuff

const MOUSE_LEFT   = 0;
const MOUSE_MIDDLE = 1;
const MOUSE_RIGHT  = 2;

function DrawRect(x, y, width, height, color) {
	ctx.fillStyle = color ? color : "black";
	ctx.fillRect(x, y, width, height);
}

function DrawCircle(x, y, radius, color) {
	ctx.fillStyle = color ? color : "white";
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function DrawLine(fromX, fromY, toX, toY, color) {
	ctx.fillStyle = color ? color : "white";
	ctx.moveTo(fromX, fromY);
	ctx.lineTo(toX, toY);
	ctx.stroke();
}

function DrawText(text, x, y, size, color, align) {
	ctx.fillStyle = color ? color : "white";
	ctx.font = (size ? size : 12) + "px consolas";
	ctx.textAlign = align ? align : "left";
	ctx.fillText(text, x, y);
}

function DrawImage(img, x, y, width, height, sx, sy, sw, sh, deg, flip, flop, center, ctx2) {
	var c = ctx2 ? ctx2 : ctx;
	c.save();
	if(sx == null) sx = 0;
	if(sy == null) sy = 0;
	if(sw == null) sw = img.width;
	if(sh == null) sh = img.height;
	if(width == null) width = img.width;
	if(height == null) height = img.height;
	if(center == null) center = false;
	// Set rotation point to center of image, instead of top/left
	if(center) {
		x -= width/2;
		y -= height/2;
	}
	// Set the origin to the center of the image
	c.translate(x + width/2, y + height/2);
	// Rotate the canvas around the origin
	var rad = 2 * Math.PI - deg * Math.PI / 180;    
	c.rotate(rad);
	// Flip/flop the canvas
	if(flip) flipScale = -1; else flipScale = 1;
	if(flop) flopScale = -1; else flopScale = 1;
	c.scale(flipScale, flopScale);
	// Draw the image    
	c.drawImage(img, sx, sy, sw, sh, -width/2, -height/2, width, height);
	c.restore();
}

function DoButton(text, callback, x, y, w, h) {
	var color = "#777777";
	var mouse_in_button = mouse.x > x && mouse.x < x + w && mouse.y > y && mouse.y < y + h;
	if(mouse_in_button) {
		color = "#AAAAAA";
		if(mouse.buttonsDown[0])
			color = "#CCCCCC";
		if(mouse.buttonsPressed[0])
			callback();
	}
	DrawRect(x, y, w, h, color);
	DrawText(text, x + w/2, y + h/2 + text_scale/4, text_scale, "white", "center");
}

function PlaySound(sound, skip_sending) {
	if(mouse.buttonsPressed.length == 0) return; // can't play sounds until user interacts with page
	sound.currentTime = 0;
	if(sound.readyState >= 1) // 4 == HAVE_ENOUGH_DATA
		sound.play();
	if(!skip_sending)
		prev_sound_played_i = sounds.indexOf(sound);
	prev_sound = sound;
}

function ResetInput() {
	for(key in keysPressed)
		keysPressed[key] = false;
	for(key in keysReleased)
		keysReleased[key] = false;
	mouse.dx = mouse.x - mouse.px;
	mouse.dy = mouse.y - mouse.py;
	mouse.px = mouse.x;
	mouse.py = mouse.y;
	mouse.scrollX = 0;
	mouse.scrollY = 0;
	mouse.scrolled = false;
	for(key in mouse.buttonsPressed)
		mouse.buttonsPressed[key] = false;
	for(key in mouse.buttonsReleased)
		mouse.buttonsReleased[key] = false;
}

function main() {
	// get canvas references
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	scaledCanvas = document.getElementById("scaledCanvas");
	scaledCtx = scaledCanvas.getContext("2d");

	// add meta tag that attemps to prevents pixel density shenanigans on moble
		// also prevents default gestures like zoom and pan
	var meta = document.createElement("meta");
	meta.setAttribute('name','viewport');
	var content = 'initial-scale=';
	content += 1 / window.devicePixelRatio;
	content += ',user-scalable=no';
	meta.setAttribute('content', content);
	document.getElementsByTagName('head')[0].appendChild(meta);

	// handle canvas size
	scaledCanvas.width = window.innerWidth;
	scaledCanvas.height = window.innerHeight;
	addEventListener("resize", function(e) {
		scaledCanvas.width = window.innerWidth;
		scaledCanvas.height = window.innerHeight;
	});

	// handle key input
	addEventListener("keydown", function(e) {
		keysDown[e.keyCode] = true;
		keysPressed[e.keyCode] = true;
	});
	addEventListener("keyup", function(e) {
		keysDown[e.keyCode] = false;
		keysReleased[e.keyCode] = true;
	});

	// handle mouse input
	addEventListener("wheel", function(e) {
		mouse.scrollX = e.deltaX;
		mouse.scrollY = e.deltaY;
	});
	addEventListener("mousemove", function(e) {
		mouse.x = e.clientX * (canvas.width / scaledCanvas.width );
		mouse.y = e.clientY * (canvas.height / scaledCanvas.height);
	});
	addEventListener("mousedown", function(e) {
		mouse.buttonsDown[e.button] = true;
		mouse.buttonsPressed[e.button] = true;
		mouse.x = e.clientX * (canvas.width / scaledCanvas.width);
		mouse.y = e.clientY * (canvas.height / scaledCanvas.height);
		mouse.startX = mouse.x;
		mouse.startY = mouse.y;
		if(is_logging) console.log("(" + mouse.x + "," + mouse.y + "), (" + e.clientX + "," + e.clientY + ")");
	});
	addEventListener("mouseup", function(e) {
		mouse.buttonsDown[e.button] = false;
		mouse.buttonsReleased[e.button] = true;
	});
	// stop right click from opening standard context menu
	document.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		return false;
	});

	// handle touch input
	addEventListener("touchmove", function(e) {
		var touch_i = 0;
		if(e.touches.length > 1) touch_i = e.touches.length - 1;
		if(scaledCanvas.width > scaledCanvas.height) {
			mouse.x = e.touches[touch_i].clientX * (canvas.width / scaledCanvas.width);
			mouse.y = e.touches[touch_i].clientY * (canvas.height / scaledCanvas.height);
		}
		else {
			mouse.x = e.touches[touch_i].clientY * (canvas.width / scaledCanvas.height);
			mouse.y = (scaledCanvas.width - e.touches[touch_i].clientX) * (canvas.height / scaledCanvas.width);
		}
	});
	addEventListener("touchstart", function(e) {
		is_mobile = true;
		var touch_i = 0;
		if(e.touches.length > 1) touch_i = e.touches.length - 1;
		if(scaledCanvas.width > scaledCanvas.height) {
			mouse.x = e.touches[touch_i].clientX * (canvas.width / scaledCanvas.width);
			mouse.y = e.touches[touch_i].clientY * (canvas.height / scaledCanvas.height);
		}
		else {
			mouse.x = e.touches[touch_i].clientY * (canvas.width / scaledCanvas.height);
			mouse.y = (scaledCanvas.width - e.touches[touch_i].clientX) * (canvas.height / scaledCanvas.width);
		}
		mouse.startX = mouse.x;
		mouse.startY = mouse.y;
		var button_i = 0;
		if(e.touches.length > 1) button_i = 2;
		mouse.buttonsDown[button_i] = true;
		mouse.buttonsPressed[button_i] = true;
		e.preventDefault();
	});
	addEventListener("touchend", function(e) {
		if(e.touches.length == 0) {
			mouse.buttonsDown[0] = false;
			mouse.buttonsReleased[0] = true;
		}
		else {
			mouse.buttonsDown[2] = false;
			mouse.buttonsReleased[2] = true;
		}
	});

	Init();
	// do game loop
	interval = setInterval(Update, 1000 / 60);
}
function StopUpdate() {
	clearInterval(interval);
}
function ContinueUpdate() {
	interval = setInterval(Update, 1000 / 60);
}

