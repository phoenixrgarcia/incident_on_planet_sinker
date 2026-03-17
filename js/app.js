const Alpine = require("alpinejs");
const { store } = require("alpinejs");

const CHARACTERS = {
    captain: {
        name: "Captain Vex Donovan",
        id: "captain",
        player: "Nate Johnson",
        blurb:
          "A seasoned captain with decades of space exploration. Known for tactical brilliance and ruthless pragmatism. The Void Wanderer is everything to her—would she kill to protect it?",
        password: "123a",
      },
      engineer: {
        name: 'Chief Engineer Kess "Wrench" Morgan',
        id: "engineer",
        player: "Noah Owens",
        blurb:
          "Grease-stained genius of the engines. Brilliant but volatile, with a short fuse and a list of grievances. What secrets die with the victim in your sector?",
        password: "456b",
      },
      medic: {
        name: "Dr. Atlas Kane",
        id: "medic",
        player: "Phoenix Garcia",
        blurb:
          "Brilliant physician with access to every poison known to the void. Troubled past, troubled present. What was their connection to the deceased?",
        password: "789c",
      },
}

document.addEventListener("alpine:init", () => {
  Alpine.store("auth", createAuthStore());
  Alpine.data("characterSelector", characterSelector);
  Alpine.data("charactersDisplay", charactersDisplay);
});

function createAuthStore(){
  return{
    character: null,
    characters: CHARACTERS,

    init() {
      const storedCharacter = localStorage.getItem("loggedInCharacter");
      if(storedCharacter) {
        this.character = JSON.parse(storedCharacter);
      }
    },
    

    get loggedIn() {
      return !!this.character;
    },

    attemptLogin(characterId, password) {
      if(!characterId || !password) {
        alert("Please select a character and enter a password.");
        return;
      }

      if(this.characters[characterId] && this.characters[characterId].password != password) {
        alert("Access denied. Incorrect password.");
      }

      if(this.characters[characterId] && this.characters[characterId].password === password) {
        this.character = this.characters[characterId];
        localStorage.setItem("loggedInCharacter", JSON.stringify(this.character));
        alert(`Login successful! Welcome, ${this.character.name}.`);
      }
    },

    logout() {
      localStorage.removeItem("loggedInCharacter");
      this.character = null;
      alert("Another life lost on Planet Sinker. Better luck next time.");
      window.location.href = "index.html";
    }
  }
}

// Character data for the selection dropdown
function characterSelector() {
  return {
    selectedCharacterId: "",
    selectedCharacter: null,
    selectedCharacterPassword: "",

    characters: CHARACTERS,

    init() {
      const stored = localStorage.getItem("loggedInCharacter");

      if (stored) {
        this.selectedCharacterId = this.selectedCharacter.id;
      }
    },

    selectCharacter(){
      if(this.selectedCharacterId) {
        this.selectedCharacter = this.characters[this.selectedCharacterId];
      } else {
        this.selectedCharacter = null;
      }
    },

    loginOnClick() {
      if (!this.selectedCharacter || !this.selectedCharacterPassword) {
        alert("Please select a character and enter a password.");
        return;
      }

      this.$store.auth.attemptLogin(this.selectedCharacterId, this.selectedCharacterPassword);
      
    },
  };
}

// Characters display for the characters page
function charactersDisplay() {
  return {
    characters: CHARACTERS
  };
}

// Add any additional global functionality here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Murder in the Void - Initialization Complete");
});

