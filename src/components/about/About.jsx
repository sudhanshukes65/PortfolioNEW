import React from 'react'
import "./About.css"
import web from "../../utils/Web-Development.jpg"
const About = () => {
  return (
    <div className='about'>
        <div className='skills'>
            <button>React</button><button>JavaScript</button><button>C++</button><button>MongoDB</button><button>SQL</button>
        </div>

        <div className="add">
            <div>
                Hire Me
            </div>
            <div>Prayagraj,UP <br /> sudhanshukes65@gmail.com </div>
        </div>
        <div className="imagee">
            <img src={web} alt="" />
        </div>
    </div>
  )
}

export default About