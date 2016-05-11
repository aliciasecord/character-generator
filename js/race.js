/* Random gender assignment */
var Gender = function () {
    var x = Math.floor(Math.random() * 2);
    switch (x) { 
        case (0): return "Female";
        case (1): return "Male";
        }
};
PCGender = Gender();

function race(languages, optLang, size, age, speed, mheight, mweight, mNames, fheight, fweight, fNames, traits, weapons, a, b, c, d, e, f) {
    this.size = size;
    this.speed = speed;
    this.traits = traits;
    this.languages = languages;
    this.optLanguages = function () {
        var lang = [];
        for (var i = optLang.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = optLang[i];
            optLang[i] = optLang[j];
            optLang[j] = temp;
        }        
        if (modint > 0) {
      		for (var x = 0; x < modint; x++) {
                lang.push(optLang[x]);
        	}
        	return lang;
        }
        else {
            return lang;
        }
        };
    this.knownLanguages = function () {
        return ("Common" + this.languages + ", " + this.optLanguages());
    };
    this.HW = function (){
        return Roll(a, b);
    };
    this.fheight = fheight;
    this.fweight = fweight;
    this.weight = function () {
        switch (PCGender) {
            case ("Female"):
                return fweight + this.HW() + "lbs";
            case ("Male"):
                return mweight + this.HW() + "lbs";
            }
        };
    this.height = function () {
        switch (PCGender) {
            case ("Female"):
                var fh = fheight + this.HW();
                return parseInt(fh/12) + "ft " + (fh % 12) + "in";
            case ("Male"):
                var mh = mheight + this.HW();
                return parseInt(mh/12) + "ft " + (mh % 12) + "in";
            }     
        };
    this.name = function() {
        switch (PCGender) {
            case ("Male"):
                return mNames[Math.floor(Math.random() * mNames.length)];
            case ("Female"):
                return fNames[Math.floor(Math.random() * fNames.length)];
            }
        };
    this.Age = function () {
      	var x = Roll(c, d);
      	var y = Roll(6, e);
      	var z = Roll(6, f);
        if (PCClass == "Barbarian" || PCClass == "Rogue" || PCClass == "Sorcerer") {
            return age + x;
        	}
        else if (PCClass == "Bard" || PCClass == "Fighter" || PCClass == "Paladin" || PCClass == "Ranger") {
            return age + y;
            }
        else {
            return age + z;
        	} 
        };
    }

/*Dwarf object for characteristics*/
var Dwarf = new race(
    /* language */ ", Dwarven", 
    /* optLang */ ["Giant", 'Troll'], 
    /* size */ "Med", 
    /* age */ 24, 
    /* speed */ 20, 
    /* mheight */ 45, 
    /* mweight */ 150, 
    /* mnames */ ['Dolgrin', 'Runyar', 'Harsk', 'Kazmuk', 'Morgym', 'Rogar'], 
    /* fheight */ 43, 
    /* fweight */ 120, 
    /* fnames */ ['Agna', 'Bodill', 'Ingra', 'Kotri', 'Rusilka', 'Yangrit'], 
    /* traits */ 
        ["Darkvision: See in the dark up to 60 feet",
        "Defensive Training: +4 dodge bonus to AC against giant subtype", 
        "Greed: +2 racial bonus on Appraise skill checks on nonmagical goods that contain precious metals or gemstones",
        "Hatred: +1 bonus on attack rolls against orc and goblinoid subtypes",
        "Hardy: +2 bonus on saving throws against poison, spells, and spell-like abilities",
        "Stability: +4 bonus to CMD against bull rush or trip while standing on the ground",
        "Stonecunning: +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors, they receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking."
        ],
    /* weapons */ "Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word dwarven in its name as a martial weapon.",
    /* a */ 4, 
    /* b */ 2, 
    /* c */ 6, 
    /* d */ 2, 
    /* e */ 3, 
    /* f */ 4
    );

