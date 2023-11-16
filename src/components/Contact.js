import React from "react"
import VideoPlayer from './VideoPlayer'

const Contact= () => {
    return (
        <>
        <div className="contactbg">
        <div className="video">
        <h1 className="head1">Are you busy with life? But need a website done for your business? You are at the Right place!!</h1>
        
        <form>      
  <h1 className="contacthead">Please send your Email and we will get back to you right away!</h1>
  <input placeholder="Enter your Email" type="email" required/>
  <button className="cbutton">Submit</button>
</form>
<VideoPlayer controls ={false} />
</div>
</div>
        </>
    )
}

export default Contact


