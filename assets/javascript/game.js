// step1

// declare global variables
var PlayerHP = 0;
// player health
var playerStartAP = 0;
// player starting attack power
$("#kenobi-enemy").hide();
$("#sidious-enemy").hide();
$("#maul-enemy").hide();
$("#luke-enemy").hide();
$("#restart").hide();
$("#kenobi-enemy-choosen").hide();
$("#sidious-enemy-choosen").hide();
$("#maul-enemy-choosen").hide();
$("#luke-enemy-choosen").hide();

var playerAP = 0;
var PlayerHP = 0;
//player attack power
var currentEnemyHP = 0;
// choosen enemy hp
var currentEnemyCounterAP = 0;
// choosen enemy counter attack power
var enemyChoosen = false;
// enemy choose start as false
var playerChoosen = false;

var player = "";
var currentEnemy = "";
var counter = 0;

// step 2

var game = {
  //create an object
  luke: {
    hp: 125,
    attackPower: 10,
    counterAP: 25
  },

  kenobi: {
    hp: 300,
    attackPower: 3,
    counterAP: 8
  },

  maul: {
    hp: 200,
    attackPower: 5,
    counterAP: 15
  },

  sidious: {
    hp: 175,
    attackPower: 7,
    counterAP: 20
  },

  //make objects filled with info for each character
  attacking: function() {
    //create function for attacking
    if (enemyChoosen) {
      // deal damage to selected enemy
      currentEnemyHP -= playerAP;
      console.log(currentEnemyHP);
      //check if choosen enemies health is equal to or below zero
      if (currentEnemyHP <= 0) {
        // if so hide enemy, change enemy choosen as false
        $("#results").text(
          player + "dealt: " + playerAP + " damage to " + currentEnemy
        );
        $(".enemy-choosen").hide();
        enemyChoosen = false;
        counter++;
        if (counter === 3) {
          alert("You win.");
          $("#restart").show();
        }
      } else {
        // deal damage to players health
        playerHP -= currentEnemyCounterAP;
        console.log(playerHP);
        $("#results").html(
          player +
            "dealt: " +
            playerAP +
            " damage to " +
            currentEnemy +
            ".<br>" +
            currentEnemy +
            "dealt: " +
            currentEnemyCounterAP +
            " damage to " +
            player
        );
        // check if player health is at or below 0
        if (playerHP <= 0) {
          // if not alert loss
          alert("You lost this time!");
          //reveal restart button
          $("#restart").show();
        } else {
          playerAP += playerStartAP;
          $(".enemy-hp").text(currentEnemyHP);
          $(".hero-hp").text(playerHP);
          // print to screen updated health
        }
      }
    }
  }
};
// step 3

//make on click for players choice
$(".heros").on("click", function(event) {
  console.log(this.id);

  //set player attributes
  if (!playerChoosen) {
    playerChoosen = true;
    player = this.id;
    console.log(player);
    switch (player) {
      case "luke":
        playerAP = game.luke.attackPower;
        playerStartAP = game.luke.attackPower;
        playerHP = game.luke.hp;
        $("#kenobi").hide();
        $("#maul").hide();
        $("#sidious").hide();
        $("#kenobi-enemy").show();
        $("#maul-enemy").show();
        $("#sidious-enemy").show();

        break;

      case "kenobi":
        playerAP = game.kenobi.attackPower;
        playerStartAP = game.kenobi.attackPower;
        playerHP = game.kenobi.hp;
        $("#luke").hide();
        $("#maul").hide();
        $("#sidious").hide();
        $("#luke-enemy").show();
        $("#maul-enemy").show();
        $("#sidious-enemy").show();

        break;

      case "sidious":
        playerAP = game.sidious.attackPower;
        playerStartAP = game.sidious.attackPower;
        playerHP = game.sidious.hp;
        $("#kenobi").hide();
        $("#maul").hide();
        $("#luke").hide();
        $("#kenobi-enemy").show();
        $("#maul-enemy").show();
        $("#luke-enemy").show();

        break;

      case "maul":
        playerAP = game.maul.attackPower;
        playerStartAP = game.maul.attackPower;
        playerHP = game.maul.hp;
        $("#kenobi").hide();
        $("#luke").hide();
        $("#sidious").hide();
        $("#kenobi-enemy").show();
        $("#sidious-enemy").show();
        $("#luke-enemy").show();

        break;
    }
  }
  console.log(playerAP);
  console.log(playerHP);

  //hide characters not choosen
  // reveal characters not choosen as enemies
});

// step 4
$(".enemies").on("click", function(event) {
  // make on click for chosen enemy to fight

  //checks if enemyChoosen is false if so otherwhise ignore click
  if (!enemyChoosen) {
    enemyChoosen = true;
    console.log(this.id);
    //hide choosen enemy
    currentEnemy = this.id;
    switch (currentEnemy) {
      case "luke-enemy":
        $("#luke-enemy").hide();
        $("#luke-enemy-choosen").show();
        currentEnemyHP = game.luke.hp;
        currentEnemyCounterAP = game.luke.counterAP;
        $(".enemy-hp").text(currentEnemyHP);
        break;
      case "maul-enemy":
        $("#maul-enemy").hide();
        $("#maul-enemy-choosen").show();
        currentEnemyHP = game.maul.hp;
        currentEnemyCounterAP = game.maul.counterAP;
        $(".enemy-hp").text(currentEnemyHP);
        break;
      case "sidious-enemy":
        $("#sidious-enemy").hide();
        $("#sidious-enemy-choosen").show();
        currentEnemyHP = game.sidious.hp;
        currentEnemyCounterAP = game.sidious.counterAP;
        $(".enemy-hp").text(currentEnemyHP);
        break;
      case "kenobi-enemy":
        $("#kenobi-enemy").hide();
        $("#kenobi-enemy-choosen").show();
        currentEnemyHP = game.kenobi.hp;
        currentEnemyCounterAP = game.kenobi.counterAP;
        $(".enemy-hp").text(currentEnemyHP);
        break;
    }

    // switch isEnemychoosen to true
    // reveal choosen enemy as a defender
  }
});
//step 5
$("#attack").on("click", function(event) {
  game.attacking();
});
//make on click for attack button

// call attack function

//step6
$("#restart").on("click", function(event) {
  // make on click for restart button
  playerAP = 0;
  playerHP = 0;
  currentEnemyHP = 0;
  counter = 0;
  currentEnemyCounterAP = 0;

  enemyChoosen = false;

  playerChoosen = false;

  player = "";
  currentEnemy = "";
  // reset all values
  $("#luke-hp").text(game.luke.hp);
  $("#maul-hp").text(game.maul.hp);
  $("#kenobi-hp").text(game.kenobi.hp);
  $("#sidious-hp").text(game.sidious.hp);
  $("#kenobi-enemy").hide();
  $("#sidious-enemy").hide();
  $("#maul-enemy").hide();
  $("#luke-enemy").hide();
  $("#restart").hide();
  $("#kenobi-enemy-choosen").hide();
  $("#sidious-enemy-choosen").hide();
  $("#maul-enemy-choosen").hide();
  $("#luke-enemy-choosen").hide();
  $("#kenobi").show();
  $("#sidious").show();
  $("#maul").show();
  $("#luke").show();

  //change all display to none
});
