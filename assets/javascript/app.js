//hides main page until press start button
window.onload = function () {
    $(".container").hide();
};

// GLOBAL VARIABLES================================================================================================
var time = 120;



// FUNCTIONS=======================================================================================================
//start button shows display
$(".start").click(function start() {
    console.log("started");
    $(".start").remove();
    $(".container").show();
    function count() {
        time--;
        $("#timeRemaining").html("Time Remaining: " + time);
    }
    setInterval(count, 1000);

});


//Time up function
setTimeout(timeUp, 1000 * 30);
function timeUp() {
    console.log("time up");
    $("#timeRemaining").html("Time's Up!");
}

//function to check the score
function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var correct = 0;
    var wrong = 0;
    if (question1 == "Hartford") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question2 == "Eugene") {
        correct++;
    }
    else {
        wrong++;
    }
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("numCorrect").innerHTML = "Correct: " + correct;
    document.getElementById("numWrong").innerHTML = "Wrong: " + wrong;
}

