var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

class Platform {
  constructor(resources) {
    this.resources = resources;
  }
}

class Level {
  constructor(lvl, peoplelist) {
    this.lvl = lvl;
    this.peoplelist = peoplelist;
  }
}

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  consume(platform, lvl) {
    const amount = 10;
    let percent = 0;

    if (lvl < 3) percent = getRandomInt(1, 80);
    else if (lvl > 3) percent = getRandomInt(1, 50);
    else percent = getRandomInt(0, 20);

    if (percent > 50) {
      platform.resources = platform.resources - 0;
    } else if (percent > 30) {
      platform.resources = platform.resources - 0;
    } else if (percent > 10) {
      platform.resources = platform.resources - 0;
    } else {
      platform.resources = platform.resources - amount;
    }
  }
}

let platform1 = new Platform(100);
let lvl = new Level(1);

let lvls = [];

for (let i = 0; i < 10; i++) {
  let people1 = new People(
    nameList[Math.floor(Math.random() * nameList.length)],
    Math.floor(Math.random() * 100)
  );
  let people2 = new People(
    nameList[Math.floor(Math.random() * nameList.length)],
    Math.floor(Math.random() * 100)
  );
  let lvl = new Level(i, [people1, people2]);

  lvls.push(lvl);
}

lvls.forEach((element) => {
  element.peoplelist[0].consume(platform1, element.lvl);
  element.peoplelist[1].consume(platform1, element.lvl);
  console.log(platform1);
});
