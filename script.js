const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
