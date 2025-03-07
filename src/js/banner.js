document.addEventListener("DOMContentLoaded", function () {
  // Check if Swiper is loaded
  if (typeof Swiper === "undefined") {
    console.error("Swiper is not loaded!");
    return;
  }

  try {
    var swiper = new Swiper(".mySwiper", {
      loop: true, // Lặp vô hạn
      autoplay: {
        delay: 3000, // Tự động chuyển slide sau 3 giây
        disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        init: function () {
          console.log("Swiper initialized successfully");
        },
        navigationNext: function () {
          console.log("Next navigation clicked");
        },
        navigationPrev: function () {
          console.log("Prev navigation clicked");
        },
      },
    });

    // Debug info
    console.log("Swiper instance created:", swiper);

    // Add manual event listeners for navigation buttons
    document
      .querySelector(".swiper-button-next")
      .addEventListener("click", function () {
        console.log("Next button clicked manually");
        swiper.slideNext();
      });

    document
      .querySelector(".swiper-button-prev")
      .addEventListener("click", function () {
        console.log("Prev button clicked manually");
        swiper.slidePrev();
      });
  } catch (error) {
    console.error("Error initializing Swiper:", error);
  }
});
