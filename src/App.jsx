// import React from "react";
// import { StickyNavbar, Footer, Home, Services } from "./components";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <StickyNavbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { StickyNavbar, Footer, Main } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "./Transitions.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <StickyNavbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}> 
          <Routes location={location}>
            <Route path="/" element={<Main />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default App;


