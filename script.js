var tl = gsap.timeline();

tl.to(".text-1, .text-2, .text-3, .text-4, .text-5, .text-6, .text-7, .text-8, .text-9, .text-10, .text-23, .text-63, .text-97, .text-100", {
    opacity: 1,
    duration: 0.07,
    stagger: {
      each: 0.14, // 0.07 to show + 0.07 to hide = 0.14
      repeat: 1,
      yoyo: true
    }
  })
  
  .to(".loader", {
    display: "none",
  })
  .to(".cntr-p", {
    onStart: function () {
      $(".cntr-p").scramble(2000, 50, "alphabet", true);
    }
  }, 'scr')
  .to(".cntr-p2", {
    onStart: function () {
      $(".cntr-p2").scramble(2000, 50, "alphabet", true);
    }
  }, 'scr')
  .to(".info", {
    onStart: function () {
      $(".info").scramble(2000, 50, "alphabet", true);
    }
  }, 'scr')
  .to(".contact", {
    onStart: function () {
      $(".contact").scramble(2000, 50, "alphabet", true);
    }
  }, 'scr')
