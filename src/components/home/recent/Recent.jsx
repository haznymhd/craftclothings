import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = ({ showAll }) => {
  return (
    <section className='recent padding'>
      <div className='container'>
        <Heading
          title='Recent Design'
          subtitle='Our recent works exemplify exceptional quality and unwavering loyalty, surpassing expectations with every project. Trust us to deliver excellence consistently.'
        />
        <RecentCard limit={showAll ? undefined : 8} />
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
