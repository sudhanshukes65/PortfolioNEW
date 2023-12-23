import React from 'react'
import './Home.css';
import ME from '../../utils/sudhanshu.jpg'


const Home = () => {
  return (

   <div className="home">
        <div className="heading">
            <div>Web <br /> Developer & <br /> SEO</div>
            <hr />
            <div className='exp-project'>
                <div className='exp' >
                    <div className='exp-number'>3</div> <br /> YEARS OF <br /> EXPERIENCE
                </div>

                <div className='project'>
                <div className='project-number'>20+</div>  <br /> PROJECTS <br /> DONE
                </div>
            </div>
        </div>

        <div className="image">
            <img src={ME} alt="hero image" />
        </div>

        <div className="description">
            <br />
            <br />
        Hi, I'm Sudhanshu kesarwani, a Web Developer and React Freak based in Prayagraj.
        I create Modern & Minimal Websites
        </div>
   </div>
  )
}

export default Home
// /Users/sudhanshukesarwani/Desktop/react-projects/PortfolioNEW/src/components/home/Home.jsx
// /Users/sudhanshukesarwani/Desktop/react-projects/PortfolioNEW/src/utils/sudhanshu.jpg