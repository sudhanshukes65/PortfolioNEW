import React from 'react'
import "./About.css"
import web from "../../utils/Web-Development.jpg"
const About = () => {
  return (
    <div className='about'>
        <div className='skills'>
            <button className='javascript' >JavaScript</button>
            <button className='MongoDB'>MongoDB</button>
            <br />
            <button className='React'>React</button>
            <button className='C'>C++</button>
            <button className='SQL'>SQL</button>
        </div>

        <div className="add">
            <div className='add-hire'>
                *HIRE ME!
            </div>
            <div className='add-up'>Prayagraj,UP  </div>
            <div className="add-email">sudhanshukes65@gmail.com</div>
        </div>
        <div className="imagee">
            <img src={web} alt="" />
        </div>
    </div>
  )
}

export default About