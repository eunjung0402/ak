$(function(){
    // main visual swiper
    const mainSwiper = new Swiper(".visual_swiper", {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000,
        loop: true,
        loopAdditionalSlides: 1,  // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

      // 메인슬라이드 일시정지 재실행 동작
    $('.sc_visual .pause_box button').click(function(){
      $(this).hide().siblings().show();
      $(this).attr("aria-disabled", "ture").siblings().attr("aria-disabled", "false");

      if($(this).hasClass('pause_btn')){
        mainSwiper.autoplay.stop();
      }else {
        mainSwiper.autoplay.start();
      }
    })

    // header menu swiper
    const headerMenuSwiper = new Swiper(".header_swiper", {
        slidesPerView: 'auto',
        freeMode: true,
    });

    // 스크롤시 헤더부분 움직임
    $(window).scroll(function(){
      realScrollNum = $(document).scrollTop();

      if(realScrollNum > 0) {
        $('header').addClass('on');
      } else {
        $('header').removeClass('on');
      }
    })

    // 헤더 메뉴 클릭시 색상변경
    $('.menu_item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

    // main visual swiper
    const scrollMenuSwiper = new Swiper(".menu_swiper", {
      slidesPerView: "auto",
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 45,
      },
    });

    // header menu swiper
    const recMenuSwiper = new Swiper(".rec_menu_swiper", {
      slidesPerView: 'auto',
      freeMode: true,
    });

    // 오늘만 산다 시간 표시
    function todayEventTimeFn(){
      $('.sc_today .title_box .time').remove();
      let today = new Date();
      eventHour = 23 - today.getHours();
      eventMinute = 59 - today.getMinutes();
      eventSecond = 60 - today.getSeconds();

      let result = `<span class="time">
      ${(eventHour < 10) ? '0' + eventHour : eventHour}:${(eventMinute < 10) ? '0' + eventMinute : eventMinute}:${(eventSecond < 10) ? '0' + eventSecond : eventSecond}
      </span>`;

      $('.sc_today .title_box').append(result);
    }
    setTimeout(todayEventTimeFn,0);
    setInterval(todayEventTimeFn,1000);

    // aside swiper
    const asideSwiper = new Swiper(".aside_swiper", {
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides : 1,
      autoplay: {
              delay: 2000,
              disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: ".pagination",
      },
    });

    // aside pic swiper
    const asidePicSwiper = new Swiper(".aside_pic_swiper", {
      spaceBetween: 10,
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      loopedSlides: 1,
      loopAdditionalSlides : 1,
      pagination: {
        el: ".pagination",
        type: "fraction",
      },
      
    });

    // 파워딜에 시간 보이기
    function powerDealTimeFn(){
      $('.power_deal_box .time').remove();
      let today = new Date();
      hour = today.getHours();
      Minute = today.getMinutes();
      second = today.getSeconds();

      if(second < 10){
        '0' + second;
      }
      let result = `<span class="time">${hour}:${Minute}:<em>${second < 10 ? ('0'+ second) : second}</em></span>`
      
      $('.power_deal_box').append(result);
    }

    setTimeout(powerDealTimeFn,0);
    setInterval(powerDealTimeFn,1000);

    // 공식 브랜드관 swiper
    const brandSwiper = new Swiper(".brand_swiper", {
      spaceBetween: 15,
      slidesPerView: 'auto',
      freeMode: true,
    });


    // 베스트셀러 swiper
    const bestSwiper = new Swiper(".bestseller_swiper", {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
    });

    // 결제 할인 swiper
    const paySwiper = new Swiper(".pay_swiper", {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
    });


    // 카테고리 swiper
    const categorySwiper = new Swiper(".category_swiper", {
      slidesPerView: 'auto',
      freeMode: true,
    });

    // 스크롤 내리면 픽스버튼
    $(".container").on('mousewheel',function(e){
      let wheel = e.originalEvent.wheelDelta;
      
        if(wheel>0){
        //스크롤 올릴때
        $('.sc_fix').removeClass('on');
        } else {
        //스크롤 내릴때
        $('.sc_fix').addClass('on');
        }

        if($(document).scrollTop() > 300) {
          $('.sc_fix .top').addClass('on');
        } else {
          $('.sc_fix .top').removeClass('on');
        }
      });


      // 상단버튼 클릭시
      $('.sc_fix .top').click(function(){
        gsap.to(window, .7, {
          scrollTo: 0
        })
      })

     
})