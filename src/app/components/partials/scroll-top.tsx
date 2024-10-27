"use client"

import { useEffect, useState } from "react";
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (

    <div
      id="scrollButton"
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 transform translate-y-2 scrollToTopButton ${isVisible ? 'visible' : 'hidden'}`}>
      <button
        onClick={() => scrollToTop()}
        title="Scroll to top"
        aria-label="Scroll to top"
        className="inline-flex items-center gap-x-2 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full">
        <ArrowUpIcon className="h-4 w-4" />
      </button>
    </div>
  )
}

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default ScrollToTopButton;