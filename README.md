# radlands

### an unofficial online version of radlands

## links
- buy the official, physical card game: <https://roxley.com/products/radlands>
- rulebook pdf: <https://cdn.shopify.com/s/files/1/0246/2190/8043/files/Radlands_-_Rulebook_v1.2_-_2023-05-26.pdf?v=1685137340>
- google cloud server (match-making): <http://34.83.89.6:8080/?match>
- google cloud server (custom lobby): <http://34.83.89.6:8080/?test0>

## notes
- custom lobbies: the last digit of the above url is the player id (0 for first, 1 for second - can spectate by using 2-9)
- custom lobbies: the stuff between the '?' and the last digit is the lobby id (and random seed)
- match-making: go to the /?match url and it'll put you in a custom lobby with the next person to also go to /?match
- choosing camps is treated as a turn (turn -2 and -1)
- juggernaut isn't implemented yet (would take a lot of refactoring)
- if there's a problem, try "Restart Turn", refresh the page, or go to a different lobby id
- the online game doesn't end when the draw pile depletes twice - you can just declare a tie then if you want to follow the rulebook
- all the cards in the discard pile are visible - if you want to follow the rulebook you can scroll it over so that only the top (left-most) card shows
- because the url determines that starting player, camps are chosen after knowing who goes first (this is not following the rulebook, but its easier to implement and I kinda like it this way)

## controls
- drag cards to move them
- click cards to activate (left/right side activates left/right ability)
- hover cards to show close-up
- right click and drag to scroll hand/discard/temp
- to hover on mobile: touch nothing then drag around
- to right click on mobile: touch nothing with 1 finger, then touch and drag with another
- drag a card from hand to discard for the junk effect
- when playing events, place them on any slot in the event queue (it'll go where it should)
- when playing people, place them where you want them to go (people in the way will move)
- when non-effect cards are in "Temp", discard the ones you don't want
- when effect cards are in "Temp", drag them to the spot you're targeting
- when resolving optional effects, click "Done" to skip that option (last is mandatory if all others are skipped)
- punks and restores are treated as always optional - if there's no "Done" button then drag them to the discard to skip them
- when argo's trait is active, click the top half of the card for argo's ability
- if you want to send a message to others in the lobby, you can press ctrl+shift+i then go to the "Console" tab then type chat("your message") and hit enter

