"use client";

import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { motion } from "framer-motion";

export function MacbookScrollgo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1.7, y: 0 }}
        transition={{ duration: 3 }}
      >
        <MacbookScroll
          title={<span></span>}
          src={
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </motion.div>
    </div>
  );
}
