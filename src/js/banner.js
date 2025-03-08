document.addEventListener("DOMContentLoaded", function () {
  // Check if Swiper is loaded
  if (typeof Swiper === "undefined") {
    console.error("Swiper is not loaded!");
    return;
  }

  try {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 1000000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false, // Turn off dynamic bullets for consistent appearance
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        }
      },
      on: {
        init: function () {
          console.log("Swiper initialized successfully");
          // Force pagination visibility after initialization
          document.querySelector('.swiper-pagination').style.display = 'flex';
          document.querySelector('.swiper-pagination').style.justifyContent = 'center';
        },
        slideChangeTransitionEnd: function () {
          // Force pagination visibility after slide change
          document.querySelector('.swiper-pagination').style.display = 'flex';
          document.querySelector('.swiper-pagination').style.justifyContent = 'center';
        }
      },
    });

    // Debug info
    console.log("Swiper instance created:", swiper);
    
    // Make sure pagination is visible by adding a small delay
    setTimeout(function() {
      if (document.querySelector('.swiper-pagination')) {
        document.querySelector('.swiper-pagination').style.display = 'flex';
        document.querySelector('.swiper-pagination').style.justifyContent = 'center';
      }
    }, 500);
    
    // Add event listeners for the "Find out more" buttons
    document.querySelectorAll('.find-out-more').forEach(function(button, index) {
      button.addEventListener('click', function() {
        console.log(`Find out more clicked for slide ${index + 1}`);
        // Add your navigation or action logic here
      });
    });
    
  } catch (error) {
    console.error("Error initializing Swiper:", error);
  }
});