/* Elf object for characteristics */
var Elf = new race(
    /* language */ ", Elven", 
    /* optLang */ ["Celestial", "Draconic", 'Gnoll', 'Gnome', 'Goblin', 'Orc', 'Sylvan'], 
    /* size */ "Med", 
    /* age */ 110,
    /* speed */ 30, 
    /* mheight */ 64, 
    /* mweight */ 100, 
    /* mnames */ ['Caladrel', 'Heldalel', 'Lanliss', 'Meirdrarel', 'Seldlon', 'Talathel', 'Variel', 'Zordlon'], 
    /* fheight */ 64, 
    /* fweight */ 100, 
    /* fnames */ ['Amrunelara', 'Dardlara', 'Farnra', 'Jathal', 'Merisiel', 'Oparal', 'Soumral', 'Tessara', 'Yalandlara'], 
    /* traits */ 
        ["Elven Immunities: Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
        "Low-Light Vision: Elves can see twice as far as humans in conditions of dim light.",
        "Elven Magic: Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.",
        "Keen Senses: Elves receive a +2 racial bonus on Perception skill checks."
        ], 
    /* weapons */ "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word 'elven' in its name as a martial weapon.",
    /* a */ 6, 
    /* b */ 2, 
    /* c */ 6, 
    /* d */ 4, 
    /* e */ 6, 
    /* f */ 10
    );

/* Gnome object for characteristics */
var Gnome = new race(
    /* language */ ", Gnome, Sylvan", 
    /* optLang */ ["Draconic", 'Dwarven', 'Elven', 'Giant', 'Goblin', 'Orc'], 
    /* size */ "Small", 
    /* age */ 40, 
    /* speed */ 20, 
    /* mheight */ 36, 
    /* mweight */ 35, 
    /* mnames */ ['Abroshtor', 'Bastargre', 'Halungalom', 'Krolmnite', 'Poshment', 'Zarzuket', 'Zatqualmie'], 
    /* fheight */ 34, 
    /* fweight */ 30, 
    /* fnames */ ['Besh', 'Fijit', 'Lini', 'Neji', 'Majet', 'Pai', 'Queck', 'Trig'], 
    /* traits */ 
        ["Defensive Training: Gnomes get a +4 dodge bonus to AC against monsters of the giant type.",
        "Low-Light Vision: Gnomes can see twice as far as humans in conditions of dim light.",
        "Gnome Magic: Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.",
        "Hatred: Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes.",
        "Illusion Resistance: Gnomes get a +2 racial saving throw bonus against illusion spells or effects.",
        "Keen Senses: Gnomes receive a +2 racial bonus on Perception skill checks.",
        "Obsessive: Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice."
        ], 
    /* weapons */ "Gnomes treat any weapon with the word 'gnome' in its name as a martial weapon.",
    /* a */ 4, 
    /* b */ 2, 
    /* c */ 6, 
    /* d */ 4, 
    /* e */ 6, 
    /* f */ 9
    );

/* Half-Elf object for characteristics */
var HalfElf = new race(
    /* language */ ", Elven", 
    /* optLang */ ["Gnome", 'Orc', 'Terran', 'Undercommon', "Draconic", 'Dwarven', 'Sylvan', 'Giant', 'Goblin', 'Orc', "Celestial", 'Abyssal', 'Gnoll'], 
    /* size */ "Med", 
    /* age */ 20, 
    /* speed */ 30, 
    /* mheight */ 62, 
    /* mweight */ 110, 
    /* mnames */ ['Calathes', 'Encinal', 'Kyras', 'Narciso', 'Quiray', 'Satinder', 'Seltyiel', 'Zirul'], 
    /* fheight */ 60, 
    /* fweight */ 90, 
    /* fnames */ ['Cathran', 'Elsbeth', 'Iandoli', 'Kieyanna', 'Lialda', 'Maddela', 'Reda', 'Tamarie'], 
    /* traits */ [
        "Adaptability: Half-elves receive Skill Focus as a bonus feat at 1st level.",
        "Low-Light Vision: Half-elves can see twice as far as humans in conditions of dim light.",
        "Elf Blood: Half-elves count as both elves and humans for any effect related to race.",
        "Elven Immunities: Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
        "Keen Senses: Half-elves receive a +2 racial bonus on Perception skill checks.",
        "Multitalented: Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes."
    ],
    /* weapons */ "No racial weapons",
    /* a */ 8, 
    /* b */ 2, 
    /* c */ 6, 
    /* d */ 1, 
    /* e */ 2, 
    /* f */ 3
    );

