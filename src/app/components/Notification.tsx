"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface NotificationProps {
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  onDone: () => void;
  duration?: number;
}

const styleMap = {
  info: "bg-sky-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-orange-500 text-white",
  error: "bg-red-500 text-white",
};

const iconMap = {
  info: <Info className="w-6 h-6" />,
  success: <CheckCircle className="w-6 h-6" />,
  warning: <AlertTriangle className="w-6 h-6" />,
  error: <XCircle className="w-6 h-6" />,
};

const Notification: React.FC<NotificationProps> = ({
  title = "Title",
  message,
  type = "info",
  onDone,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onDone, duration);
    return () => clearTimeout(timer);
  }, [duration, onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{backgroundColor:type =="success"? '#4BB543':'#FF2C2C',color:'white'}}
        className={`fixed top-6 right-0 -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg w-[90%] md:w-[400px] flex items-start gap-4`}
      >
        <div className="bg-white bg-opacity-20 rounded-full p-2 flex items-center justify-center">
          {iconMap[type]}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg leading-tight">{title}</h4>
          <p className="text-sm mt-1">{message}</p>
        </div>
        <button
          onClick={onDone}
          className="ml-2 font-bold text-xl leading-none hover:opacity-80"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
