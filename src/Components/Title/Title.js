import React from 'react'
import './Title.css'

const Title = () => {
  return (
    <div className='title-container'>
        <div className='title'>
            <p>Title</p>
        </div>
        <div className='title-desc'>
            <p>
                This is the title of the web page. You're welcome.
            </p>
        </div>
        <div className='title-btn'>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Title