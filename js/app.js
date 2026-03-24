const CHARACTERS = {
  bartender: {
    name: "Nicks",
    id: "bartender",
    player: "Noah",
    blurb: "Local bartender",
    password: "n101",
    faction: "Locals",
    image: "default.png"
  },
  dentist: {
    name: "Dr. Casanova Holliday",
    id: "dentist",
    player: "Nate R.",
    blurb: "Gambling town dentist",
    password: "n201",
    faction: "Locals",
    image: "default.png"
  },
  musician: {
    name: "Hornvalley the Freak",
    id: "musician",
    player: "Nate J.",
    blurb: "Young instrumentalist",
    password: "n301",
    faction: "Locals",
    image: "default.png"
  },
  blacksmith: {
    name: "Buffalo Grass",
    id: "blacksmith",
    player: "Carter",
    blurb: "Local blacksmith",
    password: "c101",
    faction: "Locals",
    image: "default.png"
  },
  sheriff: {
    name: "Annie Brokley",
    id: "sheriff",
    player: "Lizzy",
    blurb: "Reliable town sheriff",
    password: "l101",
    faction: "Locals",
    image: "default.png"
  },
  deputy: {
    name: "Fals Ruth",
    id: "deputy",
    player: "Chase",
    blurb: "Notorious Bounty Hunter turned Deputy",
    password: "c201",
    faction: "Locals",
    image: "default.png"
  },
  undertaker: {
    name: "Vicente Duela",
    id: "undertaker",
    player: "Jesus",
    blurb: "Reclusive Undertaker",
    password: "j101",
    faction: "Locals",
    image: "default.png"
  },
  mercenary: {
    name: "LeRoy Cassidy",
    id: "mercenary",
    player: "Brody",
    blurb: "Hand for hire",
    password: "b101",
    faction: "Locals",
    image: "default.png"
  },
  doctor: {
    name: "Dr. Maddie Starr",
    id: "doctor",
    player: "Nainika",
    blurb: "Trusted Town Doctor",
    password: "n401",
    faction: "Locals",
    image: "default.png"
  },
  saloon_hand: {
    name: "Lillian Bell",
    id: "saloon_hand",
    player: "Ava",
    blurb: "Local saloon hand",
    password: "a101",
    faction: "Locals",
    image: "default.png"
  },
  assistant: {
    name: "Willy the Child",
    id: "assistant",
    player: "Jade",
    blurb: "Young mayor's assistant",
    password: "j201",
    faction: "Locals",
    image: "default.png"
  },
  businessman: {
    name: "Ted Bannett",
    id: "businessman",
    player: "EXTRA",
    blurb: "Owner of Mattress Firm",
    password: "t101",
    faction: "Locals",
    image: "default.png"
  },
  drunkard: {
    name: "Blues McGee",
    id: "drunkard",
    player: "EXTRA",
    blurb: "Drunkard from Albath",
    password: "b201",
    faction: "Locals",
    image: "default.png"
  },
  space_cowboy: {
    name: "Jet",
    id: "space_cowboy",
    player: "EXTRA",
    blurb: "Retired Cowboy",
    password: "j301",
    faction: "Locals",
    image: "default.png"
  },
  farmer: {
    name: "Lake Strawberry",
    id: "farmer",
    player: "EXTRA",
    blurb: "Blueberry Farmer",
    password: "l201",
    faction: "Locals",
    image: "default.png"
  },
  journalist: {
    name: "Spikie Rickett",
    id: "journalist",
    player: "CJ",
    blurb: "Amnesiac Journalist?",
    password: "c301",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  saleswoman: {
    name: "Lucille Canott",
    id: "saleswoman",
    player: "Sam",
    blurb: "Ever young snake-oil saleswoman",
    password: "s101",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  salesman: {
    name: "Simón de Cuca",
    id: "salesman",
    player: "Phoenix",
    blurb: "Ever young snake-oil salesman",
    password: "p101",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  demolitionist: {
    name: "Kalamity Bane",
    id: "demolitionist",
    player: "Kayla",
    blurb: "Ne'er-do-well demolitionist drifter",
    password: "k101",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  cowboy: {
    name: "Cyvil Hitchcock",
    id: "cowboy",
    player: "Matt",
    blurb: "Scruffy notorious cowboy",
    password: "m101",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  reporter: {
    name: "Milly Stryefson",
    id: "reporter",
    player: "CC",
    blurb: "Young investigative journalist",
    password: "c401",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  archaeologist: {
    name: "Heinz Heinrich",
    id: "archaeologist",
    player: "EXTRA",
    blurb: "Archaeologist",
    password: "h101",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  Caravaner: {
    name: "Julius Fondrique",
    id: "Caravaner",
    player: "EXTRA",
    blurb: "Head Caravaner",
    password: "j401",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  tippler: {
    name: "Alex Resnick",
    id: "tippler",
    player: "EXTRA",
    blurb: "Drunkard from Alibaster",
    password: "a201",
    faction: "Out-of-Towners",
    image: "default.png"
  },
  prophet: {
    name: "Mabee D. King",
    id: "prophet",
    player: "Jen",
    blurb: "Religious Prophet, de facto leader of New Bloom Unity",
    password: "j501",
    faction: "New Bloom Unity",
    image: "default.png"
  },
  choir_boy: {
    name: "Brilliant Brian Burpe",
    id: "choir_boy",
    player: "Braydon",
    blurb: "Tattered religious instrumentalist",
    password: "b301",
    faction: "New Bloom Unity",
    image: "default.png"
  },
  farrier: {
    name: "Shining Jessie Games",
    id: "farrier",
    player: "EXTRA",
    blurb: "Religious traveling Farrier",
    password: "s201",
    faction: "New Bloom Unity",
    image: "default.png"
  },
  teacher: {
    name: "Opulent Spruce Louis",
    id: "teacher",
    player: "EXTRA",
    blurb: "Religious Schoolteacher",
    password: "o101",
    faction: "New Bloom Unity",
    image: "default.png"
  },
  ranger: {
    name: "Sparkling Ooo Oasis",
    id: "ranger",
    player: "EXTRA",
    blurb: "Religious Ranger",
    password: "o201",
    faction: "New Bloom Unity",
    image: "default.png"
  }
};

document.addEventListener("alpine:init", () => {
  Alpine.store("auth", createAuthStore());
  Alpine.data("characterSelector", characterSelector);
  Alpine.data("charactersDisplay", charactersDisplay);
});

function createAuthStore(){
  return{
    character: null,
    characters: CHARACTERS,
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
