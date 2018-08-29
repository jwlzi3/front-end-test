/**

All of this should work on index.html!

**/

// Create a function that determines if the first letter of a string is a capital letter OR loop through 1-100, printing the number to the console.

    var word = "Hello";
    console.log( word[0] === word[0].toUpperCase() );

// Generally, what does $ represent?
        // **Usually a valid identifier, which is used as an alias for jQuery.**

// Assuming jQuery is loaded, what's faster? (.on would be faster)
$('#element').on('click', function() {
  //  do something
})
// or
$('#element').click(function() {
  // do something
})

// Using vanilla JS, change the color of the .box element to green on click, and revert back to it's default state when clicked again
    
    clicked = true;
    $(document).ready(function () {
        $(".box").click(function() {
            var color = clicked ? 'purple' : 'green';
            $(this).css('background-color', color);
            clicked = !clicked;
        });
    });