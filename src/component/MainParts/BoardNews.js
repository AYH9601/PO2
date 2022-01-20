import {NavLink} from "react-router-dom";
import { useEffect,useState } from "react";

function BoardNews(){
    const getLocalItems=()=>{
        let data = localStorage.getItem("posts");

        if(data){
            let result = JSON.parse(data)
            result = result.splice(0,7);
            return result;
        }else {
            return [
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"},
                {title:"Covid-20 Warning", content:"Very Lethal Biohazard"}
            ]
        }
    }

    const [posts]=useState(getLocalItems)

    useEffect(()=>{
        localStorage.setItem("posts", JSON.stringify(posts));
    },[posts])

    return(
        <section id="boardNews" className="myScroll">
            <div className="inner">
                <h3>RECENT Critical Notice</h3>
                <div className="txtBox">
                    {
                        posts.map((post,index)=>{
                            return(
                                <article key={index} >
                                    <NavLink exact to="/Board"><h4>{post.title}</h4></NavLink>
                                    <p>{post.content}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BoardNews;