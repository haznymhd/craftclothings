import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='' title='About Us - What we do?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About our company' subtitle='our works' />

            <p>I work at a leading company known for crafting high-quality jerseys and offering top-tier printing services. <br />
            Our focus on innovation and customer satisfaction drives us to deliver customized solutions for sports teams, <br />
             schools, and retail consumers. As a software developer, I integrate advanced technology into our <br />
             production processes, optimizing efficiency and enhancing our digital platforms to ensure seamless operations <br />
             and exceptional product quality</p>
            <p>We prioritize sustainability and ethical practices throughout our operations, sourcing materials responsibly and 
              minimizing our environmental impact. Looking ahead, we are committed to growth and innovation in the garment industry,  <br />
              exploring new product lines and leveraging data analytics to anticipate market trends. Our goal is to maintain our 
              position as industry leaders, delivering outstanding jerseys and printing services that meet and exceed our customers' expectations</p>
          </div>
          <div className='right row'>
            <img src='./immio1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
