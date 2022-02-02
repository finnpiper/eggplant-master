$(document).ready(function($){
  // Increment value in quantity input
  $('.qty-plus').each(function(index) {
    $(this).click(function(e) {
      $('label').addClass('filled focused');
      e.preventDefault();
      var current = $(this).siblings("input.quantity").val();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal)) {
        if ($(this).parent("#question-5") && currentVal < 10) {
          $(this).siblings("input.quantity").val(currentVal + 1);
        }
        else if ($(this).parent("#question-6") && currentVal < 50) {
          $(this).siblings("input.quantity").val(currentVal + 1);
        }
        else if ($(this).parent("#question-10")) {
          $(this).siblings("input.quantity").val(currentVal + 1);
        }
      } else {
        $(this).siblings("input.quantity").val(1);
        console.log("Failed!");
      }
    });
  });

  // Decrement value in quantity input

  $(".qty-minus").each(function(index) {
    $(this).click(function(e) {
      $('label').addClass('filled focused');
      e.preventDefault();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal) && currentVal > 0) {
        $(this).siblings("input.quantity").val(currentVal - 1);
      } else {
        $(this).siblings("input.quantity").val(0);
      }
    });
  });
});