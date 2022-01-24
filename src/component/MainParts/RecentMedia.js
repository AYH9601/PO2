import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setYoutube } from "../../redux/actions";
import {NavLink} from "react-router-dom";

function RecentMedia(){
    const youtube = useSelector(state=>state);
    const dispatch = useDispatch();
    const vidData = youtube.youtubeReducer.youtube;

    const key = "AIzaSyDE6DkHv8EVqiL6I61K8ex5nZ7genFVd_o";
    const playListId = "PLrVltBJtL0uzzdHdf22ixDm39TlESGbFO";
    const num = 5;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

    const fetchYoutube = async ()=>{
        const response = await axios
            .get(url)
            .catch (err=>console.error(err))
    
        dispatch(setYoutube(response.data.items));
    }

    useEffect(()=>{
        fetchYoutube();
    },[]);

    return (
        <section id="recentMedia" className="myScroll">
            <div className="recentMediaInner">
                <h3>Recent Media</h3>
                <h4>Meet Umbrella through various media in everyday life</h4>

                <NavLink exact to="/Youtube">
                    <button className="recentMediaButton">Show More</button>
                </NavLink>

                <ul className="boardTag">
                    <li>Vaccine</li>
                    <li>Science</li>
                    <li>Medicine</li>
                    <li>Covid-20</li>
                    <li className="on">BIOHAZARD</li>
                    <li>Disease</li>
                    <li>CDC</li>
                    <li>Pandemic</li>
                </ul>
                <div className="vidBox">
                {
                    vidData.map((vid,index)=>{
                        if(index<4){
                            return(
                                <img key={index} src={vid.snippet.thumbnails.medium.url} />
                            )
                        }
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default RecentMedia;