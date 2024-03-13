import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam error sed quidem quos</p> <p>modi vel praesentium nostrum hic natus tempora dolor eveniet, ea ad iste!</p> <p>Ullam debitis laborum voluptatem vero, unde id quam vitae, fuga doloribus sequi, reprehenderit rerum nobis quisquam omnis alias iste fugiat facere ut sapiente. Ad enim corporis eos ducimus laborum tempora culpa unde. Pariatur!</p>
            </div>
        </div>
    )
}

export default About