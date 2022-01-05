window.addEventListener("resize", function () {
  let height2 = window.innerHeight;
  console.log(height2);
  let width2 = window.innerWidth;
  console.log(width2);
  const body = document.querySelector("body");
  body.style.height = height2;
});
