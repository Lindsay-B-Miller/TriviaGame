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
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var question18 = document.quiz.question18.value;
    var question19 = document.quiz.question19.value;
    var question20 = document.quiz.question20.value;
    var correct = 0;
    var wrong = 0;
    var notAnswered = 0;
    if (question1 == "Lane Cake") {
        correct++;
    }
    else {
        wrong++;
        console.log(question1)
    }
    if (question2 == "Arkansas") {
        correct++;
    }
    else {
        wrong++;
        console.log(question2)
    }
    if (question3 == "Colorado") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question4 == "Pepsi") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question5 == "Watermellon") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question6 == "Philly Cheesesteak") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question7 == "Dried Fruit") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question8 == "Deep-dish Pizza") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question9 == "Ice Cream") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question10 == "November 3") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question11 == "Bread") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question12 == "Fried Chicken") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question13 == "Georgia") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question14 == "Turkey") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question15 == "Key Lime Pie") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question16 == "Ketchup") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question17 == "Ginger Ale") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question18 == "Chocolate Milk") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question19 == "Smores") {
        correct++;
    }
    else {
        wrong++;
    }
    if (question20 == "Cherries") {
        correct++;
    }
    else {
        wrong++;
    }
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("numCorrect").innerHTML = "Correct: " + correct;
    document.getElementById("numWrong").innerHTML = "Wrong: " + wrong;
    document.getElementById("notAnswered").innerHTML = "Not Answered: " + notAnswered;
}

