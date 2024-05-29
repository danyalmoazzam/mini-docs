import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        ease: "easeOut",
        duration: 5,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 0.8,
        rotate: -5,
        borderRadius: "25%",
      }}
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 100 }}
      className="relative flex-shrink-0 w-60 border border-gray-500 text-white px-6 py-10 h-72 rounded-3xl overflow-hidden bg-black"
    >
      <FaRegFileAlt className="scale-150" />
      <p className="mt-5 text-sm font-medium leading-tight">{data.desc}</p>
      <footer className="absolute bottom-0 border-gray-600 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5 className="tracking-wide">{data.filesize}</h5>
          <span className="w-9 h-9 bg-zinc-800 flex items-center justify-center rounded-full">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size={15} color="white" cursor={"pointer"} />
            )}
          </span>
        </div>
        {data.tag.isOpen && [
          <div
            className={`w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } duration-200 cursor-pointer flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold cursor-pointer">
              {data.tag.tagTitle}
            </h3>
          </div>,
        ]}
      </footer>
    </motion.div>
  );
};

export default Card;
