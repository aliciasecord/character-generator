/* Array for random race selection */
var r = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human'];
/* Function calls random race */
function Race() {
    return r[Math.floor(Math.random() * r.length)];
    }

/* Array for random class selection */
var c = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard'];
/* Function calls random class */
function Class() {
    return c[Math.floor(Math.random() * c.length)];
    }

var PCLevel;
var PCRace;
var PCClass;

//Begin DOM manipulation using JQuery
$(document).ready(function() {
  // Create level selection drop down
  $('#level').append(
        '<h3>Choose your level: <select id="selectLevel"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> </select> <span class="btn" id="confirmLevel">Confirm</span> <h3>'
    );  
    
  // Allow user to select level from drop down
  var PCLevel = $("#selectLevel option:selected").text();
    $('#selectLevel').change(function(){
        PCLevel = $("#selectLevel option:selected").text();
    });
  
  // Show that level in character sheet
  $('#level').on('click', '#confirmLevel', function() {
        $('#characterlevel').text("");
        $('#characterlevel').append('Level ' + PCLevel);
        // Remove level drop down
        $('#level').remove();
        // Create race selection
        $('#race').prepend('<img src="http://shianra.com/rpg/img/races.jpg"> <h3>Choose a race</h3> <ul class="racepick"><li id="Dwarf">Dwarf</li> <li id="Elf">Elf</li> <li id="Gnome">Gnome</span></li> </ul> <ul class="racepick"> <li id="Half-Elf">Half-Elf</li> <li id="Halfling">Halfling</li> <li id="Half-Orc">Half-Orc</li> </ul> <ul class="racepick"> <li id="Human">Human</li> <li id="ChooseRace">Choose For Me</li> </ul>'
        );
    });
  
  // Allow user to select race or have it randomized, show a preview of the selected race
  $('#race').on('click','#Dwarf', function() {
        PCRace = r[0];
        $('#chosenrace').append('<h2>Dwarf</h2> <p>+2 CON, +2 WIS, -2 CHA</p><p>Languages: Dwarven, Common</p>');
    });

    $('#race').on('click','#Elf', function() {
        PCRace = r[1];
        $('#chosenrace').prepend('<h2>Elf</h2> <p>+2 DEX, +2 INT, –2 CON</p> <p>Languages: Elven, Common</p>');
    });
    
    $('#race').on('click','#Gnome', function() {
        PCRace = r[2];
        $('#chosenrace').prepend('<h2>Gnome</h2> <p>+2 CON, +2 CHA, –2 STR</p> <p>Languages: Gnome, Sylvan, Common</p>');
    });

    $('#race').on('click','#Half-Elf', function() {
        PCRace = r[3];
        $('#race h3, #race ul').hide();
        $('#chosenrace').prepend('<h2>Half-Elf</h2> <p>+2 to one ability score</p> <p>Elven, Common</p>');
    });
    
    $('#race').on('click','#Half-Orc', function() {
        PCRace = r[4];
        $('#chosenrace').prepend('<h2>Half-Orc</h2> <p>+2 to one ability score</p> <p>Languages: Orcish, Common</p>');
    });
    
    $('#race').on('click','#Halfling', function() {
        PCRace = r[5];
        $('#chosenrace').prepend('<h2>Halfling</h2> <p>+2 CHA, +2 DEX, -2 STR</p> <p>Languages: Halfling, Common</p>');
    });
    
    $('#race').on('click','#Human', function() {
        PCRace = r[6];
        $('#chosenrace').prepend('<h2>Human</h2> <p>+2 to one ability score</p> <p>Languages: Common</p>');
    });
    
    $('#race').on('click','#ChooseRace', function() {
        PCRace = Race();
    });
    
    $('#race').on('click','.racepick li', function() {
        $('#race').append('<div id="ConfirmRace"><p><span class="btn" id="SelectRace">Confirm</span><span class="btn" id="ResetRace">Reset</span></p></div>');
        $('#race h3, #race ul, #race img').hide();
    });
    
    // Allow user to reset selection
    $('#race').on('click','#ResetRace', function() {
        $('#ConfirmRace').remove();
        $('#race ul, #race img, #race h3').show();
        $('#characterrace, #chosenrace').empty();
        PCRace;
    });
    
    // Confirm selection and attach to character span
    $('#race').on('click','#SelectRace, #ChooseRace', function() {
        $('#characterrace').text("");
        $('#characterrace').append(PCRace);
        // Remove race selection
        $('#race').empty();
        // Create class selection
        $('#class').prepend(
            '<p><img src="http://i280.photobucket.com/albums/kk199/MaskedBrute/ScreenShot2013-07-22at15339PM.png"></p> <h3>Choose a class</h3> <ul class="classpick"> <li id="Barbarian">Barbarian</li> <li id="Bard">Bard</li> <li id="Cleric">Cleric</li> </ul> <ul> <li id="Druid">Druid</li> <li id="Fighter">Fighter</li> <li id="Monk">Monk</li> </ul> <ul class="classpick"> <li id="Paladin">Paladin</li> <li id="Ranger">Ranger</li> <li id="Rogue">Rogue</li> </ul> <ul class="classpick"> <li id="Wizard">Wizard</li> <li id="Sorcerer">Sorcerer</li> <li id="ChooseClass">Choose for me</li> </ul>'
            );
    });
    
    // Allow user to select class or have it randomized, show a preview of the selected class
    $('#class').on('click','#Barbarian', function() {
        PCClass = c[0];
        $('#chosenclass').prepend('<h2>Barbarian</h2> <p>The barbarian is a brutal berserker from beyond the edge of civilized lands.</p>');
    });
    
    $('#class').on('click','#Bard', function() {
        PCClass = c[1];
        $('#chosenclass').prepend('<h2>Bard</h2> <p>The bard uses skill and spell alike to bolster his allies, confound his enemies, and build upon his fame.</p>');
    });
    
    $('#class').on('click','#Cleric', function() {
        PCClass = c[2];
        $('#chosenclass').prepend('<h2>Cleric</h2> <p>A devout follower of a deity, the cleric can heal wounds, raise the dead, and call down the wrath of the gods.</p>');
    });
    
    $('#class').on('click','#Druid', function() {
        PCClass = c[3];
        $('#chosenclass').prepend('<h2>Druid</h2> <p>The druid is a worshiper of all things natural—a spellcaster, a friend to animals, and a skilled shapechanger.</p>');
    });
    
    $('#class').on('click','#Fighter', function() {
        PCClass = c[4];
        $('#chosenclass').prepend('<h2>Fighter</h2> <p>Brave and stalwart, the fighter is a master of all manner of arms and armor.</p>');
    });
    
    $('#class').on('click','#Monk', function() {
        PCClass = c[5];
        $('#chosenclass').prepend('<h2>Monk</h2> <p>A student of martial arts, the monk trains his body to be his greatest weapon and defense.</p>');
    });
    
    $('#class').on('click','#Paladin', function() {
        PCClass = c[6];
        $('#chosenclass').prepend('<h2>Paladin</h2> <p>The paladin is the knight in shining armor, a devoted follower of law and good.</p>');
    });
    
    $('#class').on('click','#Ranger', function() {
        PCClass = c[7];
        $('#chosenclass').prepend('<h2>Ranger</h2> <p>A tracker and hunter, the ranger is a creature of the wild and of tracking down his favored foes.</p>');
    });
    
    $('#class').on('click','#Rogue', function() {
        PCClass = c[8];
        $('#chosenclass').prepend('<h2>Rogue</h2> <p>The rogue is a thief and a scout, an opportunist capable of delivering brutal strikes against unwary foes.</p>');
    });
    
    $('#class').on('click','#Sorcerer', function() {
        PCClass = c[9];
        $('#chosenclass').prepend('<h2>Sorcerer</h2> <p>The spellcasting sorcerer is born with an innate knack for magic and has strange, eldritch powers.</p>');
    });
    
    $('#class').on('click','#Wizard', function() {
        PCClass = c[10];
        $('#chosenclass').prepend('<h2>Wizard</h2> <p>The wizard masters magic through constant study that gives him incredible magical power.</p>');
    });
    
    $('#class').on('click','#ChooseClass', function() {
        PCClass = Class();
    });
    
    $('#class').on('click','.classpick li', function() {
        $('#class').append('<div id="ConfirmClass"><p><span class="btn" id="SelectClass">Confirm</span><span class="btn" id="ResetClass">Reset</span></p></div>');
        $('#class h3, #class ul, #class img').hide();
    });
    
    // Allow user to reset selection
    $('#class').on('click','#ResetClass', function() {
        $('#ConfirmClass').remove();
        $('#class ul, #class img, #class h3').show();
        $('#characterclass, #chosenclass').empty();
        PCClass;
    });
    
    // Confirm selection and append to character
    $('#class').on('click','#SelectClass, #ChooseClass', function() {
        $('#characterclass').text("");
        $('#characterclass').append(PCClass);
        // Remove class div
        $('#class').empty();
        // Create prompt to move forward
        $('#characterSheet').prepend('<p><span id="firstConfirm" class="btn wide">Show Me My Character</span></p>');
    });
    
    // Next DOM manipulation will happen in a second script after other variables can be called
});
