import React from 'react'
import "./Post.scss" 
import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons"
const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/jaedon_profile.jpg" alt="" />
                        <span className="postUsername">Jaedon Lee</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                
                <div className="postCenter">
                    <span className="postText">인생이 쉽지가 않아~</span>
                    <img className="postImg" src="/assets/post/babyjs.png" alt="" />
                </div>
                
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="likeIcon" htmlColor="gold" />
                        <Favorite className="likeIcon" htmlColor="tomato" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
