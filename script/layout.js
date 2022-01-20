//서브,메인 공통 스크립트

(function () {
  const toggleBtn = document.querySelector("div.toggle");
  const gnbWrap = document.querySelector(".gnb_wrap");
  const gnbList = document.querySelector(".gnb ul");
  const section = document.querySelector("section");

  //토글 버튼
  toggleBtn.addEventListener("click", function (e) {
    this.classList.toggle("active");

    if (e.target.classList.contains("active")) {
      gnbWrap.classList.add("act");
    } else {
      gnbWrap.classList.remove("act");
    }
  });
  //gnb 밖에 클릭시 창 닫기
  gnbWrap.addEventListener("click", function (e) {
    if (e.target.classList.contains("act")) {
      gnbWrap.classList.remove("act");
      toggleBtn.classList.remove("active");
    }
  });

  //gnb메뉴 hover시
  gnbList.addEventListener("mouseover", function (e) {
    const targetElem = e.target;
    targetElem.classList.add("active");
    targetElem.addEventListener("mouseleave", function (e) {
      this.classList.remove("active");
    });
  });

  //하단 더보기 버튼
  const moreBtn = document.querySelector(".more_btn");
  const moreMenu = document.querySelector(".menu");

  moreBtn.addEventListener("click", function (e) {
    this.classList.toggle("active");
    moreMenu.classList.toggle("active");
  });

  //진행 바
  window.addEventListener("scroll", (e) => {
    let sTop = window.pageYOffset;
    let totalHeight = document.body.offsetHeight - window.innerHeight;
    let sPos = sTop / totalHeight;
    const progressBar = document.querySelector(".progress_bar");

    progressBar.style.height = sPos * 230 + "px";
  });
})();
