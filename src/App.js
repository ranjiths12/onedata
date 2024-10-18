import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-quill/dist/quill.snow.css'; 
import './components/Components.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './view/Page.css';
import routes from './routes/Routes';
import Login from "./view/Login";
import Layout from "./routes/LayOut";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} 
              element={ <Layout>{route.element}</Layout>} 
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
