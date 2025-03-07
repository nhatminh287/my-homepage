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
      // Bỏ navigation
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        init: function () {
          console.log("Swiper initialized successfully");
        }
      },
    });

    // Debug info
    console.log("Swiper instance created:", swiper);

    // Xóa event listeners cho navigation buttons vì không còn nút nữa
  } catch (error) {
    console.error("Error initializing Swiper:", error);
  }
});
