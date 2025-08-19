"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800, // thời gian chạy animation
      once: false, // chỉ chạy 1 lần
    });
  }, []);

  return null; // không render gì cả, chỉ chạy init
}
