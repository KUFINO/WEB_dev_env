"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function JoinWaitlistButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-[30rem] h-[50px] bg-transparent rounded-full border border-gray-200 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        {!isHovered ? (
          <motion.div
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-between px-1"
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-[1rem]">
                <img
                  src="/assets/portraits/portrait3.jpg"
                  alt="avatar"
                  className="w-[2rem] h-[2.3rem] rounded-full"
                />
                <img
                  src="/assets/portraits/portrait1.jpg"
                  alt="avatar"
                  className="w-[2rem] h-[2.3rem] rounded-full"
                />
              </div>
              <span className="font-medium text-dobby">
                47k+ members already joined
              </span>
            </div>
            <motion.button
              className="bg-phoenix text-dobby text-[1rem] font-medium px-9 py-2 rounded-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join waitlist
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="hovered"
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              className="bg-phoenix text-dobby text-[1rem] font-medium w-full h-full rounded-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join waitlist
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
