document.addEventListener('DOMContentLoaded',function(){
    console.log('im ready')
})

var operateValues="+ - * ÷ ="
var operateSplit=operateValues.split(" ")
var numArray= [ ]

console.log(operateSplit)

//Get operator
$('.operate').on('click',function getOperator(e){
    ('#'+this.e)
    var operateText=$(this).text()
   // $('#readout').append(operateText)
})

//number value on click

$('.number').on('click',function(){
    var buttonText=$(this).text()
    $('#readout').append(buttonText)
    numArray.push(buttonText)
    console.log(buttonText)
    console.log(numArray)

})


$('#add').on('click',function(){
    $('#readout').empty()
    numArray.push(operateValues[0])
    console.log(operateValues[0])

})

//Put result in readout
$('#result').on('click',function(){
    $('#readout').empty()
    var solution=(numArray.join("")),
        answer=eval(solution)
    $('#readout').append(answer)
})

var evaluate=function(){
    //input one *operator* input two
}

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
    numArray.length=0
})


//add button

//subtract button
$('#subtract').on('click',function(){
    eval('x'-'y')
})

//divide
$('#divide').on('click',function(){
   eval('x'/'y')
})

//multiply
$('#multiply').on('click',function(){
   eval('x'*'y')
})

//equals
/*($('#result').on('click',function(){
   $('#readout').eval(getNumbers()+getOperator()+getNumbers())
})*/




//when you press =


//function that takes the value (up to two numbers) of button clicked