/* Half-Orc object for characteristics */
var HalfOrc = new race(
    /* language */ ", Orc", 
    /* optLang */ ['Abyssal', "Draconic", 'Giant', 'Gnoll', 'Goblin'], 
    /* size */ "Med", 
    /* age */ 14, 
    /* speed */ 30, 
    /* mheight */ 58, 
    /* mweight */ 150, 
    /* mnames */ ['Ausk', 'Davor', 'Hakak', 'Kizziar', 'Makoa', 'Nesteruk', 'Tsadok'], 
    /* fheight */ 53, 
    /* fweight */ 110, 
    /* fnames */ ['Canan', 'Drogheda', 'Goruza', 'Mazon', 'Shirish', 'Tevaga', 'Zelika'], 
    /* traits */ 
        ["Intimidating: Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.",
        "Darkvision: Half-orcs can see in the dark up to 60 feet.",
        "Orc Blood: Half-orcs count as both humans and orcs for any effect related to race.",
        "Orc Ferocity: Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying."
        ],
    /*weapons */ "Half-orcs are proficient with greataxes and falchions and treat any weapon with the word 'orc' in its name as a martial weapon.",
    /* a */ 12, 
    /* b */ 2, 
    /* c */ 4, 
    /* d */ 1, 
    /* e */ 1, 
    /* f */ 2
    );

/* Halfling object for characteristics */
var Halfling = new race(
    /* language */ ", Halfling", 
    /* optLang */ ['Dwarven', "Elven", 'Gnome', 'Goblin'], 
    /* size */ "Small", 
    /* age */ 20, 
    /* speed */ 20, 
    /* mheight */ 32, 
    /* mweight */ 30, 
    /* mnames */ ['Antal', 'Boram', 'Evan', 'Jamir', 'Kaleb', 'Lem', 'Miro', 'Sumak'], 
    /* fheight */ 30, 
    /* fweight */ 25, 
    /* fnames */ ['Anafa', 'Bellis', 'Etune', 'Filiu', 'Lissa', 'Marra', 'Rillka', 'Sistra', 'Yamyra'], 
    /* traits */ 
        ["Fearless: Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.",
        "Halfling Luck: Halflings receive a +1 racial bonus on all saving throws.",
        "Keen Senses: Halflings receive a +2 racial bonus on Perception skill checks.",
        "Sure-Footed: Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks."
        ],
    /* weapons */ "Halflings are proficient with slings and treat any weapon with the word 'halfling' in its name as a martial weapon.",
    /* a */ 4, 
    /* b */ 2, 
    /* c */ 6, 
    /* d */ 2, 
    /* e */ 3, 
    /* f */ 4
    );

/* Human object for characteristics */
var Human = new race (
    /* language */ "", 
    /* optLang */ ["Giant", "Gnome", 'Orc', 'Terran', 'Undercommon', "Draconic", 'Dwarven', 'Sylvan', 'Goblin', 'Orc', "Celestial", 'Abyssal', 'Gnoll'], 
    /* size */ "Med", 
    /* age */ 15, 
    /* speed */ 30, 
    /* mheight */ 58, 
    /* mweight */ 120, 
    /* mnames */ ['Michael', 'Jacob', 'Matthew', 'Nicholas', 'Christopher', 'Joseph', 'Zachary', 'Joshua', 'Andrew', 'William', 'Daniel', 'Christian', 'Tyler', 'Ryan', 'Anthony', 'Alexander', 'Jonathan', 'David', 'Dylan', 'James', 'John', 'Justin', 'Benjamin', 'Brandon', 'Austin', 'Cameron', 'Samuel', 'Nathan', 'Noah', 'Brian', 'Jose', 'Ethan', 'Robert', 'Hunter', 'Devin', 'Steven', 'Eric', 'Kevin','Caleb', 'Sean', 'Kyle', 'Jason', 'Jordan', 'Aaron', 'Thomas', 'Logan', 'Connor', 'Gabriel', 'Jared', 'Isaiah', 'Jack', 'Cody', 'Mason', 'Juan', 'Colin', 'Luis', 'Adam', 'Evan', 'Marcus', 'Seth', 'Mark', 'Isaac', 'Luke', 'Garrett', 'Charles', 'Jesse', 'Xavier', 'Richard', 'Nathaniel', 'Chase', 'Patrick', 'Cole', 'Carlos', 'Angel', 'Blake', 'Dominic', 'Lucas', 'Derek', 'Dakota', 'Jackson', 'Trevor', 'Alex', 'Maxwell', 'Spencer', 'Victor', 'Timothy', 'Shane', 'Bryce', 'Carson', 'Dalton', 'Ian', 'Elijah', 'Tristan', 'Paul', 'Gavin', 'Brendan', 'Jesus', 'Colton', 'Aidan', 'Antonio'], 
    /* fheight */ 53, 
    /* fweight */ 85, 
    /* fnames */ ['Hannah', 'Emily', 'Sarah', 'Madison', 'Brianna', 'Kaylee', 'Kaitlyn', 'Hailey', 'Alexis', 'Elizabeth', 'Taylor', 'Lauren', 'Ashley', 'Katherine', 'Jessica', 'Anna', 'Samantha', 'Makayla', 'Kayla', 'Madeline', 'Jasmine', 'Alyssa', 'Abigail', 'Olivia', 'Brittany', 'Nicole', 'Destiny', 'Mackenzie', 'Emma', 'Jennifer', 'Rachel', 'Sydney', 'Megan', 'Grace', 'Alexandra', 'Morgan', 'Savannah', 'Victoria', 'Sophia', 'Natalie', 'Amanda', 'Stephanie', 'Chloe', 'Allison', 'Rebecca', 'Jacqueline', 'Julia', 'Cheyenne', 'Amber', 'Erica', 'Isabella', 'Kylie', 'Christina', 'Brooke', 'Bailey', 'Maria', 'Diana', 'Danielle', 'Kelsey', 'Jordan', 'Andrea', 'Vanessa', 'Melissa', 'Kimberly', 'Sierra', 'Maya', 'Michelle', 'Caroline', 'Arianna', 'Zoe', 'Leslie', 'Isabel', 'Gabrielle', 'Faith', 'Lindsey', 'Erin', 'Kiara', 'Jenna', 'Casey', 'Paige', 'Mary', 'Alicia', 'Cameron', 'Alexandria', 'Molly', 'Melanie', 'Katie', 'Courtney', 'Trinity', 'Jada', 'Claire', 'Audrey', 'Adriana', 'Mia', 'Margaret', 'Riley', 'Jocelyn', 'Gabriela', 'Sabrina', 'Miranda'], 
    /* traits */ 
        ["Bonus Feat: Humans select one extra feat at 1st level.",
        "Skilled: Humans gain an additional skill rank at first level and one additional rank whenever they gain a level."        
        ],
    /* weapons */ "No racial weapons",
    /* a */ 10, 
    /* b */ 2, 
    /* c */ 4, 
    /* d */ 1, 
    /* e */ 1, 
    /* f */ 2
    );
    
