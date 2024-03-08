document.addEventListener("DOMContentLoaded", function() {
    // Get all accordions in the page
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        // For each accordion, get all header buttons
        var buttons = accordion.querySelectorAll(".card-header button.panel-title");
        
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // Get the current card's panel body
                var currentCardBody = button.closest(".card").querySelector(".panel-body");
                currentCardBody.parentElement.classList.toggle( 'activeCard' );

                // Hide other card's panel bodies
                var otherCardBodies = accordion.querySelectorAll(".card .panel-body");
                otherCardBodies.forEach(function(cardBody) {
                    if (cardBody !== currentCardBody) {
                        cardBody.parentElement.classList.remove('activeCard');
                    }
                });
            });
        });
    });
});
