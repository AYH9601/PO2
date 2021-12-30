import axios from "axios";
import { useEffect, useState } from "react";

function Board(){
    let [posts,setPosts] = useState([]);
    let len = posts.length;
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/board.json`

    useEffect(()=>{
        axios
            .get(url)
            .then(data=>{
                setPosts(data.data.data);
            })
            console.log("test")
    },[]); 

    return (
        <section className="content board">
            <div className="inner">
                <h1>Board</h1>
                {
                    posts.slice(0).reverse().map((data, index)=>{
                        return (
                            <article key={index} className="board">
                                <h1>{len-index}</h1>
                                <h2>{data.title}</h2>
                                <strong>{data.writer}</strong>
                                <span>{data.date}</span>
                                <em>{data.like}</em>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Board;