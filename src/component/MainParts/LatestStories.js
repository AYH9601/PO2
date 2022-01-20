function LatestStories(){
    return (
        <div className="inner myScroll">
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
        </div>
    )
}

export default LatestStories;