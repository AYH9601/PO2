import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function MainSeven(){
    return(
        <div className="seven myScroll">
            <h3>Science</h3>
            <div className="sevenLeft">
                <p>
                    Biotechnology is our foundation. Benefiting patients is our goal. Innovation, pharmaceutical development, and the most dedicated team of clinical researchers is how we do it. 
                </p>
                <button>Explore Our Science</button>
            </div>

            <div className="sevenRight">
                <Swiper className='swiper6Slide'
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={25}
                    slidesPerView={"auto"}
                    loop
                    // grabCursor
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='swiper6SlideBox'>
                            <div className="sevenPic1"></div>
                            <h3>Oncology</h3>
                            <h4>Conquering Cancer</h4>
                        </SwiperSlide>
                        <SwiperSlide className='swiper6SlideBox'>
                            <div className="sevenPic2"></div>
                            <h3>Inflammation & Immunology</h3>
                            <h4>Innovation, Research & Development</h4>
                        </SwiperSlide>
                        <SwiperSlide className='swiper6SlideBox'>
                            <div className="sevenPic3"></div>
                            <h3>Vaccines</h3>
                            <h4>Driven to Discover the Cure</h4>
                        </SwiperSlide>
                        <SwiperSlide className='swiper6SlideBox'>
                            <div className="sevenPic4"></div>
                            <h3>Rare Disease</h3>
                            <h4>Our Approach to Gene Therapy and More</h4>
                        </SwiperSlide>
                        <SwiperSlide className='swiper6SlideBox'>
                            <div className="sevenPic5"></div>
                            <h3>Internal Mdeicine</h3>
                            <h4>Advancing the Fight</h4>
                        </SwiperSlide>
                        <SwiperSlide className='swiper6SlideBox'>
                            <div className="sevenPic6"></div>
                            <h3>Anti Infectives</h3>
                            <h4>New Drugs, Medicines & Therapies</h4>
                        </SwiperSlide>
                </Swiper>
            </div>


            {/* <div className="sevenRight">
                <ul>
                    <li>
                        <div className="sevenPic"></div>
                        <h3>Oncology</h3>
                        <h4>Conquering Cancer</h4>
                    </li>
                    <li>
                        <div className="sevenPic"></div>
                        <h3>Inflammation & Immunology</h3>
                        <h4>Innovation, Research & Development</h4>
                    </li>
                    <li>
                        <div className="sevenPic"></div>
                        <h3>Vaccines</h3>
                        <h4>Driven to Discover the Cure</h4>
                    </li>
                    <li>
                        <div className="sevenPic"></div>
                        <h3>Rare Disease</h3>
                        <h4>Our Approach to Gene Therapy and More</h4>
                    </li>
                    <li>
                        <div className="sevenPic"></div>
                        <h3>Internal Mdeicine</h3>
                        <h4>Advancing the Fight</h4>
                    </li>
                    <li>
                        <div className="sevenPic"></div>
                        <h3>Anti Infectives</h3>
                        <h4>New Drugs, Medicines & Therapies</h4>
                    </li>
                </ul>
            </div> */}

            <div className="pagination">
                <div className="leftCircle">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="rightCircle">
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default MainSeven;