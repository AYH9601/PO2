import { Swiper, SwiperSlide } from "https://unpkg.com/swiper@7/swiper-bundle.esm.brower.min.js";

function MainEight() {
  return(
    // <!-- Slider main container -->
    <div class="swiper">
      {/* <!-- Additional required wrapper --> */}
      <div class="swiper-wrapper">
        {/* <!-- Slides --> */}
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
      </div>
      {/* <!-- If we need pagination --> */}
      <div class="swiper-pagination"></div>
    
      {/* <!-- If we need navigation buttons --> */}
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
  )
}

export default MainEight;