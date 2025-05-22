import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
const Nav = ({ showMenu, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          // 좌우 슬라이드 애니메이션 framer motion 사용
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6 }}
          style={{ background: "linear-gradient(145deg, #121212, #1e1f26)" }}
          className="page-wrap fixed top-0 right-0 w-full h-screen z-[999]"
        >
          <div className="p-4 sm:p-9 sm:relative w-full h-screen">
            <button
              className="font-black absolute z-50 font-russo menu-close"
              onClick={onClose}
            >
              CLOSE
            </button>
            <nav className="w-full h-full sm:relative page-wrap max-sm:gap-y-3">
              <div className="inline-flex flex-wrap flex-col max-sm:gap-y-3">
                <Link
                  to="/"
                  className={`${
                    currentPath === "/" ? "" : "nav outline"
                  } xl:text-8xl sm:text-7xl xs:text-6xl text-5xl w-fit font-black font-russo inline-block text-slate-200`}
                  onClick={onClose}
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  className={`${
                    currentPath === "/about" ? "" : "nav outline"
                  } xl:text-8xl sm:text-7xl xs:text-6xl text-5xl w-fit font-black xl:mt-9 sm:mt-6 font-russo inline-block text-slate-200`}
                  onClick={onClose}
                >
                  ABOUT ME
                </Link>
                <Link
                  to="/project"
                  className={`${
                    currentPath === "/project" ? "" : "nav outline"
                  } xl:text-8xl sm:text-7xl xs:text-6xl text-5xl w-fit font-black xl:mt-9 sm:mt-6 font-russo inline-block text-slate-200`}
                  onClick={onClose}
                >
                  PROJECTS
                </Link>
              </div>
              <div className="flex sm:absolute sm:bottom-0">
                <Link
                  to="/contact"
                  className={`${
                    currentPath === "/contact" ? "" : "nav outline"
                  } xl:text-8xl sm:text-7xl xs:text-6xl text-5xl font-black font-russo inline-block text-slate-200`}
                  onClick={onClose}
                >
                  CONTACT
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
