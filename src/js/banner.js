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
        delay: 500000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      on: {
        init: function () {
          console.log("Swiper initialized");
          // Tạo custom pagination
          createCustomPagination(this);
        },
        slideChange: function () {
          // Cập nhật custom pagination khi slide thay đổi
          updateCustomPagination(this);
        },
      },
    });

    function createCustomPagination(swiperInstance) {
      // Đếm số lượng slides thực tế (không bao gồm slide trùng lặp do loop)
      // Cách tính toán mới để đảm bảo đúng số lượng slides
      const totalSlides = 5; // Hard-code số lượng slides thực tế bạn có

      console.log(
        "Creating custom pagination with " + totalSlides + " bullets"
      );

      const customPaginations = document.querySelectorAll(".custom-pagination");

      customPaginations.forEach((pagination) => {
        pagination.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
          const bullet = document.createElement("span");
          bullet.classList.add("custom-bullet");
          if (i === swiperInstance.realIndex) {
            bullet.classList.add("custom-bullet-active");
          }
          bullet.dataset.index = i;
          pagination.appendChild(bullet);

          // Thêm event listener
          bullet.addEventListener("click", function () {
            swiperInstance.slideToLoop(parseInt(this.dataset.index));
          });
        }
      });
    }

    function updateCustomPagination(swiperInstance) {
      const customPaginations = document.querySelectorAll(".custom-pagination");

      customPaginations.forEach((pagination) => {
        const bullets = pagination.querySelectorAll(".custom-bullet");
        bullets.forEach((bullet) => {
          if (parseInt(bullet.dataset.index) === swiperInstance.realIndex) {
            bullet.classList.add("custom-bullet-active");
          } else {
            bullet.classList.remove("custom-bullet-active");
          }
        });
      });
    }
  } catch (error) {
    console.error("Error initializing Swiper:", error);
  }
});
