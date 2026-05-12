import React from "react";
import { motion as Motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, icon: Icon }) {
  return (
    <Motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-12"
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        {Icon && <Icon className="text-sky-400 sm:w-7 sm:h-7" size={24} />}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
    </Motion.div>
  );
}
