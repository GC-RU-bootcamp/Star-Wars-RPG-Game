// $("#AR").hide();
// $("#ER").hide();
// $("#DR").hide();

var game = {
  attackerId: "",
  defenderId: "",
  defenderCnt: 4,
  killCnt: 0,
  wins: 0,
  losses: 0
};

var state = 0; // 0=start game

$(document).ready(function () {
  // $("#AR").hide();
  // $("#ER").hide();
  // $("#DR").hide();
  // $("#msg").text("");

  initGame();

  $("#btn").on("click", function () {
    var txt = $("#btn").text();

    if (txt === "Next Game") {
      initGame();
      startGame();
    }
    if (txt === "Start Game") {
      startGame();
    }
    if ($("#btn").text() == "Attack") {
      attackGame();
    }

  });


  $(".attacker").on("click", function () {
    // $("#msg").text($(this).childern("span").text());
    console.log(this);
    if ($("#btn").text() === "Start Game") {
      $(this).siblings(".attacker").hide();
      $("#msg").text("Choose your Enemy");
      $(".emsg-row").show();
      $("#ER").show();
      if ($(this).hasClass("C1")) {
        $(".enemy").filter(".C1").hide();
      } else if ($(this).hasClass("C2")) {
        $(".enemy").filter(".C2").hide();
      } else if ($(this).hasClass("C3")) {
        $(".enemy").filter(".C3").hide();
      } else if ($(this).hasClass("C4")) {
        $(".enemy").filter(".C4").hide();
      }  else if ($(this).hasClass("C5")) {
        $(".enemy").filter(".C5").hide();
      }
      game.attackerId = $(this).attr("id");

      $("#btn").text("wait");
      $
    } else if ($("#btn").text() == "Attack") {
      attackGame();
    }
    // if( $("#btn").text() == "Attack") {
    //   newGame();
    // }


  });

  $(".enemy").on("click", function () {
    // $("#msg").text($(this).childern("span").text());
    console.log(this);
    // $(this).siblings(".enemy").hide();
    if ($("#btn").text() !== "Attack") {
      $("#msg").text("Press attack character or button to attack the defender");
      //$("#msg").text("Choose your Enemy");
      $("#btn").show();
      $("#btn").text("Attack");
      $(this).hide();
      $(".dmsg-row").show();
      $("#DR").show();
      if ($(this).hasClass("C1")) {
        //game.defender = $(".defender").find(".C1");
        game.defenderId = $("#D1").attr("id");
        game.defender = document.getElementById("D1");
        $(".defender").filter("#D1").show();
        $(".defender").filter("#D2, #D3, #D4, #D5").hide();
      } else if ($(this).hasClass("C2")) {
        game.defender = document.getElementById("D2");
        game.defenderId = $("#D2").attr("id");
        $(".defender").filter("#D2").show();
        $(".defender").filter("#D1, #D3, #D4, #D5").hide();
      } else if ($(this).hasClass("C3")) {
        game.defender = document.getElementById("D3");
        game.defenderId = $("#D3").attr("id");
        $(".defender").filter("#D3").show();
        $(".defender").filter("#D1, #D2, #D4, #D5").hide();
      } else if ($(this).hasClass("C4")) {
        game.defender = document.getElementById("D4");
        game.defenderId = $("#D4").attr("id");
        $(".defender").filter("#D4").show();
        $(".defender").filter("#D1, #D2, #D3, #D5").hide();
      } else if ($(this).hasClass("C5")) {
        game.defender = document.getElementById("D5");
        game.defenderId = $("#D5").attr("id");
        $(".defender").filter("#D5").show();
        $(".defender").filter("#D1, #D2, #D3, #D4").hide();
      }
      $("#ER").fadeTo(1000, 0.2);
      $("#enemies-row").fadeTo(1000, 0.2);


      $(".gmsg-row").show();
    }

  });


  function initGame() {
    game.attackerId = game.defenderId = "";
    game.killCnt = 0;

    $("#ER").fadeTo(1000, 1.0);
    $("#enemies-row").fadeTo(1000, 1.0);
    $(".attacker").show();
    $(".enemy").show();
    $(".defender").show();

    $("#AR").hide();
    $(".attacker").show();
    $("#ER").hide();
    //$(".attacker").show();
    $("#DR").hide();
    $("#btn").text("Start Game");
    $("#msg").text("");
    ///  $("#msg").text("Press button to attack the XXX");
    // $("#msg").text("");
    $("#gmsga, #gmsgd").text("");
    $(" .emsg-row, .dmsg-row").hide();
    // $("#dmsg").hide();
    // $("#emsg, #gmsg1, #gmsg2").hide();
    $("span.C1").text($("#A1").attr("value"));
    $("span.C2").text($("#A2").attr("value"));
    $("span.C3").text($("#A3").attr("value"));
    $("span.C4").text($("#A4").attr("value"));
    $("span.C5").text($("#A5").attr("value"));
    $("#A1").attr("health", ($("#A1").attr("value")));
    $("#A2").attr("health", ($("#A2").attr("value")));
    $("#A3").attr("health", ($("#A3").attr("value")));
    $("#A4").attr("health", ($("#A4").attr("value")));
    $("#A5").attr("health", ($("#A5").attr("value")));
    $("#D1").attr("health", ($("#D1").attr("value")));
    $("#D2").attr("health", ($("#D2").attr("value")));
    $("#D3").attr("health", ($("#D3").attr("value")));
    $("#D4").attr("health", ($("#D4").attr("value")));
    $("#D5").attr("health", ($("#D5").attr("value")));
    $(".attacker").attr("points", "0");
  };

  function startGame() {
    $("#msg").text("Choose your attacker");
    $("#btn").hide();
    $("#AR").show();
    $("#gmsga, #gmsgd").text("");
  };

  function attackGame() {
    //   var ahealth = parseInt(game.attacker.getAttribute("health"));
    //   var aattack = parseInt(game.attacker.getAttribute("attack"));
    //   var dhealth = parseInt(game.defender.getAttribute("health"));
    //   var dattack = parseInt(game.defender.getAttribute("attack"));

    var A = $("#" + game.attackerId);
    var D = $("#" + game.defenderId);

    var ahealth = parseInt($(A).attr("health"));
    var aattack = parseInt($(A).attr("points"));
    var dhealth = parseInt($(D).attr("health"));
    var dattack = parseInt($(D).attr("attack"));
    aattack += 6;
    dhealth -= aattack;
    ahealth -= dattack;

    //   var ah = $(A).attr("health");
    //   var dh = $(D).attr("health");

    $(A).attr("points", aattack);
    $(A).attr("health", ahealth);
    $(D).attr("health", dhealth);

    $(A).find("span.health").text(ahealth);
    $(D).find("span.health").text(dhealth);
    //   game.attacker.setAttribute("attack", aattack );
    //   game.attacker.setAttribute("health", ahealth );
    //   game.defender.setAttribute("health", dhealth );

    $("#gmsga").text("You attacked " + $(D).attr("char") + " with " + aattack + " damage points");
    $("#gmsgd").text($(D).attr("char") + " attacked you with " + dattack + " damage points");

    if (ahealth <= 0) {
      $("#gmsgd").text("");
      game.losses++;
      updateStats();
      initGame();
      $("#gmsga").text( $(A).attr("char") + " is out of health points. Sorry, You lost");
      showDialog( "You are out of health points", "Sorry, You lost");
    } else if (dhealth <= 0) {
      game.killCnt++;
      if (game.killCnt === game.defenderCnt) {
        $("#gmsga").text("You Won this game");
        $("#gmsgd").text("");
        $("#DR").hide();
        $(" .emsg-row, .dmsg-row").hide();
        game.wins++;
        updateStats();
        $("#btn").text("Next Game");
        $("#btn").show();
        $("#msg").text("");
        showDialog("Congratulations", "You WON");
      } else {
        nextDefender();
      }
    }


  };

  function nextDefender() {

    $("#DR").hide();
    $(".gmsg-row, .dmsg-row").hide();
    $("#btn").hide();
    $("#btn").text("wait");
    $("#msg").text("Choose your next Enemy");
    $("#ER").fadeTo(1000, 1.0);
    $("#enemies-row").fadeTo(1000, 1.0);
  };


  function updateStats() {
    $("#wmsg").text("Wins: " + game.wins);
    $("#wmsg").addClass("text-success bg-white border border-success rounded p-1");
    // $("#wmsg").addClass("bg-white");
    $("#lmsg").text("Losses: " + game.losses);
    $("#lmsg").addClass("text-danger bg-white border border-danger rounded p-1");
    // $("#lmsg").addClass("bg-danger");
    

  };

  function showDialog (headMsg, bodyMsg) {
    $("#modal-header").text(headMsg);
    $("#modal-body").text(bodyMsg);

    $("#myModal").modal({
      // backdrop: "static",
      // keyboard: false 
      // to prevent closing with Esc button (if you want this too)
    });

    this.dialogOpen = true;
    // $("#myModal").on("shown.bs.modal", function() {
    // $("#myInput").focus();
    // });
  }

 

  //$("#DR").document;
  // $("button").click(function(){
  //     $("p").slideToggle();
  // });
}); 

