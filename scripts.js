document.addEventListener('DOMContentLoaded',function(){
    console.log('im ready')
})


//number value on click

    $('.number').on('click',function(){
    var buttonText=$(this).text()
    $('#readout').append(buttonText)
    })


//highlight
$('.button').on('mousedown',function(){
    $(this).addClass('red')
})
$('.button').on('mouseup',function(){
    $(this).removeClass('red')
})
//clear button

$('#clear').on('click',function(){
    $('.result').empty()
})


//add button
$('#add').on('click',function(){
    
})

//subtract button
$('#subtract').on('click',function(){
    //something
})

//divide
$('#divide').on('click',function(){
   //something
})

//multiply
$('#multiply').on('click',function(){
   //something
})

//equals
$('#result').on('click',function(){
  // $('#readout').text('hi')
})




//when you press =


//function that takes the value (up to two numbers) of button clicked