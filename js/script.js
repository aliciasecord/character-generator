// Array for random race selection
var r = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human']
// Function calls random race
function Race() {
    return r[Math.floor(Math.random() * r.length)]
    };

// Array for random class selection
var c = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']
// Function calls random class
function Class() {
    return c[Math.floor(Math.random() * c.length)]
    };

// Global Variables to be defined
var PCLevel;
var PCRace;
var PCClass;

//Begin DOM manipulation using JQuery
$(document).ready(function() {
  // Need to hide all the selector elements 
  
  // Allow user to select level from drop down
  var PCLevel = $("#selectLevel option:selected").text();
    $('#selectLevel').change(function(){
        PCLevel = $("#selectLevel option:selected").text();
    });
  
  // Show that level in character sheet
  $('#confirmLevel').click(function() {
      $('#characterlevel').text("");
      $('#characterlevel').append('Level ' + PCLevel);
      // Hide drop down selection
      $('#level').hide();
      // Show next section
      $('#race').show();
  });
  
  // Allow user to select race or have it randomized
  $('#Dwarf').click(function() {
        $('.Dwarf').fadeIn('fast');
        PCRace = r[0];
    });
    $('#Elf').click(function() {
        $('.Elf').fadeIn('fast');
        PCRace = r[1];
    });
    $('#Gnome').click(function() {
        $('.Gnome').fadeIn('fast');
        PCRace = r[2];
    });
    $('#Half-Elf').click(function() {
        $('.Half-Elf').fadeIn('fast');
        PCRace = r[3];
    });
    $('#Half-Orc').click(function() {
        $('.Half-Orc').fadeIn('fast');
        PCRace = r[4];
    });
    $('#Halfling').click(function() {
        $('.Halfling').fadeIn('fast');
        PCRace = r[5];
    });
    $('#Human').click(function() {
        $('.Human').fadeIn('fast');
        PCRace = r[6];
    });
    $('#ChooseRace').click(function(){
        PCRace = Race();
    });    
    
    $('.racepick').click(function() {
        $('#race ul, #race img, #race h3').hide();
        $('#ConfirmRace').fadeIn('fast');
    });
    $('#ResetRace').click(function() {
        $('.chosenrace, #ConfirmRace').hide();
        $('#race ul, #race img, #race h3').fadeIn('fast');
        $('#characterrace').empty();
    });
    $('#SelectRace').click(function() { 
        $('#characterrace').text("");
        $('#characterrace').append(PCRace);
    });
    
    // Allow user to select class or have it randomized
    $('#Barbarian').click(function() {
        $('.Barbarian').fadeIn('fast');
        PCClass = c[0];
    });
    $('#Bard').click(function() {
        $('.Bard').fadeIn('fast');
        PCClass = c[1];
    });
    $('#Cleric').click(function() {
        $('.Cleric').fadeIn('fast');
        PCClass = c[2];
    });
    $('#Druid').click(function() {
        $('.Druid').fadeIn('fast');
        PCClass = c[3];
    });
    $('#Fighter').click(function() {
        $('.Fighter').fadeIn('fast');
        PCClass = c[4];
    });
    $('#Monk').click(function() {
        $('.Monk').fadeIn('fast');
        PCClass = c[5];
    });
    $('#Paladin').click(function() {
        $('.Paladin').fadeIn('fast');
        PCClass = c[6];
    });
    $('#Ranger').click(function() {
        $('.Ranger').fadeIn('fast');
        PCClass = c[7];
    });
    $('#Rogue').click(function() {
        $('.Rogue').fadeIn('fast');
        PCClass = c[8];
    });
    $('#Wizard').click(function() {
        $('.Wizard').fadeIn('fast');
        PCClass = c[9];
    });
    $('#ChooseClass').click(function(){
        PCClass = Class();
    });
    $('.classpick').click(function() {
        $('#class ul, #class img, #class h3').hide();
        $('#ConfirmClass').fadeIn('fast');
    });
    $('#SelectClass').click(function() {
        $('#class').hide();
        $('#again').fadeIn('fast');
    });
    $('#ResetClass').click(function() {
        $('.chosenclass, #ConfirmClass').hide();
        $('#class ul, #class img, #class h3').fadeIn('fast');
        $('#characterclass').empty();
    });
});
