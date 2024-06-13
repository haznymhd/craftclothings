import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background' >
        <div className="container1">
          <h2 className="container11">Our Best Services</h2>
          <p className="container111">Nothing to worry</p>
          <FeaturedCard />
        </div>
        
      </section>
    </>
  )
}

export default Featured
