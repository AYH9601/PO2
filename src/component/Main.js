import axios from "axios";
import { useEffect, useState } from "react";



function Main(){
    //seven
    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios
            .get("../../public/dbs/science.json")
            .then(data=>{
                setPosts(data.data.data);
            })
    },[])

    return (
        <section className="content main">
            <div className="one">
                <h1>Hope Changes<br></br>Lives</h1>
                <p>
                    We’re in relentless pursuit of scientific breakthroughs and revolutionary<br></br> medicines that will create a healthier world for everyone. 
                </p>
                <button>
                    Explore Our Science
                </button>
            </div>

            <div className="inner">
                <div className="two">
                    <h3>Featured Article</h3>
                    <div className="twoLeft"></div>
                    <div className="twoRight">
                        <h4>The Art of Creating<br></br>New Medicines</h4>
                        <p>
                            Scientists are often lauded for their objectivity, persistence, and analytic thinking. But great scientists have something else in common: they think like artists. And for those who create life-changing medicines, their process is as much an art form as a science. 
                        </p>
                        <button>Go Behind the Science</button>
                    </div>
                </div>

                <div className="latestStories">
                    <h3>Latest Stories</h3>

                    <article>
                        <h4>Science</h4>
                        <ul>
                            <li className="LSTitle">
                                How Does a Virus Inhibitor Work
                            </li>
                            <li className="LSArticle">
                                The FDA has authorized Umbrella's COVID-20 oral treatment for emergency use.</li>
                        </ul>
                        <div className="LSPic">
                            <div className="articlePic1">
                            </div>
                        </div>
                    </article>

                    <article>
                        <h4>Our<br></br>Products</h4>
                        <ul>
                            <li className="LSTitle">Finally, A Cure For Progeria Has Been Completed.</li>
                            <li className="LSArticle">
                                After the efforts of many scientists, we have created a treatment using a new virus.</li>
                        </ul>
                        <div className="LSPic">
                            <div className="articlePic2">
                            </div>
                        </div>
                    </article>

                    <article>
                        <h4>Our<br></br>Purpose</h4>
                        <ul>
                            <li className="LSTitle">Umbrella's Institue Vision</li>
                            <li className="LSArticle">We will protect humanity with an umbrella.</li>
                        </ul>
                        <div className="LSPic">
                            <div className="articlePic3">
                            </div>
                        </div>
                    </article>

                    <article>
                        <button>See More News</button>
                    </article>
                </div>

                <div className="three">
                    <h3>eBook</h3>
                    <div className="threeLeft"></div>
                    <div className="threeRight">
                        <h4>Are You Making the Most of Patient Centricity?</h4>
                        <p>
                            Healthcare opportunities are only useful to you if you know they exist and how they work. This downloadable eBook is designed to help you make informed healthcare decisions.
                        </p>
                        <button>Learn How to Be an Empowerd, Engaged Patient</button>
                    </div>
                </div>

                <div className="four">
                    <h3>The Umbrella Store</h3>
                    <div className="fourLeft"></div>
                    <div className="fourRight">
                        <h4>
                            Show Your Umbrella Pride! Shop and share the collection.Available in the U.S. only.<br></br> <br></br>All profits from The Umbrella Store will be donated to charity.
                        </h4>
                        <button>Shop The Umbrella Collection</button>
                    </div>
                </div>

                <div className="five">
                    <h3>Coronavirus Resources</h3>
                    <span>
                        While we continue to see the devastating impact of the coronavirus pandemic around the world, we’re committed to helping keep people safe and informed. 
                    </span>
                    <button>More On COVID-20</button>

                    <div className="fiveLower">
                        <ul>
                            <li>
                                <div className="fivePic"></div>
                                <h1>Our Vaccine Efforts</h1>
                                <p>
                                    Follow the latest progress in the development, manufacturing, and distribution of our vaccine to help protect against the novel coronavirus.
                                </p>
                                <strong>Learn About Our Vaccine Efforts</strong>
                            </li>
                            <li>
                                <div className="fivePic"></div>
                                <h1>Our Antiviral Efforts</h1>
                                <p>If successful, antivirals can help slow or stop a virus from replicating and thereby reduce the symptoms associated with COVID-20 and the risk of significant health complications.</p>
                                <strong>Learn About Promising Antivirals</strong>
                            </li>
                            <li>
                                <div className="fivePic"></div>
                                <h1>Collaborating to Address COVID-20</h1>
                                <p>We’re collaborating across the healthcare innovation ecosystem to help advance research and address the COVID-20 global health crisis.</p>
                                <strong>How We Collaborate to Address the COVID-20 Crisis</strong>
                            </li>
                            <li>
                                <div className="fivePic"></div>
                                <h1>Supporting Those Fighting on the Front Lines</h1>
                                <p>The Pfizer Foundation is supporting our partners who are working tirelessly to address the evolving health needs related to COVID-20 in the U.S. and around the world.</p>
                                <strong>Learn About The Umbrella Foundation</strong>
                            </li>
                        </ul>
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

                <div className="six">
                    <h3>News</h3>
                    <span>
                        Headlines, releases, hot topics, and more. Stay informed, knowledge is power. 
                    </span>
                    <button>Explore News</button>
                </div>

                <div className="seven">
                    <h3>Science</h3>
                    <div className="sevenLeft">
                        <p>
                            Biotechnology is our foundation. Benefiting patients is our goal. Innovation, pharmaceutical development, and the most dedicated team of clinical researchers is how we do it. 
                        </p>
                        <button>Explore Our Science</button>
                    </div>
                    <div className="sevenRight">
                        <ul>
                            <li>
                                <div className="sevenPic"></div>
                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;