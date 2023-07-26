$(document).ready(function(){
    $(".filter_menu_cover > ul > li").click(function() {

        // Find the dropdown inside the clicked li and set its display property to "flex"
        $('.filter_menu_cover > ul > li').find(".dropdown").css("display", "none");

        
        // Remove the "active" class from all li elements
        $(".filter_menu_cover > ul > li").removeClass("active");
        

        // Add the "active" class to the clicked li element
        $(this).addClass("active");

        // Find the dropdown inside the clicked li and set its display property to "flex"
        $(this).find(".dropdown").css("display", "block");
    });


    $(document).click(function(event) {
        // Check if the clicked element is inside .filter_menu_cover
        if (!$(event.target).closest('.filter_menu_cover').length) {
            // If not, hide all dropdowns and remove the "active" class from all li elements
            $(".filter_menu_cover > ul > li").removeClass("active").find(".dropdown").css("display", "none");
        }
    });


    $("#skip_to_content").click(function(e) {
        e.preventDefault();
        $(".skip_links").hide();
    });





    // Number of cards to load on each scroll event
    var cardsToLoad = 5;

    // Check every 300ms the scroll position
    $(document).on('scroll', _.throttle(function () {
        checkIfNeedsMoreContent();
    }, 300));

    function checkIfNeedsMoreContent() {
        var $placeholder = $('.infinite-scroll-placeholder');
        var pixelsFromWindowBottomToPlaceholder = $placeholder.offset().top - $(window).scrollTop() - $(window).height();

        if (pixelsFromWindowBottomToPlaceholder < 2) {
            // Here it would go an ajax request to fetch more card content
            loadMoreContent();
        }
    }

    function loadMoreContent() {
        // Simulating AJAX request delay (remove this in a real implementation)
        setTimeout(function () {
            var $cardContainer = $('.row');

            // Clone the last "cardsToLoad" number of cards and append them
            for (var i = 0; i < cardsToLoad; i++) {
                var $lastCard = $cardContainer.children().last();
                $cardContainer.append($lastCard.clone());
            }
        }, 500); // Adjust this time to simulate actual AJAX request time
    }


})