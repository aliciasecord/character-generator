/* Array for random class selection */
var Classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard'];
var PCClass = Classes[Math.floor(Math.random() * Classes.length)];

function Class (align1, align2, h, skills, skillRanks, BAB, Fort, Ref, Will){
    this.alignment = function () {
        var x = align1[Math.floor(Math.random() * align1.length)];
        var y = align2[Math.floor(Math.random() * align2.length)];
        if (x == "Neutral" && y == "Neutral"){
            return "True Neutral";
        }
        else {
            return x + " " + y;
        }
        };
    this.hp =  function () {
    	var p = PCLevel - 1;
    	return h + Roll(h,p) + (modcon*(p+1));
  	};
  	this.bab = function() {
  	    return BAB[PCLevel];
  	};
  	
  	this.fort = function() {
  	    return Fort[PCLevel] + modcon;    
  	};
  	this.ref = function() {
  	    return Ref[PCLevel] + moddex;
  	};
  	this.will = function() {
  	    return Will[PCLevel] + modwis;    
  	};
  	this.skillRanks = skills + modint;
    }
    
var Barbarian = new Class (
    /* align1 */ ['Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 12,
    /* skills */ ['Acrobatics', 'Climb', 'Intimidate', 'Knowledge (nature)', 'Perception', 'Ride', 'Survival', 'Swim'],
    /* skill ranks */ 4,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Bard = new Class (
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Stealth', 'Use Magic Device'],
    /* skill ranks */ 6,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Cleric = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 10,
    /* skills */ ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)', 'Knowledge (history)', 'Knowledge (nature)', 'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Stealth', 'Use Magic Device'],
    /* skill ranks */ 6,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Ref */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Druid = new Class (
    /*align1*/ ['Neutral'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Climb', 'Craft', 'Fly', 'Handle Animal', 'Heal', 'Knowledge (geography)', 'Knowledge (nature)',  'Perception', 'Profession', 'Ride', 'Spellcraft', 'Survival', 'Swim'],
    /* skill ranks */ 4,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Fighter = new Class (
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 10,
    /* skills */ ['Climb', 'Craft', 'Handle Animal', 'Knowledge (engineering)', 'Knowledge (dungeoneering)',  'Profession', 'Ride', 'Survival', 'Swim'],
    /* skill ranks */ 2,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Monk = new Class (
    /*align1*/ ['Lawful'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Acrobatics', 'Climb', 'Craft', 'Escape Artist', 'Intimidate', 'Knowledge (history)', 'Knowledge (religion)', 'Perception', 'Perform', 'Profession', 'Ride', 'Sense Motive', 'Stealth', 'Swim'],
    /* skill ranks */ 4,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Paladin = new Class (
    /*align1*/ ['Lawful'],
    /* align2 */ ['Good'],
    /* hp */ 10,
    /* skills */ ['Craft', 'Diplomacy', 'Handle Animal', 'Heal', 'Knowledge (nobility)', 'Knowledge (religion)', 'Profession', 'Ride', 'Sense Motive', 'Spellcraft'],
    /* skill ranks */ 2,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Ranger = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 10,
    /* skills */ ['Climb', 'Craft', 'Handle Animal', 'Heal', 'Intimidate', 'Knowledge (dungeoneering)', 'Knowledge (geography)', 'Knowledge (nature)', 'Perception', 'Profession', 'Ride', 'Spellcraft', 'Stealth', 'Survival', 'Swim'],
    /* skill ranks */ 6,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Rogue = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge (dungeoneering)', 'Knowledge (local)', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Stealth', 'Swim', 'Use Magic Device'],
    /* skill ranks */ 8,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Sorcerer = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 6,
    /* skills */ ['Appraise', 'Bluff', 'Craft', 'Fly', 'Intimidate', 'Knowledge (arcana)', 'Profession', 'Spellcraft', 'Use Magic Device'],
    /* skill ranks */ 2,
    /* BAB */ [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
    /* Fort */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );
    
var Wizard = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 6,
    /* skills */ ['Appraise', 'Craft', 'Fly', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)', 'Knowledge (history)', 'Knowledge (nature)', 'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)', 'Linguistics', 'Profession', 'Spellcraft'],
    /* skill ranks */ 2,
    /* BAB */ [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
    /* Fort */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var PCAssignClass = function () {
    switch (PCClass) {
        case ('Barbarian'):
            PCAlignment = Barbarian.alignment();
            HP = Barbarian.hp();
            BAB = Barbarian.bab();
            Fort = Barbarian.fort();
            Ref = Barbarian.ref();
            Will = Barbarian.will();
            break;
        case ('Bard'):
            PCAlignment = Bard.alignment();
            HP = Bard.hp();
            BAB = Bard.bab();
            Fort = Bard.fort();
            Ref = Bard.ref();
            Will = Bard.will();
            break;
        case ('Cleric'):
            PCAlignment = Cleric.alignment();
            HP = Cleric.hp();
            BAB = Cleric.bab();
            Fort = Cleric.fort();
            Ref = Cleric.ref();
            Will = Cleric.will();
            break;
        case ('Druid'):
            PCAlignment = Druid.alignment();
            HP = Druid.hp();
            BAB = Druid.bab();
            Fort = Druid.fort();
            Ref = Druid.ref();
            Will = Druid.will();
            break;
        case ('Fighter'):
            PCAlignment = Fighter.alignment();
            HP = Fighter.hp();
            BAB = Fighter.bab();
            Fort = Fighter.fort();
            Ref = Fighter.ref();
            Will = Fighter.will();
            break;
        case ('Monk'):
            PCAlignment = Monk.alignment();
            HP = Monk.hp();
            BAB = Monk.bab();
            Fort = Monk.fort();
            Ref = Monk.ref();
            Will = Monk.will();
            break;
        case ('Paladin'):
            PCAlignment = 'Lawful Good';
            HP = Paladin.hp();
            BAB = Paladin.bab();
            Fort = Paladin.fort;
            Ref = Paladin.ref;
            Will = Paladin.will;
            break;
        case ('Ranger'):
            PCAlignment = Ranger.alignment();
            HP = Ranger.hp();
            BAB = Ranger.bab();
            Fort = Ranger.fort();
            Ref = Ranger.ref();
            Will = Ranger.will();
            break;
        case ('Rogue'):
            PCAlignment = Rogue.alignment();
            HP = Rogue.hp();
            BAB = Rogue.bab();
            Fort = Rogue.fort();
            Ref = Rogue.ref();
            Will = Rogue.will();
            break;
        case ('Sorcerer'):
            PCAlignment = Sorcerer.alignment();
            HP = Sorcerer.hp();
            BAB = Sorcerer.bab();
            Fort = Sorcerer.fort();
            Ref = Sorcerer.ref();
            Will = Sorcerer.will();
            break;
        case ('Wizard'):
            PCAlignment = Wizard.alignment();
            HP = Wizard.hp();
            BAB = Wizard.bab();
            Fort = Wizard.fort();
            Ref = Wizard.ref();
            Will = Wizard.will();
            break;
        }
    };

PCAssignClass();
