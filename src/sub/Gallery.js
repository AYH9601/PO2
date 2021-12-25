import axios from "axios";
import { useEffect, useState } from "react";

function Gallery(){
    const baseURL = "https://www.flickr.com/services/rest/?";
    const method1 = "flickr.interestingness.getList";
    const key= "2fb9756d5c2a17287d72e1361294b949";
    const count = 10;
    const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;

    let [items, setItems] = useState([]);

    useEffect(()=>{
        axios
        .get(url)
        .then(json=>{
            setItems(json.data.photos.photo)
        })
    })

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
                        <button className="btnSearch"><i className="fas fa-arrow-right"></i></button>
                    </article>





                    <ul className="list">
                        {
                            items.map((item, index)=>{
                                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`

                                return (
                                    <li key={index}>
                                        <div className="pic">
                                            <img src={imgSrc} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Gallery;