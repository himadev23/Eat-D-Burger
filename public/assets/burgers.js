//alert('javascript linked');
$(document).ready(function(){
  event.preventDefault();
$(".create-form").on("submit", function(event) {
    
    //event.preventDefault();

    var newBurger =  {
     burgerName :$("#burger-name").val().trim()
   };

     if(newBurger.burgerName===''){
      alert('plz enter a burger name');
      return;
     }
    console.log(newBurger);
    

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      
    });
  });

$('.eat-burger-button').on('click',function(){
  var buttonValue = $(this).data('id');
  //console.log(buttonValue);
  var burgerUpdate = {
    id:buttonValue,
    devoured:true
  }
  console.log('burgerUpdate'+ burgerUpdate);
  $.ajax('/api/update',{
    type:"PUT",
    data:burgerUpdate
  }).then(function(){
    console.log('burger eaten');
    location.reload();
  });

});
});
