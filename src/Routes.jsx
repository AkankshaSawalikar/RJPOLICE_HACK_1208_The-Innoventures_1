import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
const GovtLogin = React.lazy(() => import("pages/GovtLogin/gov"));
const HomePage = React.lazy(() => import("pages/HomePage/home"));
const Founder = React.lazy(() => import("pages/Founder/founder"));
const InvestorPage = React.lazy(() => import("pages/InvestorPage/investor"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/investorpage" element={<InvestorPage />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/homepage" element={<HomePage />} />
          <Route path="/govtlogin" element={<GovtLogin />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
