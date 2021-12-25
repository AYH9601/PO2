function Main(){
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
                            Show Your Pfizer Pride! Shop and share the collection.Available in the U.S. only.<br></br> <br></br>All profits from The Umbrella Store will be donated to charity.
                        </h4>
                        <button>Shop The Umbrella Collection</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;