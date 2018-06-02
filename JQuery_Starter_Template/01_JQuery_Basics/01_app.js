$('#success-button').click(function () {
    $('#success-card').fadeToggle();


    var buttonVal = $(this).attr('value'); //to get the value of attr value
    if(buttonVal === 'HIDE'){
        $(this).attr('value','SHOW');//to set the attr 'value' show
    }
    else{
        $(this).attr('value','HIDE');//to set the attr 'value' hide
    }
});