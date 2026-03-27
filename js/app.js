const CHARACTERS = {
  mayor:{
    name: "Ambitious",
    id: "mayor",
    player: "XXXXX",
    blurb: "The mayor of Univ Valley",
    password: "1000",
    faction: "Locals",
    image: "default.png"
  },
  bartender: {
    name: "Nicks",
    id: "bartender",
    player: "Noah",
    blurb: "Local bartender",
    password: "1991",
    faction: "Locals",
    image: "default.png"
  },
  dentist: {
    name: "Dr. Casanova Holliday",
    id: "dentist",
    player: "Nate R.",
    blurb: "Gambling town dentist",
    password: "2007",
    faction: "Locals",
    image: "default.png"
  },
  saloon_musician: {
    name: "Hornvalley the Freak",
    id: "saloon_musician",
    player: "Nate J.",
    blurb: "Young instrumentalist",
    password: "1994",
    faction: "Locals",
    image: "default.png"
  },
  blacksmith: {
    name: "Buffalo Grass",
    id: "blacksmith",
    player: "Carter",
    blurb: "Local blacksmith",
    password: "1939",
    faction: "Locals",
    image: "default.png"
  },
  sheriff: {
    name: "Annie Brokley",
    id: "sheriff",
    player: "Lizzy",
    blurb: "Reliable town sheriff",
    password: "1903",
    faction: "Locals",
    image: "default.png"
  },
  deputy: {
    name: "Fals Ruth",
    id: "deputy",
    player: "Chase",
    blurb: "Notorious Bounty Hunter turned Deputy",
    password: "1987",
    faction: "Locals",
    image: "default.png"
  },
  undertaker: {
    name: "Vicente Duela",
    id: "undertaker",
    player: "Jesus",
    blurb: "Reclusive Undertaker",
    password: "1564",
    faction: "Locals",
    image: "default.png"
  },
  saloon_hand: {
    name: "LeRoy Cassidy",
    id: "saloon_hand",
    player: "Brody",
    blurb: "Hand for hire",
    password: "1859",
    faction: "Locals",
    image: "default.png"
  },
  surgeon: {
    name: "Dr. Maddie Stark",
    id: "surgeon",
    player: "Nainika",
    blurb: "Trusted Town Doctor",
    password: "1852",
    faction: "Locals",
    image: "default.png"
  },
  saloon_chef: {
    name: "Lillian Bell",
    id: "saloon_chef",
    player: "Ava",
    blurb: "Local saloon hand",
    password: "2004",
    faction: "Locals",
    image: "default.png"
  },
  mayors_assistant: {
    name: "Willy the Silly",
    id: "mayors_assistant",
    player: "Jade",
    blurb: "Young mayor's assistant",
    password: "0080",
    faction: "Locals",
    image: "default.png"
  },
  retired_cowboy:{
    name: "Jet",
    id: "retired_cowboy",
    player: "Melina",
    blurb: "Retired Cowboy",
    password: "2020",
    faction: "Locals",
    image: "default.png"
  },
  businessman: {
    name: "Ted Bannett",
    id: "businessman",
    player: "EXTRA",
    blurb: "Owner of Mattress Firm",
    password: "2012",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  traveling_performer: {
    name: "Blues McGee",
    id: "traveling_performer",
    player: "EXTRA",
    blurb: "Wanderer from Highhome",
    password: "1860",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  farmer: {
    name: "Lake Strawberry",
    id: "farmer",
    player: "EXTRA",
    blurb: "Blueberry Farmer",
    password: "1986",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  journalist: {
    name: "Spikie Rickett",
    id: "journalist",
    player: "CJ",
    blurb: "Amnesiac Journalist?",
    password: "2001",
    faction: "Locals",
    image: "default.png"
  },
  doctor: {
    name: "Lucille Canott",
    id: "doctor",
    player: "Sam",
    blurb: "Snake-oil saleswoman",
    password: "0040",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  health_practitioner: {
    name: "Simón de Cuca",
    id: "health_practitioner",
    player: "Phoenix",
    blurb: "Snake-oil salesman",
    password: "1485",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  demolitionist: {
    name: "Kalamity Bane",
    id: "demolitionist",
    player: "Kayla",
    blurb: "Ne'er-do-well demolitionist drifter",
    password: "0020",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  cowboy: {
    name: "Cyvil Hitchcock",
    id: "cowboy",
    player: "Matt",
    blurb: "Scruffy notorious cowboy",
    password: "1001",
    faction: "Locals",
    image: "default.png"
  },
  reporter: {
    name: "Milly Stryefson",
    id: "reporter",
    player: "CC",
    blurb: "Young investigative journalist",
    password: "0303",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  drunkard: {
    name: "Mabee D. King",
    id: "drunkard",
    player: "Jen",
    blurb: "Wanderer",
    password: "4040",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  saloon_singer: {
    name: "Brilliant Brian Burpe",
    id: "saloon_singer",
    player: "Braydon",
    blurb: "Tattered religious instrumentalist",
    password: "2017",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  archaeologist: {
    name: "Heinz Heinrich",
    id: "archaeologist",
    player: "EXTRA",
    blurb: "Archaeologist",
    password: "1876",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  caravaner: {
    name: "Julius Fondrique",
    id: "caravaner",
    player: "EXTRA",
    blurb: "Head Caravaner",
    password: "1865",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  tippler: {
    name: "Alex Resnick",
    id: "tippler",
    player: "EXTRA",
    blurb: "Drunkard from Highhome",
    password: "2006",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  farrier: {
    name: "Shining Jessie Games",
    id: "farrier",
    player: "EXTRA",
    blurb: "Religious traveling Farrier",
    password: "9999",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  teacher: {
    name: "Opulent Spruce Louis",
    id: "teacher",
    player: "Xavier",
    blurb: "Religious Schoolteacher",
    password: "2002",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  trade_town_surgeon: {
    name: "Sparkling Ooo Oasis",
    id: "trade_town_surgeon",
    player: "EXTRA",
    blurb: "Religious Ranger",
    password: "1111",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  sister: {
    name: "Meryl Stryfeson",
    id: "sister",
    player: "EXTRA",
    blurb: "OnCarryVan Sister",
    password: "0606",
    faction: "Out-of-Towners",
    image: "default.png"
  },
};

const DATABASE_PORTALS = [
  {
    id: "saloon-storage",
    title: "Saloon Storage",
    description: "Information about the Saloon stocking records.",
    password: "0873",
    href: "lore.html",
    cta: "Open Storage",
    clue: "<i>While browsing the saloon storage, you come across one suspicious record you see</i>:<br><br> Category: <b class='clue-hint'>Stolen and Damaged Goods</b> <br> Town Biological Generator structural integrity at <b class='clue-hint'>RED</b>.<br> Reported Stolen Goods:<br><b class='clue-hint'>*15 Processed Buzzers</b><br><b class='clue-hint'>*27 Mushrooms</b><br><b class='clue-hint'>*11 Mulberry Seed<br></b><br> Category: <b class='clue-hint'>Livestock Loss</b> <br> Reported Stolen Livestock<br> <b class='clue-hint'>*3 Hemas</b><br><b class='clue-hint'>*5 Mollescks</b><br><b class='clue-hint'>*4 Enkai - 1 Located in nearby cavern (status: pending recovery)</b>.<br> All incidents attributed to bandit interference by superiors. <b class='clue-hint'>Questionable conclusion.</b> Further action recommended. <br> -Nicks"
  },
  {
    id: "mayor-management-system",
    title: "Mayor Management System",
    description: "The mayors internal record keeping system.",
    password: "0340",
    href: "characters.html",
    cta: "Open Management System",
    clue: "<i>While browsing the management system, you come across one suspicious record you see</i>:<br><br> Excerpt from the Condemned:<br> <b class='clue-hint'>-O Breath beneath burning sky, we pass the torch to my daughter; be strong, hold the faith, return becoming one again.-</b> <br> Her wailing as I lopped her head still haunts her I imagine, especially with the <b class='clue-hint'>anniversary</b> coming up. I expect her to pull something drastic in the coming days. Sending Willy to intercept.<br> He best not dilly dally over there again. He's becoming more rebellious. I see a fighter in him. <b class='clue-hint'>It scares me. He's getting harder to handle, stronger. Plus, his antics are causing serious flare-ups.</b><br> - Ambitious"
  },
  {
    id: "jailor-journal",
    title: "Jailor Journal",
    description: "Records of the activity in Univ Valley jail.",
    password: "8055",
    href: "rules.html",
    cta: "Open Journal",
    clue: "<i>While browsing the jailor journal, you come across one suspicious record you see</i>:<br><br> Request of plot assessment: <br><b class='clue-hint'>Vicente Duela</b><br> Request Type: <b class='clue-hint'><br>Renovation <br> Dig Site <br> Extra Key for overnight access</b>."
  },
  
];

function createCharacterDetails(
  player,
  character,
  occupationAndClothingTypeSuggestions,
  characterDetails,
  goals,
  abilities
) {
  return {
    player,
    character,
    occupationAndClothingTypeSuggestions,
    characterDetails,
    goals,
    abilities
  };
}

const CHARACTERS_DETAILED = {
  mayor: createCharacterDetails(
    "XXXXX",
    "Ambitious",
    "Mayor",
    null,
    null,
    null
  ),
  bartender: createCharacterDetails(
    "Noah",
    "Nicks",
    "Bartender",
    "Bartender",
    "Bartend",
    "Bartend"
  ),
  dentist: createCharacterDetails(
    "Nate R.",
    "Dr. Casanova Holiday",
    `Dentist`,
    `“I’ve gambled everything, my house, my wife, my dog, but son you have to believe me this is for a good cause. I’m gonna win everything back from those f*cks tonight!”
Once a good-natured, selfless person working diligently as the town’s dentist. After he lost a good portion of his life in the city’s casino, he has since taken to drinking to forget his troubles. Still works as a dentist but prices have skyrocketed to fuel his addiction to emptying his pockets. Hoping to hit the jackpot this weekend, you first take a trip to the local saloon. Wouldn’t you know it, it turns out it's their 6th anniversary tonight, or is it their 7th? You wonder if that bluebellied mayor is going to make a speech tonight.`,
    `Your goal:
Get back your gambled goods from the town’s surgeon and the mayor, one way or another. $$$5,000 for the mayor, $$$2,100 for Dr. Stark.

If you can get the land deed, you may just be able to barter your way out of debt.

Maddie’s bumbling idiot of an assistant, Spikie, won’t stop complaining about his mouth. Might as well see what’s bothering him to shut him up.

Secret: You have $$$15000 in debt to the mayor.

Clue: Your opioid supply was late today.`,
    `Open Wide:
A character must show you all their item cards and money. (You can’t take their items or money-just look at them.). $$$50.

Share what you know:
After talking to another player, share your clue. They must then show you their clue. $$$50.

Medicine-Maker:
You can craft Antidotes for poisoned players, or craft Poisons.`
  ),
  saloon_musician: createCharacterDetails(
    "Nate J.",
    "Hornvalley the Freak",
    `Saloon Musician`,
    `Former member of a small jazz band who also acted as bandits. When a hit went wrong, ending up with an entire bar of people ending up dead including your former partners in crime, you moved to a new town under a new name, Hornvalley the Freak, hoping the name serves a reminder of a life lived formerly in vain.
Lately, you’ve been a solo act, but tonight the mayor has invited another to join you for your performance, Brian Burpe. But, something doesn’t feel right about him…
Your goal:
Ambitious gave you his log-in to his computer, knowing you’d never betray him, but you can never remember his password.`,
    `Secret: You used to be the leader of a music-based band of bandits.

Clue: Your new bandmate has been restless all night, pacing back up and down the halls of the saloon, looking out at the mayor’s office. His eyes continue to scan the halls as if he were looking for something hidden beneath the surface.`,
    `Sharpshooting:
You can make a failed or tied rock-paper-scissors challenge succeed. Does not have to be a challenge you’re involved in. 3 uses.

Keep the change: Another has to reveal their secret to you. $$$75.

Payment for my services:
Play a tune and receive payment of $$$100, if they ain’t got the cash knock them unconscious. 4 uses.`
  ),
  blacksmith: createCharacterDetails(
    "Carter",
    "Buffalo Grass",
    `Blacksmith`,
    `You and Ambitious served together in the No Man’s Corral war. After the war, you upkept your arms manufacturing prowess, and now run a blacksmithing business famous across the settlements. The mayor, Ambitious, gave you a home base in town for whenever you finish your travels and
When he announced he would be running again, he challenged you to try to run as well as his rival. Nothing’s healthier than competition, he said.`,
    `Secret: You know about the existence of vampyrs, but no one believes you.

Clue: New Groveland used to be owned by an elderly couple, but you don’t think Ambitious was related to either of them.`,
    `Sharpshooting:
You can make a failed or tied rock-paper-scissors challenge succeed. Does not have to be a challenge you’re involved in. 3 uses.

Is it Luck or Cheats? Make any failed card Games related challenge, a success. 3 uses.

It’s Just a Flesh Wound!: Play this after someone has defeated you in combat immediately. The blow has no effect, you are not injured, and can either strike back or flee. Does not work against poison. 2 uses.

Secret Trait:
Iron-lung: If they have not been cured after 10 minutes of being poisoned, they do not die from the poison.
Still cannot use abilities until cured.`
  ),
  sheriff: createCharacterDetails(
    "Lizzy",
    "Annie Brokley",
    `Sheriff`,
    `You’re the town’s reliable sheriff with a heart of gold. You mean business but make time for your community.
Tonight’s the saloon’s 6th anniversary, surely you should make an appearance as the town’s sheriff. As you made your way there, you ran into Lillian Bell, one of Ambitious’ errand runners. You ask her what’s in the bags she’s carrying and she tells you not to worry about it, it’s official Ambitious business. You pay it no mind as soon as you hear that, and continue on your way to the saloon.`,
    `Your goal: Ambitious told you his enemies may act on his life soon, but you did not believe him until tonight. He gave you the task of securing the deed, but he forgot to instruct you on where to find it.

Keep an eye on the out-of-towners, they sure picked an awful day to come into town, could it be mere coincidence?

Secret: You used to carry out hits for Ambitious.

Clue: You saw Lillian Bell leaving the Mayor’s office clutching a weird bag before entering the saloon.`,
    `It’s Just a Flesh Wound!: Play this after someone has defeated you in combat immediately. The blow has no effect, you are not injured, and can either strike back or flee. Does not work against poison. 2 uses.

Arrest: You may arrest someone under suspicion and throw them in jail. The Bartender sends them to the holding cell and prevents them from using their abilities. However, if you cannot present suitable evidence to the Bartender within 10 minutes (or 5 minutes if before final call), they will be released.

Pickpocket:
Tell the Bartender which item you want to take from another player. If that player does not have what you seek, the Bartender will take something else at random. $$$50.`
  ),
  deputy: createCharacterDetails(
    "Chase",
    "Fals Ruth",
    `Bounty Hunter /
Deputy`,
    `Very calm and collected but can become impatient always shooting at people before getting an explanation.
Described as a sick and twisted man by his close allies.
Money-loving, but willing to cooperate and split a prize fairly: 80-20.

Though the mayor, Ambitious, filled your request to join as a deputy he still holds and threatens that if you told anyone about any dealings y’all participated in he would have your head. You both agreed to mutual destruction.
Tonight’s a much different night, get yourself a drink, you’ve earned it.`,
    `Your goal:
Assist the sheriff in finding the assailant.

Keep an eye on the out-of-towners, they sure picked an awful day to come into town, could it be mere coincidence?

Sold to the highest-bidder: If you could get your hands on that deed, you could swipe it under the table and sell it at auction for a quick buck.

Secret: When you went back to the office to yell at Ambitious, you found him face down on the floor.

Clue: Ambitious’ deed to Little Groveland was not in his office.`,
    `Pickpocket:
Tell the Bartender which item you want to take from another player. If that player does not have what you seek, the Bartender will take something else at random. $$$50.

Thorough appraisal: After speaking to another player, they must show you all their item cards and money. (You can’t take their items or money-just look at them.) $$$50.

Arrest: You may arrest someone under suspicion and throw them in jail. The Bartender sends them to the holding cell and prevents them from using their abilities. However, if you cannot present suitable evidence to the Bartender within 10 minutes (or 5 minutes if before final call), they will be released.`
  ),
  undertaker: createCharacterDetails(
    "Jesus",
    "Vicente Duela",
    "Undertaker",
    `Cynical and pragmatic priest
Kill or be killed mentality.
Carries profound guilt for his inability to act in the past against ghouls he came across.
Protective, resourceful, and sacrificial
Man of the cloth who still partakes in smoking, drinking, gambling, and has the capacity to kill.
Believes men are closer to devils than angels
Realist - Will kill those he believes there to be no redemption for.
“You have to kill the spiders to save the butterflies.”`,
    `Secret: Ambitious instructed you to dig the secret tunnels under the city.

Clue: Ambitious had you bury a box by the prison yesterday.`,
    `Copper for your time: Another has to reveal their secret to you. $$$50

It’s Just a Flesh Wound!: Play this after someone has defeated you in combat immediately. The blow has no effect, you are not injured, and can either strike back or flee. Does not work against poison. 2 uses.

Tight-lipped: If another player plays an ability on you that forces you to reveal your secret or clue, it has no effect-give nothing up and their attempt fails. They still have to check off a use. 2 uses.

Secret Trait:
Iron-lung: If they have not been cured after 10 minutes of being poisoned, they do not die from the poison.
Still cannot use abilities until cured.`
  ),
  saloon_hand: createCharacterDetails(
    "Brody",
    "LeRoy Cassidy",
    "Saloonhand",
    `Has a way with animals and insects as if he could speak to them.
Sometimes speaks in the plural, as if a part of a collective consciousness.
He is said to be quite nice and normal on the surface, but sometimes the mask slips and he becomes cold and uncaring.
Ambitious tasked you with surveillance of the town after learning of your strange ability to communicate with insects, and as luck would have it you get to watch floosies enter and leave his office day in and day out.
In fact, one left his office earlier today. Enough of this, you tell yourself, I’m still human and deserve a break too. You make your way to the saloon, make conversation with some of the other guests and just as you get comfortable it seems the Bartender has something to say.
Outwardly is a kind and normal person. When the mask falls, he becomes cold and uncaring.`,
    `Secret:
One of your drones saw Willy, Civil, and Spikie leave Ambitious's office today.

Clue: Your insect drone had seen Milly leave Ambitious’ office through the window.`,
    `Fly on the Wall:
You can spit out a buzzer that can spy on other players’ conversations. Let the bartender know who you want to listen in on, and he’ll relay the information. 2 uses.

Not so fast!: An ability played by another player has no effect! However, it still costs a use and they cannot use that ability on you again. Cannot be used to cancel out another Not so fast!. May be used to cancel a pickpocket. $$$100.

Let’s share what we know.
After talking to another player, show them your clue. They must then show you their clue. $50`
  ),
  surgeon: createCharacterDetails(
    "Nainika",
    "Maddie Stark",
    "Surgeon/ Town-Doctor",
    `Stern and serious when the situation requires.
Serves as the town doctor, and one of the region’s top medical practitioners.
Is not above challenging strangers at a bar for their last scraps. Displays a fearless yet almost foolish confidence in her luck.
Incredibly skilled at cards, consistently defeating opponents until they refuse to play with her.
Always carrying her Heat Waves 187M Pistol as insurance.`,
    `Your goal:
Find the deed to Little Groveland and give it to Mabee. She promised to keep her mouth shut and to give you your old lab set up and tons of raw materials to work with. It’s the least you could do.

Victory Lap: Dr. Holiday and Willie just don’t know when to quit. Mix a little business with pleasure, have a stab at some cards tonight, rack up some stacks, the next town over has a casino. It’d be nice to have a pool to start with, maybe $2000?

Secret: You get additional supplies from the Old Blood Order.

Clue: Spikie works part-time at your office as an assistant.`,
    `Let’s share what we know.
After talking to another player, show them your clue. They must then show you their clue. $50

Investigate: While speaking to another player, they must show you all of their item cards and money. (You can’t take their items or money-just look at them.) $$$50.

Medicine-Maker:
You can craft Antidotes for poisoned players, or craft Poisons.`
  ),
  saloon_chef: createCharacterDetails(
    "Ava",
    "Lillian Bell [Count Bill]",
    `Saloon hand -
Chef / Pill Mill`,
    `Cooks at the Shack Saloon
Sells opioids after hours at the saloon, running a pill mill.
Was taken in by the Mayor after he found you orphaned by the No Man’s Corral War. He has you run his errands for him nowadays, but he’s still very respectful of you and your time.

You move the bags to your Hema ready to mosey on out of town once the CarryVan arrives, but you don’t wanna miss the 6th annual Saloon speech Ambitious is going to give. Surely, he won’t mind if you are still in town a little longer.`,
    null,
    `A Little Off the Top: Ambitious isn’t here, you can take a little taste. An attempt to send you unconscious fails. 3 uses.

Flannelmouthing: If another player plays an ability on you that forces you to reveal your secret or clue, you instead talk about your day. Their effort has no effect-give nothing up and their attempt fails. They still have to check off their use of ability. 3 uses.

Medicine-Maker:
You can craft Antidotes for poisoned players, or craft Poisons.`
  ),
  mayors_assistant: createCharacterDetails(
    "Jade",
    "Willy the Silly",
    `Mayor’s Assistant`,
    `Polished, professional by old western standard in town setting.
Carefree, jovial and confident in the town’s safety, but does carry a weapon as to not completely discount the idea of things going wrong.
Current assistant to the mayor of Univ City. As the mayor’s closest and most trusted advisor you are fed up with the way the Mayor has treated you as if you were some hired-gun to clean up his messes. He doesn’t even write his own speeches. Sometimes you think about if it were up to you, there’d have been some sort of new leadership a long time ago. You were able to convince Ambitious to declare a truce with the Old Blood Order, but, when a scuffle broke out with patrols from both sides, the conflict had begun drumming up again. You went to Ambitious to plead for another truce deal but the discussion only ended with you in this dirty saloon with a drink in your shattered hand…`,
    `Your goal:
Ambitious’ death: Make sure you’re not blamed for the mayor’s death. If in doubt, move the blame to someone else.

Help Mabee: It’s been a while since you saw your friend, she must be in town for a reason. See if you can help.

The deed: Ambitious told you to protect the deed with your life. Find it before anyone else can. .`,
    `Intuition: You can make a failed or tied rock-paper-scissors challenge succeed. It need not be a challenge you’re involved in. $$$50.

For a Price:
If anyone pulls a skill on you to force you to reveal your Secret or Clue to them, you instead can charge a toll for the information. Toll starts at $$$100 but drops by $$$20 with every use. 3 uses.

You’ve revealed more than you intended: Another player has revealed more than they intended and must reveal their Secret to you.
3 uses.`
  ),
  businessman: createCharacterDetails(
    "Extra",
    "Ted Bannett",
    null,
    null,
    null,
    null
  ),
  traveling_performer: createCharacterDetails(
    "Extra",
    "Blues McGee",
    null,
    null,
    null,
    null
  ),
  retired_cowboy: createCharacterDetails(
    "Melina",
    "Jet [Of the Three Oldies]",
    "Retired Cowboy",
    `Riddled with back pain, you spend most of your days either practicing your old skills as a cowboy, doing stretches to get mobility back, or drinking to keep the edge off. It feels like tonight ain’t a normal night, you can feel it in your spine.`,
    `Your goal:
Scorched earth: There’s something curious about these travelers in town. Find out what they’re up to.

Check in:
Check in on those closest to the mayor.`,
    `Lockpicking: Attempt to unlock any locked object. 3 coin flip attempts per door.

I Had Worse In The War: Use this after another player has defeated you in combat. The wound has no effect: you are not injured and can now take an action. Does not work against poison. 3 uses.

Hold Up: While speaking to another player, they may show you all of their item cards and money. (You can’t take their items or money-just look at them.) If they refuse, knock them unconscious.4 uses.`
  ),
  farmer: createCharacterDetails(
    "Extra",
    "Lake Strawberry",
    null,
    null,
    null,
    null
  ),
  journalist: createCharacterDetails(
    "CJ",
    "Spikie Rickett",
    `Journalist ?
Clothing: Vest, button-down shirt, high-waisted loose fitting trousers.`,
    `Has no recollection of childhood or life before the Hema accident.
The only thing that’s clear is his name, age and occupation as he found a card in his wallet listing this very information.
Gambling-prone
Laid-back
Something is nagging in the back of his mind, but something tells you it would be better for you to let the past lie.
Suffering from amnesia after a Hema related accident.`,
    `Your goal:
Find out just what happened before your horse-related incident. Surely, you have to report whatever it was to your superior for workmans comp.

Maybe You Oughta See a Doctor: Ever since you woke up your head and jaw have been bothering you! You’ve heard some good things about the doctor in town. Check in and get something to numb the pain.`,
    `Investigate: While speaking to another player, they must show you all of their item cards and money. (You can’t take their items or money-just look at them.) $$$50.

It’s Just a Flesh Wound!: Play this after someone has defeated you in combat immediately. The blow has no effect, you are not injured, and can either strike back or flee. Does not work against poison. 2 uses.

Keep the Change: Another player has revealed more than they intended and must reveal their Secret to you. $$$75.`
  ),
  doctor: createCharacterDetails(
    "Sam",
    "Lucille Canott",
    `(40 B.C. - X A.D.)
“Doctor” Snake-oil Saleswoman`,
    `Has lived for centuries, born within the Roman Republic, much of her history remains shrouded in mystery or forgotten. Came in contact with Simón in 1519 and have been inseparable, turning him after an accident leaving him on death’s door.
You were able to narrowly avoid the humans’ No Man’s Corral war and now work with Julius’ CarryVan in exchange for Julius’ life.
In the day to day, you work as a snake-oil seller to mark targets.`,
    `Your goal:
Ambitious promised you a piece of Groveland in exchange for his life, well he’s dead, now you have to win that land the ol’ fashion way: an auction.

Tonight you feel your husband is hiding something from you, find out what it is.
As soon as you can you will want to skip out of town, but it seems you’ve misplaced your wallet, surely someone knows where it is, find it, quickly!

Secret: Don’t let anyone find out about your vampyric nature. If it comes out, there is no telling what this town is capable of.

Clue: You had a deal with Ambitious and he has failed to produce his end of the bargain.`,
    `Medicine-Maker:
You can craft Antidotes for poisoned players, or craft Poisons.

Success!: Use your vampyric intuition and might to change a failed or tied rock-paper-scissors challenge into a success. It needn’t be a challenge you are involved in. 2 uses.

Tight-lipped: If another player plays an ability on you that forces you to reveal your secret or clue, it has no effect-give nothing up and their attempt fails. They still have to check off their use. $$$150.

Secret Trait:
*Vampyres
can drink from unconscious characters
granting a one-time immunity to an attack - If ties, or fails, they can only flee. Does not stack.

*Immune to poison usually but can be affected if they drink from a poisoned victim.`
  ),
  health_practitioner: createCharacterDetails(
    "Phoenix",
    "Simón de Cuca",
    `(1485 A.D. - X A.D.)
“Doctor” Snake-oil Salesman`,
    `Simón was a settler of New Spain who came in contact with Lucille.
You have lived for centuries with Lucille and since then you two have been inseparable. Lately, you have fallen in cooperation with Julius’ CarryVan. In exchange for his life, he supplies you with fresh feed.
Day to day works as a snake-oil seller to mark targets.
May have a bit of a gambling addiction.`,
    `Your goals:
Ambitious is dead, you don’t know by what means, but it must mean Maddie held up her end of the bargain. Now it’s up to you and Lucille to win the land in the auction.
_____________
Your wife made it clear tonight she wants to move on to the next town as soon as possible, however, you may have blown your load tonight in Faro. Don’t allow the misses to catch on but get back your $$$2000 some way, somehow before she realizes it’s missing.

Secret: Don’t let anyone find out about your vampyric nature. If it comes out, there is no telling what this town is capable of.

Clue: Ambitious promised you a chunk of Groveland.`,
    `Pickpocket:
Your many years alive have given you much time to learn the trick of swindling. Tell the Bartender which item you want to take from another player. If that player does not have what you seek, the Bartender will take something else at random. 3 uses.

Medicine-Maker:
You can craft Antidotes for poisoned players, or craft Poisons.

Success!: Use your vampyric intuition and might (your wallet) to change a failed or tied rock-paper-scissors challenge into a success. It needn’t be a challenge you are involved in. $$$150.

Secret Trait:
*Vampyres
can drink from unconscious characters
granting a one-time immunity to an attack - If ties, or fails, they can only flee. Does not stack.

*Immune to poison usually but can be affected if they drink from a poisoned victim.`
  ),
  demolitionist: createCharacterDetails(
    "Kayla",
    "Kalamity Bane",
    "Demolitionist",
    `Impatient, aggressive, and overconfident
Enjoys showing off her lethality and displaying the bodies of defeated foes in the towns she visits.

Can be too eager causing her to fall for trap bait.

Ambitious used to relish in the craft. You guys made a solid team back during the initial conflict of the No Man’s Corral War. Why did he have to go on and start on the straight and narrow with his promotion to general when those Old Blood Order fanatics became so uppity. He was even talking about making his own town when this was all over someday, complete with an already finished map of town. You tried to talk him back into his old ways but all he did was nag and nag about responsibilities. You’ll show him some responsibilities you told him and stormed out.
It’s been some time since the conflict has ended between the Plainsmen and the Old Blood Order, and you’ve heard for his efforts Ambitious has been crowned mayor of a whole town. Guess it’s time to pay your respects to the new leader. You make your preparations and journey to this new spangled town.`,
    `Your goals:

Don’t let anyone find out about the bomb you have laying in the catacombs between the mayor’s office and the saloon.

Secret: You traveled in the catacombs between the mayor’s office and the saloon tonight.

Clue: You’ve heard Ambitious went soft and has taken to some miscreants.`,
    `Intimidate: Speak in an intimidating manner to another character. They have to reveal a secret to you. $$$50.

Sharpshooting: When you shoot someone, you hit if you win or tie at rock-paper-scissors, rather than just when you win as normal. $$$50.

I’ve bared my heart-you bare yours: Reveal your secret to another player - they must reveal their secret to you. $$$50.

Secret Trait:
Iron-lung: If they have not been cured after 10 minutes of being poisoned, they do not die from the poison.
Still cannot use abilities until cured.`
  ),
  cowboy: createCharacterDetails(
    "Matt",
    "Cyvil Hitchcock",
    `Cowboy
Clothing - Cowboy hat, long-sleeved cotton or wool shirt, high-waisted denim or canvas trousers with suspenders.
Cowboy attire`,
    `“Butcher of the West”
Many believe this name to have originated from his meticulous and inhumane methods on the Faro table, however, he earned that name in his service during the No Man’s Corral War’s inciting incident with the Deadwoods. Favorite set of cards: a black pair of aces and eights.

You go to the saloon to blow off some steam, oh it looks like the Bartender has something to say to everyone…`,
    `Your goal:
Collect your pair of aces and eights by any means necessary.

A Lil’ Silly With It: Mix a little business with pleasure, have a stab at some cards tonight, rack up some stacks, the next town over has a casino. It’d be nice to have a pool to start with, maybe $$$2000?

Get a ticket out of town as soon as you can.

Secret:
You had an altercation with Ambitious earlier tonight.

Clue: You killed your parents to deliver the deed to Little Groveland to Ambitious.`,
    `The Fever: Make any failed card Games related challenge, a success. 3 uses.$$$50.

Not so fast!: An ability played by another player has no effect! However, it still costs a use and they cannot use that ability on you again. Cannot be used to cancel out another Not so fast!. May be used to cancel a pickpocket. $$$100.

Good Judge of Character: Another player must reveal their secret to you. $$$150.`
  ),
  reporter: createCharacterDetails(
    "CC",
    "Milly Stryfeson",
    "Journalist",
    `Blend of innocent airheadness, but can be deceptively perceptive. Bubbly and optimistic coming from a family of 10 siblings (3 older brothers, 3 older sisters,1 younger brother and a newborn set of twins: a baby boy and girl). Loves writing to and talking about her family, referencing teachings from her parents, siblings, and cousins and her aunts and her uncles and her grand-parents and her … she continues without pause.
“Oh I almost forgot my sister is coming into town, it must have slipped my mind! I should wait for her at our favorite tavern.”
Went to Ambitious for an interview/interrogation.`,
    `Your goal:
Find the location of the Groveland deed.

Write to your family, soon as you can.

Figure out what ails Spikie

Secret: You found Ambitious’ body earlier and while investigating it, heard a noise, panicked and left out the window.`,
    `Good Judge of Character: Another has to reveal their secret to you. $$$50

Flannelmouthing: If another player plays an ability on you that forces you to reveal your secret or clue, you instead talk about your day. Their effort has no effect-give nothing up and their attempt fails. They still have to check off their use of ability. 3 uses.

Not so fast!: An ability played by another player has no effect! However, it still costs a use and they cannot use that ability on you again. Cannot be used to cancel out another Not so fast!. May be used to cancel a pickpocket. $$$100.`
  ),
  archaeologist: createCharacterDetails(
    "Extra",
    "Heinz Heinrich",
    null,
    null,
    null,
    null
  ),
  caravaner: createCharacterDetails(
    "Extra",
    "Julius Fondrique",
    "Head Caravaner",
    `You are the owner and leader of the planet’s largest CarryVan. It’s made up of old parts of the fleet from OPUS.
You used to be involved with the Staten project under Reed the Star, and worked to get her specimens for her experiments. Some would call it a human trafficking business, you just call it good business. However, after the No Man’s Corral ended, you gained some new clients. It turns out that some of the inhabitants of the OPUS fleet were more than human and though you ran into them by chance, they have dictated your life since, threatening your life if you don’t bring them meat. You got in contact with your old friend from the Plainsmen, Ambitious, the new mayor of Univ Valley, who was gracious enough to lend help in building your CarryVan. It works as good business to get people across to different settlements, but for those stragglers who fail to pay the travelers fee, there awaits a less than pretty fate. Better them than you.
You traveled ahead of the CarryVan tonight to gain approval for passage from Ambitious as you do yearly.
You go to the saloon to meet with him, but he has apparently refused to show as you see his assistant in his stead. He says Ambitious will be available after his speech. Though he seemed visibly strained, you ignored it to go back to drinking. Though, you have bigger fish to fry. It seems your old friends, as if you could call them that, are in town. The vampyres are a little ahead of schedule and already here. Stress`,
    `Your goal:
This is your chance to get out of your blood-sucking agreement. If anyone is to be charged, you should aim to place the blame on the vampyres.
Expose them without letting them on to your intentions.

The Caravan Funds:
You want to get at least $$$20,000 for your CarryVan, plus why not a little extra? Otherwise, if the vampyres are to escape they will surely catch up with you.

Secret: You are running a human meat market.

Clue: Ambitious helped you build your CarryVan with his bare hands.`,
    `Pickpocket:
Tell the Bartender which item you want to take from another player. If that player does not have what you seek, the Bartender will take something else at random. $$$50.

Let’s share what we know: After talking to another player, show them your clue. They must then show you their clue. $$$50.

Thorough appraisal: After speaking to another player, they must show you all their item cards and money. (You can’t take their items or money-just look at them.) $$$50.`
  ),
  tippler: createCharacterDetails(
    "Extra",
    "Alex Resnick",
    "Drunkard",
    null,
    `Your goal: Figure out what the hell is going on`,
    null
  ),
  drunkard: createCharacterDetails(
    "Jen",
    "Countess Mabee D. King II",
    "“Drunkard” / Leader of Old Blood Order",
    `Pragmatic
Intellectually Driven
Morally ambiguous
Leader of the “Old Blood Order” church seeking revenge for her mother.

After coming in contact with an angel your mother had a vision that inspired her to live a biocentrist lifestyle, striving for humanity to completely detach from mortal pleasures and their reliance on technology. Believing that the best way forward for humanity is to return to nature’s grains.
Your mother’s faith does not escape you, nor your followers. You were raised to despise the old ways of the people who traveled beyond the stars that still litter the lands your people have liberated. It was humanity's destiny to leave their bodies and join the infinite sea of dust amongst this planet such as the fauna do.`,
    `Your goal:
Receive the deed to Groveland.

Secure Dr. Madie Stark, so she may fulfill your end of the bargain…

Secret: You run the “Old Blood Order”.

Clue: A relative close to you had their life taken by Ambitious.`,
    `Cultish Fever: You’ve got a way with words, a character must reveal their clue and consider joining your community. $$$50.

Tithe:
Tell the Bartender which item you want to pickpocket from a prospective or promised follower. If that follower does not have what you seek. The Bartender will take something else at random. 3 uses.

Not so fast!: An ability played by another player has no effect! However, it still costs a use and they cannot use that ability on you again. Cannot be used to cancel out another Not so fast!. May be used to cancel a pickpocket. $$$100.`
  ),
  saloon_singer: createCharacterDetails(
    "Braydon",
    "Brilliant Brian Burpe",
    `“Saloon Musician” / Old Blood Order member
Clothing: Double-breasted suit with a dress shirt underneath.
Performance attire`,
    `Left with a little amnesia of your past life, you have become a part of the Old Blood Order. You’ve been told you were a brave and compassionate soldier in the No Man’s Corral War but your memory fails you.
Your faith has arrived in town and tasked you with infiltration under the guise of a traveling musician, one such dream you had as a child. But, as you set up in the town’s saloon a voice rings out in your head trying to tell you something is wrong. Just another hallucination, you decide, they’ve been growing in number recently.
Will you complete your holy mission, or will you first fall prey to your delusions?
“How will they kill the man who never sleeps?”`,
    `Your goal:
    The Deed:   
Retrieve the deed to Lil Groveland.

Equivalent Exchange: 
Secure and get Dr. Maddie Stark out of town to hold up the Old Blood Order’s end of the bargain.

Familiar Faces:
It seems when some folk see your face, they tend to stare in familiarity. See if they can help jog your memory of your past life.

Secret: You know Ambitious worked with a “Reed the Star” in the past. Your tormentor, the one who relentlessly experimented on you when you tried to defect the Plainsmen… 

Clue: Maddie Stark has been watching you far too closely, as if she knows something you could never remember.`,
    `I Had Worse In The War: Use this after another player has defeated you in combat. The wound has no effect: you are not injured and can now take an action. Does not work against poison. 3 uses.

Have some copper for exchange: Another has to reveal their clue to you. $$$50.

Intimidate: Speak in an intimidating manner to another character. They must then reveal their secret to you. 2 uses.`
  ),
  farrier: createCharacterDetails(
    "Extra",
    "Shining Jessie Games",
    `Farrier / Old Blood Order member
Clothes:
Bandana, waistcoat, high waisted trousers, boots.`,
    `You were once a brave prison guard for the Plainsmen, but now serve the Old Blood Order faith.
You are a calm , collected and stern individual, reasons why your prophet Mabee II believes you are perfect for this infiltration mission. You operate under the guise as a ferrier, a specialist in equine hoof care. But your true mission goes: “Find the deed, get out of town.” Now get to work, soldier.`,
    `Your goal: You know Ambitious hid the deed in the saloon somewhere. For the good of the world, it may prove best to find and secure the document before it is pawned off to less than worthy hands.

Secret: You are a part of the Old Blood Order.

Clue: Ambitious was not carrying the deed to Little Groveland when he died.`,
    `Copper for your time: Another has to reveal their clue to you. $$$50

Sharpshooting: When you shoot someone, you hit if you win or tie at rock-paper-scissors, rather than just when you win as normal. $$$50.

Pickpocket:
Your many years alive have given you much time to learn the trick of swindling. Tell the Bartender which item you want to take from another player. If that player does not have what you seek, the Bartender will take something else at random. $$$50.`
  ),
  teacher: createCharacterDetails(
    "Extra",
    "Spruce Louis",
    null,
    null,
    null,
    null
  ),
  trade_town_surgeon: createCharacterDetails(
    "Extra",
    "Ooo Oasis",
    null,
    null,
    null,
    null
  ),
  sister: createCharacterDetails(
    "Extra",
    "Meryl Stryfeson",
    null,
    null,
    null,
    null
  )
};

document.addEventListener("alpine:init", () => {
  Alpine.store("auth", createAuthStore());
  Alpine.data("characterSelector", characterSelector);
  Alpine.data("charactersDisplay", charactersDisplay);
  Alpine.data("loggedInCharacterDetails", loggedInCharacterDetails);
});

function createAuthStore(){
  return{
    character: null,
    characters: CHARACTERS,
    characterDetails: CHARACTERS_DETAILED,
    showLogoutConfirm: false,

    init() {
      const storedCharacter = localStorage.getItem("loggedInCharacter");
      this.showLogoutConfirm = false;
      if(storedCharacter) {
        this.character = JSON.parse(storedCharacter);
      }
    },

    get loggedIn() {
      return !!this.character;
    },

    get detailedCharacter() {
      if (!this.character) {
        return null;
      }

      return this.characterDetails[this.character.id] || null;
    },

     attemptLogin(characterId, password) {
      if (!characterId || !password) {
        alert("Please select a character and enter a password.");
        return;
      }

      const character = this.characters[characterId];

      if (!character || character.password !== password) {
        alert("Access denied. Incorrect password.");
        return;
      }

      this.character = character;
      localStorage.setItem("loggedInCharacter", JSON.stringify(character));
      alert(`Login successful! Welcome, ${character.name}.`);
    },

    requestLogout() {
      this.showLogoutConfirm = true;
    },

    cancelLogout() {
      this.showLogoutConfirm = false;
    },

    logout() {
      this.showLogoutConfirm = false;
      localStorage.removeItem("loggedInCharacter");
      this.character = null;
      alert("Another life lost on Planet Sinker. Better luck next time.");
      window.location.href = "index.html";
    }
  }
}

function characterSelector() {
  return {
    characters: Object.values(CHARACTERS),
    selectedCharacterId: "",
    selectedCharacterPassword: "",

    get selectedCharacter() {
      return CHARACTERS[this.selectedCharacterId] || null;
    },

    init() {
      const stored = localStorage.getItem("loggedInCharacter");

      if (stored) {
        const character = JSON.parse(stored);
        this.selectedCharacterId = character.id;
      }
    },

    loginOnClick() {
      this.$store.auth.attemptLogin(
        this.selectedCharacterId,
        this.selectedCharacterPassword
      );
    },
  };
}

function loggedInCharacterDetails() {
  return {
    sections: {
      occupation: false,
      character: false,
      goals: false,
      abilities: false
    },

    get character() {
      return this.$store.auth.character;
    },

    get detailedCharacter() {
      return this.$store.auth.detailedCharacter;
    },

    toggleSection(section) {
      this.sections[section] = !this.sections[section];
    },

    formatText(text) {
      if (!text) {
        return "No information available.";
      }

      return this.escapeHtml(text).replace(/\n/g, "<br>");
    },

    createListItems(text) {
      if (!text) {
        return [];
      }

      return text
        .split(/\n\s*\n/)
        .map((item) => item.trim())
        .filter(Boolean);
    },

    escapeHtml(text) {
      return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
    }
  };
}

function databaseAccess() {
  const storageKey = "databaseAccessState";

  return {
    portals: DATABASE_PORTALS.map((portal) => ({
      ...portal,
      value: "",
      unlocked: false,
      hasError: false
    })),

    init() {
      const storedState = localStorage.getItem(storageKey);

      if (!storedState) {
        return;
      }

      try {
        const portalState = JSON.parse(storedState);

        this.portals = this.portals.map((portal) => ({
          ...portal,
          unlocked: !!portalState[portal.id],
          hasError: false
        }));
      } catch (error) {
        localStorage.removeItem(storageKey);
      }
    },

    saveState() {
      const portalState = Object.fromEntries(
        this.portals.map((portal) => [portal.id, portal.unlocked])
      );

      localStorage.setItem(storageKey, JSON.stringify(portalState));
    },

    submitPortal(portal) {
      if (portal.unlocked) {
        window.location.href = portal.href;
        return;
      }

      if (portal.value === portal.password) {
        portal.unlocked = true;
        portal.hasError = false;
        portal.value = "";
        this.saveState();
        return;
      }

      portal.hasError = true;
    }
  };
}


// Characters display for the characters page
function charactersDisplay() {
  const characters = Object.values(CHARACTERS);
  const factionNames = [...new Set(characters.map((character) => character.faction))];
  const factions = factionNames.map((factionName) => ({
    id: factionName.toLowerCase().replaceAll(" ", "-"),
    name: factionName,
    characters: characters.filter((character) => character.faction === factionName)
  }));

  return {
    factions,
    openFactions: Object.fromEntries(factions.map((faction) => [faction.id, false])),

    toggleFaction(factionId) {
      this.openFactions[factionId] = !this.openFactions[factionId];
    }
  };
}
