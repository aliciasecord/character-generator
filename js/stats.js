var rollStat = function () {
    var dieRolls = makeDie(5).times(4)
    for (a in dieRolls) {
        dieRolls[a] += 1;
    }
    var sortedRolls = dieRolls.sort();
    var singleStat = 0;
    for (b = 1; b < sortedRolls.length; b++) {
        singleStat += sortedRolls[b];
        }
    return singleStat;
    }

var sixStats = function () {
    var ss = [];
        for (var c = 0; c < 6; c++) {
            ss.push(rollStat());
        }
    return ss;
}

var createStats = function () {
    var stats = sixStats();
    stats = stats.sort(function (a, b) { 
        return a - b;
    });

    var total = 0;
        for (var d in stats) {
            total += stats[d];
        }
    var totalModifier = ((total-60)/2);
    if (totalModifier < 10) {
        return createStats();
    }
    else {
        return stats;
        }
};

var stats = createStats();

var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

var StatsAssignRace = function () {
    switch (PCRace) {
        case ('Dwarf'):
            wis += 2;
            con += 2;
            break;
        case ('Elf'):
            dex += 2;
            int += 2;
            con -= 2;
            break;
        case ('Gnome'):
            con +=2;
            cha += 2;
            str -= 2;
            break;
        case ('Halfling'):
            dex += 2;
            cha += 2;
            str -= 2;
            break;
        default:
            stats[0] += 2;
            break;
        }
    return str, dex, con, int, wis, cha;
};

var StatsAssignClass = function () {
    switch (PCClass) {
        case ('Barbarian'):
            str += stats[5];
            dex += stats[3];
            int += stats[1];
            wis += stats[2];
            con += stats[4];
            cha += stats[0];
            break;
        case ('Bard'):
            str += stats[0];
            dex += stats[4];
            int += stats[2];
            wis += stats[1];
            con += stats[3];
            cha += stats[5];
            break;
        case ('Cleric'):
            str += stats[0];
            dex += stats[1];
            int += stats[2];
            wis += stats[5];
            con += stats[4];
            cha += stats[3];
            break;
        case ('Druid'):
            str += stats[3];
            dex += stats[2];
            int += stats[1];
            wis += stats[5];
            con += stats[4];
            cha += stats[0];
            break;
        case ('Fighter'):
            str += stats[5];
            dex += stats[3];
            int += stats[1];
            wis += stats[2];
            con += stats[4];
            cha += stats[0];
            break;
        case ('Monk'):
            str += stats[5];
            dex += stats[2];
            int += stats[1];
            wis += stats[3];
            con += stats[4];
            cha += stats[0];
            break;
        case ('Paladin'):
            str += stats[4];
            dex += stats[2];
            int += stats[1];
            wis += stats[0];
            con += stats[3];
            cha += stats[5];
            break;
        case ('Ranger'):
            str += stats[4];
            dex += stats[5];
            int += stats[1];
            wis += stats[3];
            con += stats[2];
            cha += stats[0];
            break;
        case ('Rogue'):
            str += stats[1];
            dex += stats[5];
            int += stats[4];
            wis += stats[2];
            con += stats[3];
            cha += stats[0];
            break;
        case ('Sorcerer'):
            str += stats[0];
            dex += stats[4];
            int += stats[1];
            wis += stats[2];
            con += stats[3];
            cha += stats[5];
            break;
        case ('Wizard'):
            str += stats[0];
            dex += stats[4];
            int += stats[2];
            wis += stats[5];
            con += stats[3];
            cha += stats[1];
            break;
        default:
            str += stats[5];
            dex += stats[3];
            int += stats[1];
            wis += stats[2];
            con += stats[4];
            cha += stats[0];
            break;
        }
    return str, dex, con, int, wis, cha;
    };

StatsAssign();

var modstr = function() {return Math.floor((str - 10)/2);};
var moddex = function() {return Math.floor((dex - 10)/2);};
var modint = function() {return Math.floor((int - 10)/2);};
var modcon = function() {return Math.floor((con - 10)/2);};
var modwis = function() {return Math.floor((wis - 10)/2);};
var modcha = function() {return Math.floor((cha - 10)/2);};
