$(function(){
  "use strict";


    $('.bar-trigger').click(function(){
      $('#mySidenav').css('width', '450px');
    });
    $('.closebtn').click(function(){
      $('#mySidenav').css('width', '0px');
    });


    $('.search-trigger').click(function(){
      $(this).attr('search-close', true);

      $('#mySearchbar').show();
      $('#mySearchbar').css('width', '450px');
    });





    // Get the elements
    const searchTrigger = document.querySelector('.search-trigger');
    const searchbar = document.getElementById('mySearchbar');

    // Function to open the search bar
    searchTrigger.addEventListener('click', function() {
        searchbar.style.display = 'block'; // Show the search bar
    });

    // Close the search bar when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the clicked target is not the search bar or the bar trigger
        if (!searchbar.contains(event.target) && !searchTrigger.contains(event.target)) {
            searchbar.style.display = 'none'; // Hide the search bar
        }
    });






});