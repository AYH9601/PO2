import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { LatestStories } from "../component/common";




const path = process.env.PUBLIC_URL;

function Gallery(){
    let [loading, setLoading] = useState(true);
    let [enableClick, setEnableClick] = useState(true);
    let input = useRef(null);
    // let [interest, setInterest] = useState(true);

    let [items, setItems] = useState([]);
    let list = useRef(null);

    useEffect(()=>{
        getFlickr({
            type: "search",
            count: 6,
            tags : "vaccine"
        })
    },[]);

    return (
        <section className="content gallery">
            <div className="inner">
                <div className="galleryUpper">
                    <p>Meet Our Medical Activity</p>
                    <h1 onClick={()=>{
                        if(enableClick){
                            setEnableClick(false);
                            list.current.classList.remove("on");
                            getFlickr({
                                type: "search",
                                count: 6,
                                tags : "vaccine"
                            });
                            setLoading(true);
                        }
                    }}>
                        Read our latest stories on the people and scientific innovations making a difference in patients’ lives. 
                    </h1>
                </div>

                <div className="galleryLower">
                    <article id="searchBox">
                        <input type="text" ref={input} onKeyPress={e=>{
                            if(e.key !== "Enter") return;
                            if(enableClick){
                                setEnableClick(false);
                                // setInterest(false);
                                list.current.classList.remove("on");
    
                                const tags = input.current.value
                                input.current.value = "";
                                getFlickr({
                                    type: "search",
                                    count: 6,
                                    tags : tags
                                });
                                setLoading(true);
                            }

                        }} id="search" placeholder="Search for an article or story" />
                        <button onClick={()=>{
                            if(enableClick){
                                setEnableClick(false);
                                // setInterest(false);
                                list.current.classList.remove("on");
    
                                const tags = input.current.value
                                input.current.value = "";
                                getFlickr({
                                    type: "search",
                                    count: 6,
                                    tags : tags
                                });
                                setLoading(true);
                            }

                        }} className="btnSearch">
                            <div className="arrowCircle">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </button>
                    </article>

                    <article id="imgBox">
                        <h2>Category</h2>
                        <div className="categoryBox">
                            <ul>
                                <li onClick={()=>{
                                    if(enableClick){
                                        setEnableClick(false);
                                        list.current.classList.remove("on");
                                        input.current.value = "";
                                        getFlickr({
                                            type: "search",
                                            count: 6,
                                            tags : "science"
                                        });
                                        setLoading(true);
                                    }
                                }}>Science</li>
                                <li onClick={()=>{
                                    if(enableClick){
                                        setEnableClick(false);
                                        list.current.classList.remove("on");
                                        input.current.value = "";
                                        getFlickr({
                                            type: "search",
                                            count: 6,
                                            tags : "scientist"
                                        });
                                        setLoading(true);
                                    }
                                }}>Our people</li>
                                <li onClick={()=>{
                                    if(enableClick){
                                        setEnableClick(false);
                                        list.current.classList.remove("on");
                                        input.current.value = "";
                                        getFlickr({
                                            type: "search",
                                            count: 6,
                                            tags : "family"
                                        });
                                        setLoading(true);
                                    }
                                }}>Our Purpose</li>
                                <li onClick={()=>{
                                    if(enableClick){
                                        setEnableClick(false);
                                        list.current.classList.remove("on");
                                        input.current.value = "";
                                        getFlickr({
                                            type: "search",
                                            count: 6,
                                            tags : "pharmacy"
                                        });
                                        setLoading(true);
                                    }
                                }}>Our Products</li>
                                <li onClick={()=>{
                                    if(enableClick){
                                        setEnableClick(false);
                                        list.current.classList.remove("on");
                                        input.current.value = "";
                                        getFlickr({
                                            type: "search",
                                            count: 6,
                                            tags : "healthy"
                                        });
                                        setLoading(true);
                                    }
                                }}>Your Health</li>
                                <li onClick={()=>{
                                    if(enableClick){
                                        setEnableClick(false);
                                        list.current.classList.remove("on");
                                        input.current.value = "";
                                        getFlickr({
                                            type: "search",
                                            count: 6,
                                            tags : "education"
                                        });
                                        setLoading(true);
                                    }
                                }}>Career</li>
                            </ul>
                        </div>

                        {(loading) ? <img className="loading" src={path+"/img/loadingRed.gif"} /> : ""}
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

                <LatestStories></LatestStories>

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

    async function getFlickr(opt){

        let url = "";
        const baseURL = "https://www.flickr.com/services/rest/?";
        // const method1 = "flickr.interestingness.getList";
        const method1 = "flickr.photos.search";
        const key= "2fb9756d5c2a17287d72e1361294b949";
        const count = opt.count; //3의 배수

        if(opt.type === "interest"){
            url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=vaccine`;
        }else if(opt.type === "search"){
            url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=${opt.tags}`;
        }else {
            console.error("You have to set api type, interest or search")
        }

        // const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=vaccine`;

        await axios
        .get(url)
        .then(json=>{
            setItems(json.data.photos.photo)
        },[])

        setTimeout(()=>{
            list.current.classList.add("on")
            setLoading(false);

            setTimeout(()=>{
                setEnableClick(true);
            },500)
        },500)
    }
}

export default Gallery;