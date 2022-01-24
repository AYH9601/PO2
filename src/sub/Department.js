import axios from "axios";
import { useEffect, useState } from "react";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Department(){
    let [posts,setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/department.json`

    useEffect(()=>{
        axios
            .get(url)
            .then(data=>{
                setPosts(data.data.data);
            })
    },[]); 
    
    return (
        <section className="content department">
            <div className="inner">
                <div className="departmentUpper">
                    <p>Executive Leadership</p>
                    <h1>
                        Meet the executive leadership team, our senior-most leadership and decision-making management body who focus on major financial, strategic, and operational decisions for the entire company.
                    </h1>
                </div>
                
                <div className="profileSection">
                    {/* <div className="profileInner">
                        {
                            posts.map((data, index)=>{
                                return (
                                    <article key={index} className="profile">
                                        <div className="pic"></div>
                                        <h2>{data.Name}</h2>
                                        <strong>{data.position}</strong>
                                        <span>Learn more</span>
                                    </article>
                                )
                            })
                        }
                    </div> */}

                    <Swiper className="profileInner"
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        // loop
                        grabCursor
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        {
                            posts.map((data, index)=>{
                                return (
                                    <SwiperSlide key={index} className="profile">
                                        <div className="pic"></div>
                                        <h2>{data.Name}</h2>
                                        <strong>{data.position}</strong>
                                        <span>Learn more</span>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <div className="pagination">
                        <div className="leftCircle">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="rightCircle">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                
                <div className="know">
                    <h3>Get to Know Us</h3>
                    
                    <div className="knowLeft">
                        <h2>
                            Meet all the amazing people who make up our company and who are working to improve and extend patients’ lives everywhere.
                        </h2>
                    </div>
                    <div className="knowRight">
                        <ul>
                            <li>
                                Board Members
                                <i className="fas fa-arrow-right"></i>    
                            </li>
                            <li>
                                Scientists
                                <i className="fas fa-arrow-right"></i>
                            </li>
                            <li>
                                About Umbrella
                                <i className="fas fa-arrow-right"></i>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="careers">
                    <h3>Our Careers</h3>
                    
                    <div className="careersUpper">
                        <h1>
                            Incredible things can happen when people come together with one shared goal. The future of medicine is happening here, and we’re eager to work alongside inspired and inspirational people who want to improve health around the world.
                        </h1>
                        <button>Explore our Careers</button>
                    </div>

                    <div className="careersLower">
                        <ul>
                            <li>
                                <div className="careersPic"></div>
                                <p>Opportunities for Veterans</p>
                                <span>
                                    Leadership. Honor. A sense of purpose. The qualities you demonstrated as a member of the armed forces are valued at Umbrella. 
                                </span>
                                <em>Explore Veteran Opportunities</em>
                            </li>
                            <li>
                                <div className="careersPic"></div>
                                <p>Careers in Science</p>
                                <span>
                                    We’re turning advanced science and technologies into therapies that make a real difference. Join us, and your efforts could impact millions of people.
                                </span>
                                <em>Explore Science Careers</em>
                            </li>
                            <li>
                                <div className="careersPic"></div>
                                <p>Breakthrough Fellowship Program</p>
                                <span>
                                    We want to create a workplace for all. That’s why we’re committed to increasing diversity and fostering inclusivity in this first-of-its-kind, nine-year fellowship program.
                                </span>
                                <em>Explore Our Fellowship Program</em>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="investors">
                    <h3>To Our Investors</h3>
                    <div className="investorsLeft">
                        <p>
                            Our ambitions are big and our product pipeline has never been stronger. We’re energized and inspired to apply science and our global resources to develop and deliver breakthrough therapies to people everywhere.
                        </p>
                        <button>To Our Investors</button>
                    </div>
                    <div className="investorsRight">
                        <Swiper className='swiperInvestorSlide'
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        loop
                        grabCursor
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className="swiperInvestorSlideBox">
                                <div className="investorsPic1"></div>
                                <h3>Why Invest</h3>                            
                            </SwiperSlide>
                            <SwiperSlide  className="swiperInvestorSlideBox">
                                <div className="investorsPic2"></div>
                                <h3>Financial Reports</h3>                            
                            </SwiperSlide>
                            <SwiperSlide  className="swiperInvestorSlideBox">
                                <div className="investorsPic3"></div>
                                <h3>Events and Presentations</h3>                            
                            </SwiperSlide>
                            <SwiperSlide  className="swiperInvestorSlideBox">
                                <div className="investorsPic4"></div>
                                <h3>Stock Information</h3>                            
                            </SwiperSlide>
                            <SwiperSlide  className="swiperInvestorSlideBox">
                                <div className="investorsPic5"></div>
                                <h3>Investor News</h3>                         
                            </SwiperSlide>
                            <SwiperSlide  className="swiperInvestorSlideBox">
                                <div className="investorsPic6"></div>
                                <h3>Shareholder Services</h3>                       
                            </SwiperSlide>
                        </Swiper>

                        {/* <ul>
                            <li>
                                <div className="investorsPic"></div>
                                <h3>Why Invest</h3>
                            </li>
                            <li>
                                <div className="investorsPic"></div>
                                <h3>Financial Reports</h3>
                            </li>
                            <li>
                                <div className="investorsPic"></div>
                                <h3>Events and Presentations</h3>
                            </li>
                            <li>
                                <div className="investorsPic"></div>
                                <h3>Stock Information</h3>
                            </li>
                            <li>
                                <div className="investorsPic"></div>
                                <h3>Investor News</h3>
                            </li>
                            <li>
                                <div className="investorsPic"></div>
                                <h3>Shareholder Services</h3>
                            </li>
                        </ul> */}
                    </div>

                    <div className="pagination">
                        <div className="leftCircle">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="rightCircle">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Department;