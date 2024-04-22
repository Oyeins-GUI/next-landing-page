"use client";

import { useRef } from "react";

export default function NavToggle({ onClick }: { onClick: () => void }) {
   const toggleBtnRef = useRef<HTMLButtonElement>(null);

   const setAriaExpanded = () => {
      const isOpened = toggleBtnRef.current?.ariaExpanded;
      if (isOpened === "false") {
         toggleBtnRef.current?.setAttribute("aria-expanded", "true");
      } else {
         toggleBtnRef.current?.setAttribute("aria-expanded", "false");
      }
   };

   return (
      <button
         className="nav-toggle cursor-pointer md:hidden text-secondary-600"
         aria-expanded="false"
         onClick={() => {
            onClick();
            setAriaExpanded();
         }}
         ref={toggleBtnRef}
      >
         <svg
            className="hamburger"
            viewBox="0 0 100 100"
            width="97%"
            height="97%"
         >
            <rect
               className="line top"
               width="80"
               height="7"
               x="10"
               y="22.5"
               rx="5"
            ></rect>
            <rect
               className="line middle"
               width="80"
               height="7"
               x="10"
               y="45"
               rx="5"
            ></rect>
            <rect
               className="line bottom"
               width="80"
               height="7"
               x="10"
               y="67.5"
               rx="5"
            ></rect>
         </svg>
      </button>
   );
}
