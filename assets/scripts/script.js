// $("#AR").hide();
// $("#ER").hide();
// $("#DR").hide();

var game = {
  attacker: "",
  attackerId: "",
  defender: "",
  defenderId: "",
  defenderCnt: 3,
  killCnt: 0,
  wins: 0,
  losses: 0
};

var state = 0; // 0=start game

$(document).ready(function(){
  // $("#AR").hide();
  // $("#ER").hide();
  // $("#DR").hide();
  // $("#msg").text("");

  initGame();

  $("#btn").on("click", function() {
    if( $("#btn").text() == "Start Game") {
      startGame();
    }
    if( $("#btn").text() == "Attack") {
      attackGame();
    }
  });


  $(".attacker").on("click", function() {
    // $("#msg").text($(this).childern("span").text());
    console.log(this);
    if ($("#btn").text() !== "wait" ){
      $(this).siblings(".attacker").hide();
      $("#msg").text("Choose your Enemy");
      $(".emsg-row").show();
      $("#ER").show();
      if($(this).hasClass("C1")){
        $(".enemy").filter(".C1").hide();
      } else     if($(this).hasClass("C2")){
        $(".enemy").filter(".C2").hide();
      } else  if($(this).hasClass("C3")){
        $(".enemy").filter(".C3").hide();
      }else  if($(this).hasClass("C4")){
        $(".enemy").filter(".C4").hide();
      }
      game.attacker = this;
      game.attackerId = $(this).attr("id");
      
      $("#btn").text("wait") ;
      console.log(game.attacker.getAttribute("char"));
    }
    
    // if( $("#btn").text() == "Attack") {
    //   newGame();
    // }


  });

  $(".enemy").on("click", function() {
    // $("#msg").text($(this).childern("span").text());
    console.log(this);
    // $(this).siblings(".enemy").hide();
    if ($("#btn").text() !== "Attack" ){
    $("#msg").text("Press button to attack the defender");
    //$("#msg").text("Choose your Enemy");
    $("#btn").show();
    $("#btn").text("Attack") ;
    $(this).hide();
    $(".dmsg-row").show();
    $("#DR").show();
    if($(this).hasClass("C1")){
      //game.defender = $(".defender").find(".C1");
      game.defenderId = $("#D1").attr("id");
      game.defender = document.getElementById("D1");
      $(".defender").find(".C1").show();
      $(".defender").find(".C2, .C3, .C4").hide();
    } else     if($(this).hasClass("C2")){
      game.defender = document.getElementById("D2");
      game.defenderId = $("#D2").attr("id");
      $(".defender").filter(".C2").show();
      $(".defender").filter(".C1, .C3, .C4").hide();
    } else  if($(this).hasClass("C3")){
      game.defender = document.getElementById("D3");
      game.defenderId = $("#D3").attr("id");
      $(".defender").filter(".C3").show();
      $(".defender").filter(".C1, .C2, .C4").hide();
    }else  if($(this).hasClass("C4")){
      game.defender = document.getElementById("D4");
      game.defenderId = $("#D4").attr("id");
      $(".defender").filter(".C4").show();
      $(".defender").filter(".C1, .C2, .C3").hide();
    }
    console.log("game.defender");
    console.log(game.defender);
    console.log(game.defender.getAttribute("char"));

    $(".gmsg-row").show();
  }

  });


  function initGame() {
    $("#AR").hide();
    $(".attacker").show();
    $("#ER").hide();
    //$(".attacker").show();
    $("#DR").hide();
    $("#btn").text("Start Game");
    $("#msg").text("");
  ///  $("#msg").text("Press button to attack the XXX");
    // $("#msg").text("");
    $(" .emsg-row, .gmsg-row, .dmsg-row").hide();
   // $("#dmsg").hide();
   // $("#emsg, #gmsg1, #gmsg2").hide();
  };

  function startGame()
  {   
    $("#msg").text("Choose your attacker");
    $("#btn").hide();
    $("#AR").show();
  };

 function attackGame ()
 {
//   var ahealth = parseInt(game.attacker.getAttribute("health"));
//   var aattack = parseInt(game.attacker.getAttribute("attack"));
//   var dhealth = parseInt(game.defender.getAttribute("health"));
//   var dattack = parseInt(game.defender.getAttribute("attack"));

var A = $("#"+game.attackerId);
var D = $("#"+game.defenderId);
 
var ahealth = parseInt($(A).attr("health"));
var aattack = parseInt($(A).attr("points"));
var dhealth = parseInt($(D).attr("health"));
var dattack = parseInt($(D).attr("attack"));
aattack += 6;
dhealth -= aattack;
ahealth -= dattack;

//   var ah = $(A).attr("health");
//   var dh = $(D).attr("health");

$(A).attr("points", aattack );
$(A).attr("health", ahealth );
$(D).attr("health", dhealth );
 
$(A).find("span.health").text(ahealth);
$(D).find("span.health").text(dhealth);
//   game.attacker.setAttribute("attack", aattack );
//   game.attacker.setAttribute("health", ahealth );
//   game.defender.setAttribute("health", dhealth );
  
  $("#gmsga").text("You attacked" + $(D).attr("char") + " with " + aattack +  " damage points" );
  $("#gmsgd").text($(D).attr("char") + " attacked you with " + dattack +  " damage points" );

  if (ahealth <= 0){
    $("#gmsga").text("Sorry you are out of health. You lost" );
     $("#gmsgd").text("" );
     game.losses++;
     updateStats();
     initGame();
  } else if (game.killCnt === game.defenderCnt) 
         $("#gmsga").text("You Won this game" );
         $("#gmsgd").text("" );
         game.wins++;
         updateStats();
  if ( dhealth <= 0 ) {
      nextDefender();
  }

 
};

function nextDefender(){

  $("#DR").hide();
  $(".gmsg-row, .dmsg-row").hide();
  $("#btn").hide();
  $("#btn").text("wait") ;
  $("#msg").text("Choose your next Enemy");
};


function updateStats(){
  $("#wmsg").text("Wins: " + game.wins);
  $("#lmsg").text("Losses: " + game.losses);
};


  //$("#DR").document;
  // $("button").click(function(){
  //     $("p").slideToggle();
  // });
});