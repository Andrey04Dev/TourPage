import React from 'react'
import './Video.css'

const Video = (props) => {
    return (
        <div>
            <video width='100%' height='100%' controls>
                <source src={props.src} type={props.type}/>
            </video>
        </div>
    )
}

export default Video
