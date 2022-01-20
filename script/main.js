(function () {
  const body = document.querySelector("body");
  let width = window.innerWidth;
  let height = window.innerHeight;
  const header = document.querySelector("header");
  const section = document.querySelector("section");

  const skillButton = document.querySelector(".skill_button");
  const introduceWrap = document.querySelector(".introduce_wrap");
  const introduce = document.querySelector(".introduce");
  const introContent = document.querySelectorAll(".intro");

  const projectWrap = document.querySelector(".project_wrap");
  console.log(projectWrap, ": projectWrap");
  const projectContent = document.querySelectorAll("figure.project");

  const IntroductionWrap = document.querySelector(".introduce_wrap");

  console.log("conected");
  const projects = [
    { name: "JEJU SHINWHA WORLD", left: 0, top: 0 },
    { name: "PAPA JOHNS", left: 0, top: 0 },
    { name: "COLDPLAY", left: 0, top: 0 },
    { name: "JO MALONE", left: 0, top: 0 },
    { name: "BLACKYAK", left: 0, top: 0 },
    { name: "CARROT GAME", left: 0, top: 0 },
  ];
  // 메인페이지 스크립트
  settingProjectPos();
  getWindowSize();
  //팝업창

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML =
    '<p class="p_txt">본사이트는 상업용목적이아닌 개인 포트폴리오 용도로 제작되었습니다.<br/> 일부 내용 및 이미지 등은 출처가 따로 있음을 밝힙니다.</p><i class="fa fa-times"></i>';

  body.append(popup);

  let popupClose = document.querySelector(".popup>i.fa-times");
  popupClose.addEventListener("click", () => {
    popup.classList.add("remove");
  });

  // 마우스따라서 회전하는 기능
  let mousePos = {
    x: 0,
    y: 0,
  };

  let sectionHeight = section.getBoundingClientRect().height;
  let sectionWidth = section.getBoundingClientRect().width;

  section.addEventListener("mousemove", (e) => {
    if (window.screen.width <= 768 || window.innerWidth <= 768) {
      return;
    }
    mousePos.x = -1 + (e.pageX / sectionWidth) * 2;
    mousePos.y = 1 - (e.pageY / sectionHeight) * 2;

    projectContent.forEach((project) => {
      project.style.transform =
        "rotateY(" +
        mousePos.x * 1.2 +
        "deg) rotateX(" +
        mousePos.y * 1.2 +
        "deg)";
    });
  });

  //스크롤되면서 하나씩 보이게
  function visibleIntroduce() {
    let sTop = window.pageYOffset;
    const hHeight = header.getBoundingClientRect().height;

    let introduceHeight = introduceWrap.getBoundingClientRect().height;

    for (let i = 0; i < introContent.length; i++) {
      introContent[i].classList.remove("active");
    }

    let introS_top = sTop - hHeight;
    let intro_hHeight_canScroll = introduceHeight - hHeight;
    let scrollHeight = introS_top / intro_hHeight_canScroll;

    if (scrollHeight <= 0.2) {
      for (let i = 0; i < introContent.length; i++) {
        introContent[i].classList.remove("active");
      }
      introContent[0].classList.add("active");
    } else if (scrollHeight <= 0.4) {
      for (let i = 0; i < introContent.length; i++) {
        introContent[i].classList.remove("active");
      }
      introContent[1].classList.add("active");
    } else if (scrollHeight <= 0.6) {
      for (let i = 0; i < introContent.length; i++) {
        introContent[i].classList.remove("active");
      }
      introContent[2].classList.add("active");
    } else if (scrollHeight > 0.6) {
      for (let i = 0; i < introContent.length; i++) {
        introContent[i].classList.remove("active");
      }
      introContent[3].classList.add("active");
    }
  }

  //스크롤하면서 너비 넓어지게하기
  window.addEventListener("scroll", onScrollHandler);

  function onScrollHandler() {
    const introduceWrap = document.querySelector(".introduce_wrap");

    let sTop = window.pageYOffset;

    let headerHeight = header.getBoundingClientRect().height;
    let introduceWrapHeight = introduceWrap.getBoundingClientRect().height;

    let scrollBar = (sTop / introduceWrapHeight) * 20;

    if (sTop >= headerHeight && sTop < introduceWrapHeight) {
      introduce.classList.add("fix");
      let iWidth = 80 + scrollBar;
      introduce.style.width = iWidth + "vw";
      visibleIntroduce();
    } else {
      introduce.classList.remove("fix");
    }
  }

  //스킬바

  skillButton.addEventListener("click", () => {
    const skillLabel = document.querySelectorAll(".skill_label"); //0,1,2,3
    const skillValue = [85, 80, 60, 60];
    const firstSkillLabelWidth = skillLabel[0].style.width;
    const firstSkill = firstSkillLabelWidth.split("").slice(0, 2).join("");
    const firstSkillNum = parseInt(firstSkill);

    if (firstSkillNum > 0) {
      for (let i = 0; i < skillValue.length; i++) {
        skillLabel[i].style.width = "0";
        skillLabel[i].style.opacity = "0";
      }
    } else {
      for (let c = 0; c < skillValue.length; c++) {
        for (let i = 0; i <= skillValue[c]; i++) {
          skillLabel[c].style.opacity = "1";
          skillLabel[c].style.width = `${i}%`;
        }
      }
    }
  });

  // 스티키 컨텐츠
  function getWindowSize() {
    if (IntroductionWrap) {
      let introHeight = window.innerHeight * 5;
      IntroductionWrap.style.height = `${introHeight}px`;
    }
  }

  //윈도우 리사이즈 이벤트

  window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;
    getWindowSize();
    settingProjectPos();
  });

  function settingProjectPos() {
    const projectNum = projects.length;
    const topGap = parseInt(100 / projectNum);

    calcPos(topGap);

    projectContent.forEach((elem, i) => {
      elem.style.top = `${projects[i].top}%`;
      if (width <= 768) {
        elem.style.left = "0px";
        elem.style.right = "0px";
      } else {
        if (i % 2 === 0) {
          elem.style.left = "6%";
        } else {
          elem.style.right = "7%";
        }
      }
    });
  }

  function calcPos(topGap) {
    let gap = 6;

    projects.map((elem, i) => {
      if (i === 0) {
        elem.top = gap;
        return;
      }

      elem.top = gap += topGap;
    });
  }
})();
