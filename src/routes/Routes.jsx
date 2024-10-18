// import listing path 
import Login from "../view/Login"
import Home from "../view/Home";
import Application from "../view/Application";

// pdf
import Billpreview from '../pdf/BillPreview'
import JobCreations from "../view/creations/JobCreations";

const routes = [
    
    //  login route
  { path: "/", element: <Login /> },


    // Page Routes litsing
  { path: "/dashboard", element: <Home /> },
  { path: "/application", element: <Application /> },
  { path: "/billpreview", element: <Billpreview /> },

  // page routes creations
  { path: "/job-create", element: <JobCreations /> },
 

];
export default routes;