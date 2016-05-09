var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

var StatsAssign = function () {
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

var modstr = Math.floor((str - 10)/2);
var moddex = Math.floor((dex - 10)/2);
var modint = Math.floor((int - 10)/2);
var modcon = Math.floor((con - 10)/2);
var modwis = Math.floor((wis - 10)/2);
var modcha = Math.floor((cha - 10)/2);
