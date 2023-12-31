import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">

      <ul>
        <li>
          <Link to="/investorpage">InvestorPage</Link>
        </li>
        <li>
          <Link to="/founder">Founder</Link>
        </li>
        <li>
          <Link to="/homepage">HomePage</Link>
        </li>
        <li>
          <Link to="/govtlogin">GovtLogin</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
