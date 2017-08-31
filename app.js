$(document).ready(function(){       //Initialize our app.js file by loading the document when it's ready



    // $('.box').on('click',function(){    // Make it so that when we click on a pixel, it changes to white
    //     $('.box').addClass('white');
    // })



    // $('.box').on('click', function(){   //referring to the specific box we clicked on
    //     $(this).addClass('white');
    // })



    // $('.box').on('click', function() {
    //     $(this).addClass('white');
    // })
                                                    //Makes it so that when we double click, it changes back to black with removeclass
    $('.box').on('dblclick', function() {
        $(this).removeClass('white');
    })
    


    $('#reset').on('click', function(){     //Makes the reset button work
        $('.box').removeClass('white')
    })


    var color = 'white'                     //Creates a color variable and set the default to white. This color variable will be the class we add to things.


    $('#red').on('click', function() {
        color = 'red';
      })
    
      $('#blue').on('click', function() {
        color = 'blue';
      })
    
      $('#green').on('click', function() {      //Creates a click event for each color which changes the color variable on click
        color = 'green';
      })
    
      $('#yellow').on('click', function() {
        color = 'yellow';
      })
    
      $('#white').on('click', function() {
        color = 'white';
      })




      $('.box').on('click', function() {
        $(this).addClass(color);
      })
    
      $('.box').on('dblclick', function() {
        $(this).removeClass(color);             //Updates the add class functionality to reflect our color variable rather than our actual class names
      })
    
      $('#reset').on('click', function() {
        $('.box').removeClass(color)
      })



      var colors = 'white green red blue yellow'
      
        $('.box').on('dblclick', function() {
          $(this).removeClass(colors);
        })
      
        $('#reset').on('click', function() {
          $('.box').removeClass(colors)
        })





})