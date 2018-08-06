//ready the document
$(document).ready(function () {

    //set a countdown variable
    var countdown = 0;
    //set a variable for the correct answer amount
    var correct = 0;
    var questions;

    //Define a function that adds up the correct answers
    function scoreHandler() {
        console.log("scorehandler");
        for (var i = 1; i <= 3; i++) {
            questions = $('input[name=group' + i + ']:checked').attr("value");
            console.log("questions " + questions + "i: " + i);
            //Loop through the questions and increment correct every time the attribute correct is chosen
            // for (var x =0; x < questions.length; x++) {
            if (questions == "correct") {
                correct++;
                console.log("correct++");
                //}
            }
        }
    }

    //Count the timer down
    $("#time").timeTo(10, function () {
        $("#timer").html("Game Over!");
        countdown++;
        //Replace the hyphen with your score
        scoreHandler();
        $("#score").html(correct);
        console.log("Score: " + correct);
    });


    //Create a handler for the button and when timeTo reaches 0
    $("button").click(function () {
        //if countdown = 0 then pull the results
        //scoreHandler();
    });








});