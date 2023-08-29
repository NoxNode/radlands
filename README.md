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
- match-making: go to the /?match url and it'll put you in a custom lobby with the next person to go to that url
- choosing camps is treated as a turn (turn -2 and -1)
- if there's a problem, try "Restart Turn", refresh the page, or go to a different lobby id

## controls
- drag cards to move them
- click cards to activate (left/right side activates left/right ability)
- hover cards to show close-up
- right click and drag to scroll hand/discard/temp
- to hover on mobile: touch nothing then drag around
- to scroll on mobile: touch nothing with 1 finger, then touch and drag with another
- drag a card from hand to discard for the junk effect
- when playing events, place them on any slot in the event queue (it'll go where it should)
- when playing people, place them where you want them to go (people in the way will move)
- when non-effect-icon cards are in "Temp", discard the ones you don't want
- when effect-icon cards are in "Temp", drag them to the spot you're targeting
- when resolving optional effects, click "Done" to skip that option (last is mandatory if all others are skipped)
- punks and restores are always optional - if there's no "Done" button, drag them to the discard to skip
- when argo's trait is active, click the top half of the card for argo's ability
- if you want to send a message to others in the lobby, you can press ctrl+shift+i then go to the "Console" tab then type chat("your message") and hit enter
- if you want to save your game (in case the server is reset), press ctrl+shift+i then go to the "Console" tab then type SaveGame() and hit enter

## deviations from rulebook
- the online game doesn't end when the draw pile depletes twice - you can just declare a tie then if you want to follow the rulebook
- all the cards in the discard pile are visible - if you want to follow the rulebook you can scroll it over so that only the top (left-most) card shows
- because the url determines the starting player, camps are chosen after knowing who goes first (I don't think this is following the rulebook, but its easier to implement and I kinda like it this way)

## how to host your own free google cloud server
- go to <https://console.cloud.google.com/>
- create an account or sign in
- in the search bar, search "Compute Engine"
- it'll say you need to create a project, so click "Select a project"
- click "New Project"
- give it a name and click "Create"
- click "Enable" to enable the Compute Engine API
- click "Enable Billing" (it just needs your info but won't actually cost anything)
- click "Create Billing Account"
- follow the instructions to finish creating that
- when you're back on "Compute Engine" and you've enabled it, click the "Create Instance" button
- give it a name
- set region to one of the regions listed here: <https://cloud.google.com/free/docs/free-cloud-features?hl=en#compute>
- zone can be anything
- choose "E2"
- choose "e2-micro"
- under "Boot disk" click "Change"
- change "Boot disk type" to "Standard persistent disk"
- size can be up to 30GB according to the Free Tier limits, but I kept it at 10GB cuz I do not need more
- click "Select"
- check "Allow HTTP traffic" and "Allow HTTPS traffic"
- leave all the other stuff default
- click "Create"
- click "Set up firewall rules"
- click "Create firewall rule"
- give it a name
- set Logs off
- choose "Egress"
- for "Targets" choose "All instance in network"
- enter "0.0.0.0/0" in "Source IPv4 ranges"
- check "TCP"
- enter "8080" in "Ports" under "TCP"
- click "Create"
- may have to make another firewall rule with all the same stuff except "Ingress" instead of "Egress"
- go back to "VM Instances" (can search "Compute Engine" again)
- click "SSH" (may have to disable adblock and may have to click "Authorize")
- run the following commands:
- sudo apt install git nodejs npm
- git clone "https://github.com/NoxNode/radlands.git"
- cd radlands
- npm install
- node server.js &
- exit
- You now have a free google cloud server running radlands
- copy the "External IP" for the VM you just created
- use that IP instead of the one on this page to use your server

## how to update your server when there's updates to this repository
- navigate to the same "Compute Engine" page you used above
- click "SSH"
- cd radlands
- git fetch
- git rebase
- exit
- You now have updated your radlands server

## if the git fetch showed that server.js is updated, do this instead (existing games will be reset):
- run the following command: ps aux
- look in the table for the thing saying "node server.js" (copy the number on the 2nd-to-left-most column of that row)
- run the following commands:
- kill [that number you copied]
- cd radlands (if you haven't already)
- git fetch (if you haven't already)
- git rebase (if you haven't already)
- node server.js &
- exit
- You now have updated your radlands server

