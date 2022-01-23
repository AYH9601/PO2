import MainOne from "../component/MainParts/MainOne";
import MainTwo from "../component/MainParts/MainTwo";
import LatestStories from "../component/MainParts/LatestStories"
import BoardNews from "../component/MainParts/BoardNews"
import MainThree from "../component/MainParts/MainThree";
import MainFour from "../component/MainParts/MainFour";
import MainFive from "../component/MainParts/MainFive";
import MainSix from "../component/MainParts/MainSix";
import MainSeven from "../component/MainParts/MainSeven";
// import MainEight from "../component/MainParts/MainEight";
import RecentMedia from "../component/MainParts/RecentMedia";
import Btns from "../component/MainParts/Btns";

import Anime from '../class/anime.js';
import { useEffect, useState, useRef } from 'react';

function Main(){
    const main = useRef(null);   
    const pos = useRef([]);  

    const [index, setIndex] = useState(0);  

    const getIndex = index=>{
        setIndex(index);
    }

    useEffect(()=>{     
        handleResize();    
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        new Anime(window,{
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })
    
        return ()=>{  
            window.removeEventListener('resize', handleResize);  
            window.removeEventListener('scroll', handleScroll);
        }
    },[index]);

    const handleResize = ()=>{   
        const secs = main.current.querySelectorAll('.myScroll');
        let arr = [];
        for(let sec of secs) arr.push(sec.offsetTop);
        pos.current = arr;   
    }

    const handleScroll = ()=>{   
        let scroll = window.scrollY;   
        const btns = main.current.querySelectorAll('#btns li');   
        pos.current.map((pos,index)=>{
            if(scroll>=pos){
                for(const btn of btns) btn.classList.remove('on');
                btns[index].classList.add('on');    
            }
        })   
    }

    return (
        <section className="content main" ref={main}>

            <MainOne></MainOne>

            <div className="inner">
                <MainTwo></MainTwo>

                <LatestStories></LatestStories>

                <BoardNews></BoardNews>

                <RecentMedia></RecentMedia>

                <MainThree></MainThree>

                <MainFour></MainFour>

                <MainFive></MainFive>

                <MainSix></MainSix>

                <MainSeven></MainSeven>

                {/* <MainEight></MainEight> */}

                <Btns getIndex={getIndex}></Btns>
            </div>
        </section>
    )
}

export default Main;