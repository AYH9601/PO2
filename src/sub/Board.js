import axios from "axios";
import { useEffect, useState } from "react";

function Board(){
    let [posts,setPosts] = useState([]);
    let len = posts.length;
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/board.json`;

    useEffect(()=>{
        axios
            .get(url)
            .then(data=>{
                setPosts(data.data.data);
            })
    },[]); 

    return (
        <section className="content board">
            <div className="inner">
                <p>Information Board</p>
                
                <div className="boardInner">
                    <div className="boardLeft">
                        <h1>
                        Browse our community and find information about the products that are best for you.
                        </h1>

                        <article id="BoardSearchBox">
                            <input type="text" id="search" placeholder="Looking for a Symptoms?"/>
                            <button className="btnSearch">
                                <div className="arrowCircle">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </article>

                        <ul className="boardTag">
                            <li>Vaccine</li>
                            <li>Science</li>
                            <li>Medicine</li>
                            <li>Covid-20</li>
                            <li>T-virus</li>
                            <li>Hospital</li>
                            <li>BIOHAZARD</li>
                            <li>Disease</li>
                            <li>CDC</li>
                            <li>Pandemic</li>
                            <li>Transport</li>
                        </ul>
                    </div>

                    <div className="boardRight">
                        {
                            posts.slice(0).reverse().map((data, index)=>{
                                let tit = data.title;
                                let tit_len = tit.length;
                                
                                return (
                                    <article key={index} className="boardDown">
                                        <div className="boardDownPost">
                                            <div className="boardDownNum">
                                                <h1>{len-index}</h1>
                                            </div>

                                            <div className="boardDownTitle">
                                                <h2>{(tit_len > 48) ? tit = tit.substr(0, 48)+"..." : tit}</h2>
                                                <h3>{data.date}</h3>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="boardLower">
                    <p>
                        Community Board
                    </p>
                    <table summary="community">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Title</th>
                                <th>ID</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.slice(0).reverse(0).map((data, index)=>{
                                    return (
                                        <tr key={index} className="communityInner">
                                            <td>{len-index}</td>
                                            <td>{data.title}</td>
                                            <td>{data.writer}</td>
                                            <td>{data.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

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
                </div>
            </div>
        </section>
    )
}

export default Board;