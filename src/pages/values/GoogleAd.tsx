import React, { useEffect } from "react";

// Fix TypeScript error for 'adsbygoogle'
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface GoogleAdProps {
  adSlot: string;
  format?: string;
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
      style={{ display: "block", marginBottom: "20px" }}
      data-ad-client="ca-pub-4679619533362780"
      data-ad-slot={adSlot}
      data-ad-format={format}
    ></ins>
  );
};

const AdsensePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <meta name="google-adsense-account" content="ca-pub-4679619533362780" />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Blog</h1>
        <p className="text-gray-600 mb-6">
          Discover the latest insights, trends, and tips in technology, lifestyle, and more. We are dedicated to bringing you high-quality content that keeps you informed and inspired.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Articles</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>10 Tips to Boost Your Productivity</li>
          <li>How AI is Transforming the Future</li>
          <li>The Ultimate Guide to Healthy Living</li>
          <li>Top Travel Destinations in 2025</li>
        </ul>

        {/* First Ad Block */}
        <GoogleAd adSlot="1234567890" format="autorelaxed" />

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-6">
          We focus on delivering value through our content, ensuring you stay ahead in a fast-paced world. Whether it's tech, health, or lifestyle, we've got you covered.
        </p>

        {/* Second Ad Block */}
        <GoogleAd adSlot="0987654321" format="rectangle" />
      </div>
    </div>
  );
};


export default AdsensePage;
