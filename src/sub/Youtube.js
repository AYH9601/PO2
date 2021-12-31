import axios from "axios";
import {useEffect, useState} from "react";

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
        console.log(data)
    },[]);

    return (
        <main className="youtube">
            <div className="content inner">
                <p>Umbrella Media Center</p>
                <h1>
                    Go behind the breakthroughs and explore the stories of the work we do at Umbrella, in conversations with the scientists and leaders who make it happen. Listen to recent episodes and subscribe using your favorite podcast platform. 
                </h1>

                <section className="frame">
                    {
                        data.map((item, index)=>{
                            let tit = item.snippet.title;
                            let tit_len = tit.length;

                            let desc = item.snippet.description;
                            let desc_len = desc.length;

                            return (
                                <article key={index}>
                                    <div className="inner">
                                        <div className="pic" onClick={()=>{
                                                setIsPop(true);
                                                setIndex(index)
                                        }}>
                                            <img src={item.snippet.thumbnails.medium.url} />
                                        </div>

                                        <div className="txt">
                                            <h2>
                                                {(tit_len > 50) ? tit = tit.substr(0, 50)+"..." : tit}
                                            </h2>
                                            <i className="fas fa-play-circle"></i>
                                            <p>
                                                {(desc_len > 250) ? desc = desc.substr(0, 250)+"..." : desc}
                                            </p>
                                        </div>


                                    </div>
                                </article>
                            )
                        })
                    }
                </section>

                {isPop ? <Pop /> : null}
            </div>
        </main>
    )

    function Pop(){
        return(
            <aside className="pop">
                <iframe src={"https://www.youtube.com/embed/"+data[index].snippet.resourceId.videoId}  width="100%" height="100%" allowFullscreen></iframe>
                <span onClick={()=>{
                    setIsPop(false)
                }}>Close</span>
            </aside>
        )
    }
}

export default Youtube;