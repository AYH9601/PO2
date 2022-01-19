import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Board(){
    let [posts,setPosts] = useState([]);
    let len = posts.length;
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/board.json`;

    //CRUD
    const input = useRef(null);
    const textarea = useRef(null);
    const showBox = useRef(null);
    const [memo, setMemo] = useState([
        {title:"Hello", content:"Here Comes Description in Detail"}
    ]);

    //CRUD
    const createPost=()=>{
        setMemo([
        {
            title: input.current.value,
            content: textarea.current.value
        }
        , ...memo
        ]);
        input.current.value="";
        textarea.current.value="";
    }

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
                                posts.slice(3).reverse(0).map((data, index)=>{
                                    return (
                                        <tr key={index} className="communityInner">
                                            <td>{len-index+1212}</td>
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

                {/* CRUD */}
                <div className="boardCRUD">
                    <h1>Create CURD</h1>
                    <section className="inputBox">
                        <input type="text" placeholder='제목을 입력하세요.' ref={input}/><br />
                        <textarea cols="30" rows="10" placeholder='본문을 입력하세요.' ref={textarea}></textarea><br />

                        <button onClick={()=>{
                            input.current.value='';
                            textarea.current.value='';
                        }}>Reset</button>
                        <button onClick={createPost}>Post</button>
                    </section>
                    <section className="showBox" ref={showBox}>
                        {
                            memo.map((memo, index)=>{
                            return (
                                <article key={index}>
                                <h2>{memo.title}</h2>
                                <p>{memo.content}</p>
                                </article>
                            )
                            })
                        }
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Board;