import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Gunasekaraselvapandian Annadurai. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
