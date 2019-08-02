$(document).ready(function(){
    var mySwiper = new Swiper ( ".swiper-container", {
        direction: "horizontal",
        speed:200,
        slidesPerView: 'auto',
        freeMode : true,
        freeModeMomentumRatio : 0.7,
        freeModeMomentumVelocityRatio :0.7,
        scrollbar: {
            el: ".swiper-scrollbar", // 捲軸物件
            hide: true,
        }
    })
});
      