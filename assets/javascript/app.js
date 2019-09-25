// //hides main page until press start button
// window.onload = function () {
//     document.getElementById("mainContainer").style.display = "none";
// };

// GLOBAL VARIABLES================================================================================================
var time = 120;
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


// FUNCTIONS=======================================================================================================
//start button shows display
$(".start").click(function start() {
    console.log("started");
    $(".start").remove();
    $(".container").show();
    function count() {
        time--;
        $("#timeRemaining").html("Time Remaining: " + time);
        $("#mainContainer:visible");
    }
    setInterval(count, 1000);
    console.log("Correct Answers: " + "Question 1: " + question1);
});


//function to check the score
function check() {

    var correct = 0;
    var wrong = 0;
    var notAnswered = 0;

    // IF STATEMENTS ===================================================================================================
    // question 1
    if (question1 == "Lane Cake") {
        correct++;
    }
    else if ($("[name=question1]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 2
    if (question2 == "Arkansas") {
        correct++;
    }
    else if ($("[name=question2]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    //question 3
    if (question3 == "Colorado") {
        correct++;
    }
    else if ($("[name=question3]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    //question 4
    if (question4 == "Pepsi") {
        correct++;
    }
    else if ($("[name=question4]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 5
    if (question5 == "Watermellon") {
        correct++;
    }
    else if ($("[name=question5]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 6
    if (question6 == "Philly Cheesesteak") {
        correct++;
    }
    else if ($("[name=question6]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 7
    if (question7 == "Dried Fruit") {
        correct++;
    }
    else if ($("[name=question7]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 8
    if (question8 == "Deep-dish Pizza") {
        correct++;
    }
    else if ($("[name=question8]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 9
    if (question9 == "Ice Cream") {
        correct++;
    }
    else if ($("[name=question9]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 10
    if (question10 == "November 3") {
        correct++;
    }
    else if ($("[name=question10]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 11
    if (question11 == "Bread") {
        correct++;
    }
    else if ($("[name=question11]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 12
    if (question12 == "Fried Chicken") {
        correct++;
    }
    else if ($("[name=question12]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 13
    if (question13 == "Georgia") {
        correct++;
    }
    else if ($("[name=question13]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 14
    if (question14 == "Turkey") {
        correct++;
    }
    else if ($("[name=question14]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 15
    if (question15 == "Key Lime Pie") {
        correct++;
    }
    else if ($("[name=question15]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 16
    if (question16 == "Ketchup") {
        correct++;
    }
    else if ($("[name=question16]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 17
    if (question17 == "Ginger Ale") {
        correct++;
    }
    else if ($("[name=question17]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 18
    if (question18 == "Chocolate Milk") {
        correct++;
    }
    else if ($("[name=question18]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 19
    if (question19 == "Smores") {
        correct++;
    }
    else if ($("[name=question19]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // question 20
    if (question20 == "Cherries") {
        correct++;
    }
    else if ($("[name=question20]:checked").length) {
        wrong++
    }
    else {
        notAnswered++;
    }

    // $("#results:visible");
    document.getElementById("results").style.visibility = "visible";
    $("#numCorrect").html("Correct Answers: " + correct);
    // document.getElementById("numCorrect").innerHTML = "Correct Answers: " + correct;
    $("#numWrong").html("Incorrect Answers: " + wrong);
    // document.getElementById("numWrong").innerHTML = "Incorrect Answers: " + wrong;
    $("#notAnswered").html("Unanswered: " + notAnswered);
    // document.getElementById("notAnswered").innerHTML = "Unanswered: " + notAnswered;
    $("#mainContainer").remove();
    // document.getElementById("mainContainer").style.display = "none";

}


//Time up function
setTimeout(timeUp, 1000 * 120);
function timeUp() {
    console.log("time up");
    check();
}
