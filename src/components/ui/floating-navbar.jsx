"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Hide navbar completely whenever gallery modal or lightbox is opened
  useEffect(() => {
    const handleModal = (e) => {
      setModalOpen(Boolean(e?.detail?.open));
    };
    window.addEventListener("gallery-modal-change", handleModal);
    return () => window.removeEventListener("gallery-modal-change", handleModal);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setOpen(false); // Close mobile menu when scrolling down
        }
      }
    }
  });

  if (modalOpen) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed top-4 inset-x-0 mx-auto z-[5000] px-3 sm:px-0 flex flex-col items-center pointer-events-none"
      >
        {/* --- MAIN NAVBAR CONTAINER --- */}
        <div
          className={cn(
            "floating-nav pointer-events-auto flex items-center justify-between sm:justify-center rounded-full bg-white/95 dark:bg-black/95 backdrop-blur-md border-2 border-black/80 dark:border-white/20 shadow-[0px_4px_16px_rgba(0,0,0,0.12)] transition-all",
            "w-[94vw] max-w-sm sm:w-auto sm:max-w-fit px-3.5 sm:px-6 md:px-8 py-2 sm:py-2.5",
            className
          )}
        >
          {/* ========================================================
              MOBILE HEADER: BRAND + MINI REGISTER + HAMBURGER
              ======================================================== */}
          <div className="flex sm:hidden items-center justify-between w-full">
            {/* Brand Logo / Tag */}
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 group"
            >
              <span className="w-7 h-7 rounded-lg bg-orange-500 text-white font-black flex items-center justify-center text-[11px] border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                CAD
              </span>
              <span className="font-extrabold text-sm text-neutral-900 tracking-tight">
                CIC <span className="text-orange-600">2.0</span>
              </span>
            </a>

            {/* Right Action Icons: Mini Register CTA + Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="https://unstop.com/o/gknRZ6t?lb=mX8jqgHP&utm_medium=Share&utm_source=competitions&utm_campaign=Centrhac89592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500 text-white font-extrabold text-[11px] tracking-wide border border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:bg-orange-600 transition-colors"
              >
                <span>Register</span>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setOpen(!open)}
                className="w-8 h-8 rounded-full border border-black/20 flex flex-col justify-center items-center gap-1 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                <motion.span
                  animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
                  className="w-4 h-0.5 bg-neutral-900 block rounded-full"
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  className="w-4 h-0.5 bg-neutral-900 block rounded-full"
                />
                <motion.span
                  animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
                  className="w-4 h-0.5 bg-neutral-900 block rounded-full"
                />
              </button>
            </div>
          </div>

          {/* ========================================================
              DESKTOP VIEW: CLEAN PILL WITH ALL LINKS
              ======================================================== */}
          <div className="hidden sm:flex items-center space-x-6 md:space-x-8">
            {navItems.map((navItem, idx) => (
              <a
                key={`desktop-link-${idx}`}
                href={navItem.link}
                className="relative flex items-center space-x-1.5 text-neutral-700 hover:text-orange-600 dark:text-neutral-200 dark:hover:text-orange-400 font-semibold text-xs md:text-sm transition-colors py-1 cursor-pointer"
              >
                <span className="block text-sm">{navItem.icon}</span>
                <span>{navItem.name}</span>
              </a>
            ))}

            {/* Desktop Register Button inside navbar */}
            <a
              href="https://unstop.com/o/gknRZ6t?lb=mX8jqgHP&utm_medium=Share&utm_source=competitions&utm_campaign=Centrhac89592"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs tracking-wide border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Register</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ========================================================
            MOBILE DROPDOWN MENU
            ======================================================== */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="pointer-events-auto mt-2 w-[94vw] max-w-sm rounded-2xl bg-white dark:bg-neutral-900 border-2 border-black p-4 shadow-[6px_6px_0px_0px_#000] flex flex-col gap-2 overflow-hidden sm:hidden"
            >
              <div className="pb-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                  Navigation
                </span>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                  Central India Cadathon 2.0
                </span>
              </div>

              {navItems.map((navItem, idx) => (
                <a
                  key={`mobile-dropdown-${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-100 transition-colors font-bold text-sm"
                >
                  <span className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300">
                    {navItem.icon}
                  </span>
                  <span>{navItem.name}</span>
                </a>
              ))}

              {/* Big CTA inside mobile dropdown */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href="https://unstop.com/o/gknRZ6t?lb=mX8jqgHP&utm_medium=Share&utm_source=competitions&utm_campaign=Centrhac89592"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000]"
                >
                  <span>Register on Unstop</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
