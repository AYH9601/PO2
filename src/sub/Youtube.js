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
            <div className="inner">
                <p>Umbrella Media Center</p>

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
                                        <div className="txt">
                                            <h2>
                                                {(tit_len > 40) ? tit = tit.substr(0, 40)+"..." : tit}
                                            </h2>
                                            <p>
                                                {(desc_len > 150) ? desc = desc.substr(0, 150)+"..." : desc}
                                            </p>
                                        </div>

                                        <div className="pic" onClick={()=>{
                                            setIsPop(true);
                                            setIndex(index)
                                        }}>
                                            <img src={item.snippet.thumbnails.medium.url} />
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