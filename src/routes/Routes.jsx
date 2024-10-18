// import listing path 
import Login from "../view/Login"
import Home from "../view/Home";
import Jobs from "../view/Jobs";
import ApplicationListing from "../view/ApplicationListing";
// pdf
import Billpreview from '../pdf/BillPreview'

// creations 
import JobCreations from "../view/creations/JobCreations";
import ApplicationDetails from "../view/ApplicationDetails";

const routes = [
    
    //  login route
  { path: "/", element: <Login /> },


    // Page Routes litsing
  { path: "/dashboard", element: <Home /> },
  { path: "/joblisting", element: <Jobs /> },
  { path: "/applicationdetails/:id", element: <ApplicationDetails /> },
  { path: "/applicationlisting", element: <ApplicationListing /> },

  // pdf view
  { path: "/billpreview", element: <Billpreview /> },

  // page routes creations
  { path: "/job-create", element: <JobCreations /> },
];
export default routes;