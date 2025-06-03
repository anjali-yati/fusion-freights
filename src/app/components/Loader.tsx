"use client";
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <motion.div
        className="w-12 h-12 border-4 border-t-transparent border-gray-700 rounded-full animate-spin"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;
