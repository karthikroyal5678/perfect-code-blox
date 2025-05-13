import { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  format?: string;
}

// Declare `adsbygoogle` globally to prevent TypeScript errors
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAd: React.FC<GoogleAdProps> = ({ adSlot, format = "autorelaxed" }) => {
  useEffect(() => {
    // Dynamically load the AdSense script
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.setAttribute("data-ad-client", "ca-pub-4679619533362780");
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Trigger ad refresh
    const timeout = setTimeout(() => {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4679619533362780"
      data-ad-slot={adSlot}
      data-ad-format={format}
    ></ins>
  );
};

export default GoogleAd;
