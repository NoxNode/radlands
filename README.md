# radlands

### an unofficial online version of radlands

## links
- buy the official, physical card game: <https://roxley.com/products/radlands>
- rulebook pdf: <https://cdn.shopify.com/s/files/1/0246/2190/8043/files/Radlands_-_Rulebook_v1.2_-_2023-05-26.pdf?v=1685137340>
- google cloud server: <http://34.83.89.6:8080/?test0>

## notes
- the last digit of the above url is the player id (0 for first, 1 for second - can spectate by using 2-9)
- the stuff between the '?' and the last digit is the lobby id (and random seed)
- choosing camps is treated as a turn (turn -2 and -1)
- juggernaut isn't implemented yet
- if there's a problem, try "Restart Turn", refresh the page, or go to a different lobby id
- the online game doesn't end when the draw pile depletes twice - you can just declare a tie then if you want to follow the rulebook
- all the cards in the discard pile are visible - if you want to follow the rulebook you can scroll it over so that only the top (left-most) card shows

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
- when argo's trait is active, click the top half of the card for argo's ability