var PCAssignRace = function () {
    switch (PCRace) {
        case ('Dwarf'):
            PCName = Dwarf.name();
            PCLang = Dwarf.knownLanguages();
            PCSize = Dwarf.size;
            PCAge = Dwarf.Age();
            PCHeight = Dwarf.height();
            PCWeight = Dwarf.weight();
            RacialTraits = Dwarf.traits;
            break;
        case ('Elf'):
            PCName = Elf.name();
            PCLang = Elf.knownLanguages();
            PCSize = Elf.size;
            PCAge = Elf.Age();
            PCHeight = Elf.height();
            PCWeight = Elf.weight();
            RacialTraits = Elf.traits;
            break;
        case ('Gnome'):
            PCName = Gnome.name();
            PCLang = Gnome.knownLanguages();
            PCSize = Gnome.size;
            PCAge = Gnome.Age();
            PCHeight = Gnome.height();
            PCWeight = Gnome.weight();
            RacialTraits = Gnome.traits;
            break;
        case ('Half-Elf'):
            PCName = HalfElf.name();
            PCLang = HalfElf.knownLanguages();
            PCSize = HalfElf.size;
            PCAge = HalfElf.Age();
            PCHeight = HalfElf.height();
            PCWeight = HalfElf.weight();
            RacialTraits = HalfElf.traits;
            break;
        case ('Half-Orc'):
            PCName = HalfOrc.name();
            PCLang = HalfOrc.knownLanguages();
            PCSize = HalfOrc.size;
            PCAge = HalfOrc.Age();
            PCHeight = HalfOrc.height();
            PCWeight = HalfOrc.weight();
            RacialTraits = HalfOrc.traits;
            break;
        case ('Halfling'):
            PCName = Halfling.name();
            PCLang = Halfling.knownLanguages();
            PCSize = Halfling.size;
            PCAge = Halfling.Age();
            PCHeight = Halfling.height();
            PCWeight = Halfling.weight();
            RacialTraits = Halfling.traits;
            break;
        case ('Human'):
            PCName = Halfling.name();
            PCLang = Halfling.knownLanguages();
            PCSize = Halfling.size;
            PCAge = Halfling.Age();
            PCHeight = Halfling.height();
            PCWeight = Halfling.weight();
            RacialTraits = Halfling.traits;
            break;
        }
    };
    
PCAssignRace();

if (PCSize == "Small"){var SizeMod = -1;}
else {var SizeMod = 0;}
