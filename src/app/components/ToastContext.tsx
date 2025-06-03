"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import Notification from "./Notification";

type ToastType = "success" | "error" | "info";

interface ToastContextProps {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{ message: string; type: ToastType; duration: number } | null>(null);

  const showToast = (message: string, type: ToastType = "success", duration = 3000) => {
    setToast({ message, type, duration });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Notification
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onDone={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
};
