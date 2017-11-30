$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

//AJAX PUT request, then reload with updated info
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bgr").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

//AJAX POST request, then reload with updated info
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

//AJAX DELETE request, then reload with updated info
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
