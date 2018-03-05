/*$(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger =  $("#ca").val().trim();
    console.log(newBurger);
    

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });*/
