// import React from "react";
// import { StickyNavbar, Footer, Main } from "./components";
// import { Route, Routes, useLocation } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./App.css";
// import "./Transitions.css";

// const App = () => {
//   const location = useLocation();

//   return (
//     <div className="app">
//       <StickyNavbar />
//       <TransitionGroup>
//         <CSSTransition key={location.key} classNames="slide" timeout={300}> 
//           <Routes location={location}>
//             <Route path="/" element={<Main />} />
//           </Routes>
//         </CSSTransition>
//       </TransitionGroup>
//       <Footer />
//     </div>
//   );
// };

// export default App;


import React, { Suspense, lazy } from "react";
import { StickyNavbar, Footer } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "./Transitions.css";
import Loader from "./Loader";

const Main = lazy(() => import("./components/Main"));

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <StickyNavbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>
          <Suspense fallback={<Loader />}>
            <Routes location={location}>
              <Route path="/" element={<Main />} />
            </Routes>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default App;



