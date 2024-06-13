import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";


const Recent = ({ showAll }) => {
  return (
    <section className='recent padding'>
              <div className="box1">
              <h2 className="box11">Jersey Design</h2>
        <Heading 
          subtitle='Place your order with us today and experience our commitment to excellence! Our jerseys feature top-quality materials and vibrant prints, ensuring you receive nothing but the best.'
        />
        </div>
      <div className='container' >
        <RecentCard limit={showAll ? undefined : 8} /> <br />
        {!showAll && (
          <div className="show-more">
            <Link to="/recentpage">
              <button className="show-more-btn">Show More</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Recent;
