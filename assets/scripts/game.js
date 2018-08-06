//ready the document
$(document).ready(function () {

    //set a countdown variable
    var countdown = 0;
    //Count the timer down
    $("#time").timeTo(10, function () {
        $("#timer").html("Game Over!");
        countdown++;
        //Replace the hyphen with your score
        $("#score").html(correct)
    });


    //Create a handler for the button and when timeTo reaches 0
    $("button").click(function () {
        //if countdown = 0 then pull the results
        if (countdown == 0) {
            //define a variable for the correct amount of guesses
            var correct = 0;
            //Loop through the questions using getElementsByName
            for (var i = 0; i <= 10; i++) {
                var questions = document.getElementsByName("group" + i);
                //Loop through the questions and increment correct every time the attribute correct is chosen
                for (var x =0; x < questions.length; x++) {
                    if (questions.value == "correct" && questions.checked) {
                        correct++;
                    }
                }
            }
        }
    });









});