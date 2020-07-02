import React from 'react'
import './Video.css'

const Video = (props) => {
    return (
        <div>
            <video  className='video'  controls>
                <source src={props.src} type={props.type}/>
            </video>
        </div>
    )
}

export default Video
