$(".gallery div").on("click", function (e) {
  $(this).toggleClass("lightbox");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
