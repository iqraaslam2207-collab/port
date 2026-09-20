import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const bootTheme = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement("meta");m.setAttribute("name","theme-color");document.head.appendChild(m)}m.setAttribute("content",t==="light"?"#f3eee6":"#000000")}catch(e){document.documentElement.dataset.theme="dark"}})();`;

export function ThemeScript() {
  return (
    <Script
      id="theme-boot"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: bootTheme }}
    />
  );
}
