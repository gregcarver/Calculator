document.addEventListener('DOMContentLoaded',function(){
    console.log('im ready')
})

var operateValues="+ - * /"
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

//add button
$('#add').on('click',function(){
    $('#readout').empty()
    numArray.push(operateValues[0])
})

//Put result in readout
$('#result').on('click',function(){
    $('#readout').empty()
    var solution=(numArray.join("")),
        answer=eval(solution)
    $('#readout').append(answer)
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
    numArray.length=0
})

//subtract button
$('#subtract').on('click',function(){
    $('#readout').empty()
    numArray.push(operateSplit[1])
})

//divide
$('#divide').on('click',function(){
    $('#readout').empty()
    numArray.push(operateSplit[3])
})

//multiply
$('#multiply').on('click',function(){
    $('#readout').empty()
    numArray.push(operateSplit[2])
})
