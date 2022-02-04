(function () {
  const toggleBtn = document.querySelector("div.toggle");
  const gnbWrap = document.querySelector(".gnb_wrap");
  const gnbList = document.querySelector(".gnb ul");
  const section = document.querySelector("section");

  toggleBtn.addEventListener("click", function (e) {
    this.classList.toggle("active");

    if (e.target.classList.contains("active")) {
      gnbWrap.classList.add("act");
    } else {
      gnbWrap.classList.remove("act");
    }
  });

  gnbWrap.addEventListener("click", function (e) {
    if (e.target.classList.contains("act")) {
      gnbWrap.classList.remove("act");
      toggleBtn.classList.remove("active");
    }
  });

  gnbList.addEventListener("mouseover", function (e) {
    const targetElem = e.target;
    targetElem.classList.add("active");
    targetElem.addEventListener("mouseleave", function (e) {
      this.classList.remove("active");
    });
  });

  const moreBtn = document.querySelector(".more_btn");
  const moreMenu = document.querySelector(".menu");

  moreBtn.addEventListener("click", function (e) {
    this.classList.toggle("active");
    moreMenu.classList.toggle("active");
  });

  window.addEventListener("scroll", (e) => {
    let sTop = window.pageYOffset;
    let totalHeight = document.body.offsetHeight - window.innerHeight;
    let sPos = sTop / totalHeight;
    const progressBar = document.querySelector(".progress_bar");

    progressBar.style.height = sPos * 230 + "px";
  });
})();
