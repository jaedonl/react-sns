import React from 'react'
import "./Rightbar.scss" 
import { Cake } from "@material-ui/icons"

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <Cake className="birthdayImg" htmlColor="tomato" />
                    <span className="birthdayText">
                        <b>Donald Trump</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>

                <img className="rightbarAd" src="/assets/curryads.jpg" alt="" />

                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className="rightbarFrinedList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/teemo_profile.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>

                        <span className="">Teemo Captain</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/jaesoon_profile.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>

                        <span className="">Jaesoon Lee</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
