//hides main page until press start button
window.onload = function () {
    $(".container").hide();
};

// GLOBAL VARIABLES================================================================================================
var time = 120;
var x = $(".container");
var y = $(".start");




// FUNCTIONS================================================================================================
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


// counting down time to 0
// var intervalId = setInterval(count, 1000);





//Time up function
setTimeout(timeUp, 1000 * 30);
function timeUp() {
    console.log("time up");
    $("#timeRemaining").html("Time's Up!");
}

