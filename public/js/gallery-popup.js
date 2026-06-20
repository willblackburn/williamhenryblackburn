$(".gallery div").on("click", function () {
  if (!$(this).hasClass("lightbox")) {
    $(".gallery .lightbox").removeClass("lightbox");
  }
  $(this).toggleClass("lightbox");
});
