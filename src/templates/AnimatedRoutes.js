import React from "react";
import {
  Routes, // instead of "Switch"
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";

function Admin() {
  // 👇️ redirect to external wp-admin URL
  window.location.replace('https://olielarnercms.link/wp-admin');

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
