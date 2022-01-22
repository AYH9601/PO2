import axios from "axios";
import {useEffect, useState} from "react";

const body = document.querySelector("body");

function Youtube(){
    let [data, setData] = useState([]);
    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0)

    const key = "AIzaSyDE6DkHv8EVqiL6I61K8ex5nZ7genFVd_o";
    const playListId = "PLrVltBJtL0uzzdHdf22ixDm39TlESGbFO";
    const num = 5;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

    useEffect(()=>{
        axios
        .get(url)
        .then(json=>{
            setData(json.data.items)
        })
    },[]);

    return (
        <main className="youtube">
            <div className="content inner">
                <p>Umbrella Media Center</p>
                <h1>
                    Go behind the breakthroughs and explore the stories of the work we do at Umbrella, in conversations with the scientists and leaders who make it happen. Listen to recent episodes and subscribe using your favorite podcast platform. 
                </h1>

                <button>Explore Our Media</button>

                <section className="frame">
                    <h3>Our Biotechnology Video</h3>

                    <h4>
                        Watch videos on a variety of topics on medicine, pharmacy and biotechnology
                    </h4>
                    <div className="youtubeSearchBox">
                        <input type="text" id="search" placeholder="Search for Keyword"/>

                        <button className="btnSearch">
                            <div className="arrowCircle">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </button>
                    </div>

                    {
                        data.map((item, index)=>{
                            let tit = item.snippet.title;
                            let tit_len = tit.length;

                            let desc = item.snippet.description;
                            let desc_len = desc.length;

                            return (
                                <article key={index}>
                                    <div className="inner">
                                        <div className="pic">
                                            <img src={item.snippet.thumbnails.medium.url} />
                                            <i className="fas fa-play-circle" onClick={()=>{
                                                setIsPop(true);
                                                setIndex(index)
                                            }}></i>
                                        </div>

                                        <div className="txt">
                                            <em>BIOHAZARD</em>
                                            <h2>
                                                {(tit_len > 50) ? tit = tit.substr(0, 50)+"..." : tit}
                                            </h2>
                                            {/* <i className="fas fa-play-circle" onClick={()=>{
                                                setIsPop(true);
                                                setIndex(index)
                                            }}></i> */}
                                            <p>
                                                {(desc_len > 150) ? desc = desc.substr(0, 150)+"..." : desc}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>

                <section className="data">

                    <h3>Artificial Intelligence </h3>
                    
                    <div className="dataLeft">
                        <h2>
                            Ai, Data, Cloud The convergence of all these moves us into the future.
                        </h2>
                        <button>With Artificial Intelligence</button>

                        <div className="dataBoard">
                            <ul>
                                <li>
                                    Artificial Intelligence 
                                    <i className="fas fa-arrow-right"></i>    
                                </li>
                                <li>
                                    Umbrella Cloud
                                    <i className="fas fa-arrow-right"></i>  
                                </li>
                                <li>
                                    Convergence
                                    <i className="fas fa-arrow-right"></i>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dataLoading">
                        <div className="loadingPic"></div>
                        <h2>
                            Umbrella DataCenter<br></br>
                            Artificial Intelligence 
                        </h2>
                    </div>
                </section>

                {isPop ? <Pop /> : null}
            </div>
        </main>
    )

    function Pop(){
        useEffect(()=>{
            body.style.overflow = "hidden";
            return ()=>{
                body.style.overflow = "auto";
            }
        },[])

        return(
            <aside className="pop">
                <iframe src={"https://www.youtube.com/embed/"+data[index].snippet.resourceId.videoId}  width="100%" height="100%" allowFullscreen></iframe>
                <span onClick={()=>{
                    setIsPop(false)
                }}><i className="far fa-times-circle"></i></span>
            </aside>
        )
    }
}

export default Youtube;