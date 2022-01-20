(function () {
  // 스크롤했을때 앞으로 튀어나오는거.뭘이동시키지? 하우스
  const articleElem = document.querySelector("article");
  const sectionElem = document.querySelector("section");
  const aside = document.querySelector("aside");
  const mousePos = { x: 0, y: 0 };

  let bodyHeight = document.body.offsetHeight;
  let windowInnerHeight = window.innerHeight;
  let maxScrollValue = bodyHeight - windowInnerHeight;

  zPosSetting();

  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768) return;
    else zAnimation();
  });

  window.addEventListener("mousemove", function (e) {
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

  function zPosSetting() {
    const projectNum = document.querySelectorAll(".project");
    const gapCount = projectNum.length - 1;
    const gap = 820 / gapCount;
    let gapSize = 400;

    console.log(gap, ": gap");

    projectNum.forEach((elem, i) => {
      console.log(i, elem);
      if (i === 0) {
        elem.style.transform = "translateZ(400vw)";
      } else if (i === projectNum.length - 1) {
        elem.style.transform = "translateZ(-420vw)";
      } else {
        gapSize -= gap;
        console.log(gapSize);
        elem.style.transform = `translateZ(${gapSize}vw)`;
      }
    });
  }
})();
