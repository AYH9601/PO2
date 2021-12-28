import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Gallery(){
    const baseURL = "https://www.flickr.com/services/rest/?";
    // const method1 = "flickr.interestingness.getList";
    const method1 = "flickr.photos.search";
    const key= "2fb9756d5c2a17287d72e1361294b949";
    const count = 6; //3의 배수
    const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=vaccine`;

    // let tag = input.value

    let [items, setItems] = useState([]);

    let list = useRef(null);

    useEffect(()=>{
        getFlickr()
    },[]);

    return (
        <section className="content gallery">
            <div className="inner">
                <div className="galleryUpper">
                    <p>Meet Our Medical Activity</p>
                    <h1>
                        Read our latest stories on the people and scientific innovations making a difference in patients’ lives. 
                    </h1>
                </div>

                <div className="galleryLower">
                    <article id="searchBox">
                        <input type="text" id="search" placeholder="Search for an article or story" />
                        <button className="btnSearch">
                            <div className="arrowCircle">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </button>
                    </article>

                    <article id="imgBox">
                        <h2>Category</h2>
                        <div className="categoryBox">
                            <ul>
                                <li>Science</li>
                                <li>Our people</li>
                                <li>Our Purpose</li>
                                <li>Our Products</li>
                                <li>Your Health</li>
                                <li>Career</li>
                            </ul>
                        </div>

                        <ul className="list" ref={list}>
                            {
                                items.map((item, index)=>{
                                    const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`

                                    return (
                                        <li key={index}>
                                            <div className="pic">
                                                <img src={imgSrc} />
                                            </div>

                                            <p>{item.title}</p>
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus maiores distinctio adipisci, in laborum neque ducimus voluptas reprehenderit quasi, voluptates eos doloribus debitis quae beatae voluptatibus, reiciendis quisquam vero aliquid odit? Nihil voluptates,
                                            </span>

                                            <div className="tagBox">
                                                <h4>Vaccines</h4>
                                                <h4>T-virus</h4>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="pagination">
                            <p>
                                <div className="leftCircle">
                                    <i className="fas fa-arrow-left"></i>
                                </div>
                            </p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>
                                <div className="rightCircle">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </p>
                        </div>
                    </article>
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
                        <button>News Hub</button>
                    </article>
                </div>

                <div className="media">
                    <h3>Media Resources & Contact Information</h3>
                    <div className="mediaLeft">
                        <ul>
                            <li>
                                Media Contacts
                                <i className="fas fa-arrow-right"></i>    
                            </li>
                            <li>
                                Press Kits
                                <i className="fas fa-arrow-right"></i>
                            </li>
                            <li>
                                Company Fact Sheet
                                <i className="fas fa-arrow-right"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="mediaRight">
                        <h2>
                            Anyone may view our press releases, press statements, and press kits. However, to ensure that customers, investors, and others receive the appropriate attention, Pfizer Media Contacts may only respond to calls and emails from professional journalists.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )

    async function getFlickr(){
        await axios
        .get(url)
        .then(json=>{
            setItems(json.data.photos.photo)
        },[])

        setTimeout(()=>{
            list.current.classList.add("on")
        },100)
    }

    // function search(){
    //     const url_search = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=${tag}&privacy_filter=1`;
    // }
}

export default Gallery;