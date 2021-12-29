import axios from "axios";
import { useEffect, useState } from "react";

function Board(){
    // json객체로부터 받을 빈 배열을 스테이트로 생성
    let [posts,setPosts] = useState([]);
    let len = posts.length; // posts라는 배열의 length값을 숫자값으로 선언해준것

    // 컴포넌트가 랜더링된 순간 
    useEffect(()=>{
        // axios로 외부 데이터 호출
        axios
            .get("process.env.PUBLIC_URL/dbs/department.json")
            .then(data=>{
                // 전달받은 데이터를 setPosts 함수를 이용해서 posts 스테이트에 담음
                setPosts(data.data.data);
            })
            console.log("test")
    },[]); 
    // 뒤에 의존할 state 값을 []를 써서 비워두면 해당 useEffet 함수는 처음 컴포넌트가 랜더링 된 시점 한번만 실행이 되고 추후 state값 변경이 될 때에는 아무런 동작을 하지 않음. 데이터 불러올때 상용구문 처럼 사용됨.

    return (
        <section className="content board">
            <div className="inner">
                <h1>Board</h1>
                {
                    //posts 스테이트에 담겨있는 배열의 갯수만큼 반복을 돌면서 article 생성
                    //state값을 역으로 순서를 바꾼다음에 반복처리 .slice(0).revese(0), 게시글은 최신글이 상단에 올라가야 하기 때문
                    posts.slice(0).reverse().map((data, index)=>{
                        return (
                            <article key={index} className="board">
                                <h1>{len-index}</h1> {/* 배열의 length값에서 숫서만큼을 뺀것*/}
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