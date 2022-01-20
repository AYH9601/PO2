import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Board(){
    let [texts,setTexts] = useState([]);
    let len = texts.length;
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/board.json`;

    //CRUD
    const input = useRef(null);
    const textarea = useRef(null);
    const updateInput = useRef(null);
    const updateTextarea = useRef(null);
    const showBox = useRef(null);

    // const [posts, setPosts] = useState([
    //     {title:"Welcome to Umbrella", content:"Here Comes Important Notice"}
    // ]);

    const getLocalItems =()=>{
        let data = localStorage.getItem("posts");
    
        if(data){
            return JSON.parse(data)
        }else{
            return [
                {title:"Welcome to Umbrella", content:"Here Comes Important Notice"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"}
            ];
        }
    }

    const [posts, setPosts]=useState(getLocalItems)

    //게시
    const createPost=()=>{
        if(!input.current.value || !textarea.current.value){
            alert("You Need Title and Contents");
            return;
        }
        setPosts([
        {
            title: input.current.value,
            content: textarea.current.value
        }
        , ...posts
        ]);
        input.current.value="";
        textarea.current.value="";
    }

    //삭제
    const deletePost=index=>{
        setPosts(
            posts.filter((_, postIndex)=>postIndex !== index)
        )
    }

    //수정
    const enableUpdate=index=>{
        setPosts(
            posts.map((post, postIndex)=>{
                if(postIndex === index) post.enableUpdate=true;
                return post;
            })
        )
    }

    //수정 to 출력
    const disableUpdate=index=>{
        setPosts(
            posts.map((post, postIndex)=>{
                if(postIndex === index) post.enableUpdate=false;
                return post;
            })
        )
    }

    //수정해서 다시 게시
    const updatePost=index=>{
        setPosts(
            posts.map((post, postIndex)=>{
                if(postIndex === index){
                    // const article = showBox.current.children[index];
                    // const input = article.querySelector("input");
                    // const textarea = article.querySelector("textarea");
                    // post.title = input.value;
                    // post.content = textarea.value;
                    post.title = updateInput.current.value;
                    post.content = updateTextarea.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        )
    }

    useEffect(()=>{
        localStorage.setItem("posts",JSON.stringify(posts));
        axios
            .get(url)
            .then(data=>{
                setTexts(data.data.data);
            })
    },[posts]); 

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
                            texts.slice(0).reverse().map((data, index)=>{
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
                                texts.slice(3).reverse(0).map((data, index)=>{
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
                    <h1>Notice</h1>
                    <section className="inputBox">
                        <input type="text" placeholder='Please enter a Title.' ref={input}/><br />
                        <textarea cols="30" rows="5" placeholder='Please enter a Contents' ref={textarea}></textarea><br />

                        <div className="CRUDBtn">
                            <button onClick={()=>{
                                input.current.value='';
                                textarea.current.value='';
                            }}>Reset</button>

                            <button onClick={createPost}>Post</button>
                        </div>

                        <p className="CRUDcopy"> &copy; copy 2022 Umbrella Inc. All rights reserved</p>
                    </section>

                    <section className="showBox" ref={showBox}>
                        <div className="showNotice">
                            <p>Notice List</p>
                        </div>
                        {
                            posts.map((post, index)=>{
                                return (
                                    <article key={index}>
                                        {
                                            post.enableUpdate
                                            ?
                                            //수정하기
                                            <>
                                                <div className="post">
                                                    <input type="text" defaultValue={post.title} ref={updateInput}/><br></br>
                                                    <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={()=>updatePost(index)}>Enter</li>
                                                    <li onClick={()=>disableUpdate(index)}>Cancel</li>
                                                </ul>
                                            </>
                                            :
                                            //출력모드
                                            <>
                                                <div className="post">
                                                    <h2>{post.title}</h2>
                                                    <p>{post.content}</p>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={()=>enableUpdate(index)}><i className="fas fa-wrench"></i></li>
                                                    <li onClick={()=>deletePost(index)}><i className="fas fa-times-circle"></i></li>
                                                </ul>
                                            </>
                                        }
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