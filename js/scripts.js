$(document).ready(function () {
    $('#date-result').hide();
    $('form#dating').submit(function (event) {
        var age = parseInt($("input.age").val());
        var gender = $("select#gender").val();

        var person_1 = "date someone like George Clooney!";
        var person_2 = "date someone like Kate Beckinsale!";
        var person_3 = "Finish College first and have fun!";
        var person_4 = "should date your neighbor!";
        var person_5 = "play with toys!";


        if (gender) {
            if (age > 39) {
                person = person_4;
            } else if (age <= 15) {
                person = person_5;
            } else if (age <= 20) {
                person = person_3;
            } else if (gender === "male") {
                person = person_2;
            } else if (gender === "female") {
                person = person_1;
            }
            $("#person").empty().append(person);
            $('#date-result').show();

        } else {
            alert("If you don't tell us your gender, we won't be able to find a good match!");
        }

        event.preventDefault();
    });
});
