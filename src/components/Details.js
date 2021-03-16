import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";

function Details({comments}) {
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)
    const [hideComments, setHideComments] = useState(false)

    const commentItems = comments.map((comment) => {
        return <Comments user={comment.user} comment={comment.comment}/> 
    })

    function handleUpvoteClick() {
        setUpvotes(upvotes + 1)
    }

    function handleDownvoteClick() {
        setDownvotes(downvotes + 1)
    }

    function handleHideComments() {
        setHideComments(!hideComments);
        console.log(hideComments)
    }
return (
    
    <div className="details">
            <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />

        <p> {video.title} </p>
        <p> {video.views} </p>
        <button className="upvotes" onClick={handleUpvoteClick}> 👍 {upvotes} </button>
        <button className="downvotes" onClick={handleDownvoteClick}> 👎 {downvotes} </button>
        <p>
        <button className="hideComments" onClick={handleHideComments}> 
            {hideComments ? "Show" : "Hide"} Comments </button>
        {hideComments ? null : commentItems}

        </p>
        {/* {hideComments ?
        <p> {video.comments[0].user} </p>
        : null}
        {hideComments ?
        <p> {video.comments[0].comment} </p>
        : null}
        {hideComments ?
        <p> {video.comments[1].comment} </p>
        :null} */}
        </div>
)}
export default Details;