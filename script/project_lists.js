(function () {
  // 스크롤했을때 앞으로 튀어나오는거.뭘이동시키지? 하우스
  const articleElem = document.querySelector("article");
  const sectionElem = document.querySelector("section");
  const aside = document.querySelector("aside");
  const mousePos = { x: 0, y: 0 };

  let bodyHeight = document.body.offsetHeight;
  let windowInnerHeight = window.innerHeight;
  let maxScrollValue = bodyHeight - windowInnerHeight;

  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768) {
      scrollAnimation();
    } else {
      zAnimation();
    }
  });

  window.addEventListener("mousemove", function (e) {
    // console.log(e.clientX,e.clientY);
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

    sectionElem.style.transform =
      "rotateX(" + mousePos.y * 5 + "deg) rotateY(" + mousePos.x * 5 + "deg)";
  });

  function zAnimation() {
    let scrollPer = window.pageYOffset / maxScrollValue;
    const zMove = scrollPer * 850 - 490; //0~1인걸0~1000으로

    if (window.pageYOffset > 100) {
      aside.style.opacity = "0";
    } else {
      aside.style.opacity = "0.8";
    }

    articleElem.style.transform = `translateZ(${zMove}vw)`;
  }

  function scrollAnimation() {
    console.log("diff");
  }
})();
