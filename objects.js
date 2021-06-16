(function() {

    // Contains the items you want to parallax.
    var parallaxContainer = document.getElementById('parallax-container');

    // The elements you want to parallax.
    var parallaxItems = document.getElementsByClassName('parallax');

    // Use this value to adjust the amount of parallax in response to mouse movement.
    var fixer = 0.0030;

    document.addEventListener("mousemove", function(event) {

        // get the mouseX - negative on left, positive on right
        var pageX = event.pageX - (parallaxContainer.getBoundingClientRect().width * 0.5);

        // same here, get the y. use console.log(pageY) to see the values
        var pageY = event.pageY - (parallaxContainer.getBoundingClientRect().height * 0.5);


        for (i = 0; i < parallaxItems.length; i++) {
            var item = parallaxItems[i];
            var speedX = item.getAttribute("data-speed-x");
            var speedY = item.getAttribute("data-speed-y");

            // Instead of using 'TweenLite.set' you can use 'TweenLite.to' which results in a smoother initial transition (when the mouse enters) at the cost of some preformance. 
            // Change the '+' to '-' if you want to invert the parallax motion in relation to the mouse movement.
            TweenLite.set(item, {
                x: (item.offsetLeft + pageX * speedX) * fixer,
                y: (item.offsetTop + pageY * speedY) * fixer
            });
        }
    });
})();