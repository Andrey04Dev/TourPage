import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './Video.scss'

const Video = (props) => {
    return ReactDOM.createPortal (
        <Fragment>
            <video  className='video'  controls>
                <source src={props.src} type={props.type}/>
            </video>
        </Fragment>, document.querySelector('#header')
    )
}

export default Video
