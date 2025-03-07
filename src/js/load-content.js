function loadPage(page) {
  fetch(`pages/${page}`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Lỗi tải trang:", error));
}

// Load trang chủ mặc định khi mở website
document.addEventListener("DOMContentLoaded", function () {
  loadPage("home.html");
});
