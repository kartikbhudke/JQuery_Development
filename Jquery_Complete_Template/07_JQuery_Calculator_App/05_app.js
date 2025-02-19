/* Add your JQuery code Here */

$('#plus-button').click(function() {
    $('#operator').text('+');
});

$('#minus-button').click(function() {
    $('#operator').text('-');
});

$('#div-button').click(function() {
    $('#operator').text('/');
});

$('#mul-button').click(function() {
    $('#operator').text('*');
});

$('#equals_button').click(function() {

    var num1 = $('#first_number').val();
    var num2 = $('#second_number').val();

    if(!(num1.length === 0 && num2.length === 0)){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var operator = $('#operator').text().trim();
        var result = 0;
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        $('#result_button').text(result);
    }
    else{
        $('#result_button').text("RESULT");
    }
});

$('#clear-button').click(function() {
    $('#first_number').val("");
    $('#second_number').val("");
    $('#operator').text('+');
    $('#result_button').text('RESULT');
});

