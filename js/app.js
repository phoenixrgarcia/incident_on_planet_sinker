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

    logout() {
      localStorage.removeItem("loggedInCharacter");
      this.character = null;
      alert("Another life lost on Planet Sinker. Better luck next time.");
      window.location.href = "index.html";
    }
  }
}

function characterSelector() {
  return {
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
  return {
    characters: CHARACTERS
  };
}