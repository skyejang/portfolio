import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { AnimatePresence, color, motion } from "framer-motion";
const DetailPage = ({ data, onClose }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} // 배경 클릭 시 닫기
          transition={{ duration: 0.3 }}
          className="bg-black/50 fixed inset-0 z-999 flex items-end"
        >
          <motion.div
            key="modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // 내용 클릭 시 닫힘 방지
            className={`bg-white rounded-t-2xl p-9 fixed top-9 w-full shadow-md overflow-y-auto transform transition-transform duration-300 ${
              visible ? "translate-y-0" : "translate-y-full"
            }"}`}
            style={{ height: "calc(100vh - 36px)" }}
          >
            <Heading as="h3" color={data.colorSet.name} text={data.title} />
            <button
              onClick={handleClose}
              className="arrow-btn w-8 h-8 absolute top-5 right-5 cursor-pointer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.0403 11.9594C22.4308 12.3499 22.4308 12.9831 22.0403 13.3736L16.7069 18.7069C16.3164 19.0975 15.6833 19.0975 15.2927 18.7069L9.9594 13.3736C9.56887 12.9831 9.56887 12.3499 9.9594 11.9594C10.3499 11.5689 10.9831 11.5689 11.3736 11.9594L15.9998 16.5856L20.6261 11.9594C21.0166 11.5689 21.6498 11.5689 22.0403 11.9594Z"
                  fill="#2B2B2B"
                />
              </svg>
            </button>
            {/* project type & link */}
            <div className="my-6 md:my-9 md:flex">
              <div className="flex-1">
                <p className="detail-title">Project Type</p>
                <p className="detail-content">{data.work_type}</p>
              </div>
              <div className="flex-1 max-md:mt-6">
                {data.link && (
                  <>
                    <p className="detail-title">Link</p>
                    <a
                      className="detail-content hover:underline"
                      href={data.link}
                      target="_blank"
                    >
                      {data.link}
                    </a>
                  </>
                )}
              </div>
            </div>
            {/* description */}
            <>
              <p className="detail-title">Description</p>
              {data.description.map((description, i) => (
                <p className="detail-content" key={i}>
                  {description}
                </p>
              ))}
            </>
            {/* tech stack */}
            <div className="my-6 md:my-9">
              <p className="detail-title">Tech Stack</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {data.stack.map((stack, i) => (
                  <span
                    key={i}
                    className={`stack-tag ${data.colorSet.bg} ${data.colorSet.text}`}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            {/* role & contribution */}
            <div>
              <p className="detail-title">Contribution & Role</p>
              {data.contribution.map((contribution, i) => (
                <p className="detail-content" key={i}>
                  {contribution}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default DetailPage;
