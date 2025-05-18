import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const items = [
  {
    name: "Flame",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FFlame_Icon.webp&w=256&q=75",
    value: 250000,
    demand: "1/10",
  },
  {
    name: "Falcon",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FFalcon_Icon.webp&w=256&q=75",
    value: 300000,
    demand: "1/10",
  },
  {
    name: "Dark",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FDark_Icon.webp&w=256&q=75",
    value: 400000,
    demand: "2/10",
  },
  {
    name: "Sand",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FSand_Icon.webp&w=256&q=75",
    value: 420000,
    demand: "1/10",
  },
  {
    name: "Ice",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FIce_Icon.webp&w=256&q=75",
    value: 550000,
    demand: "2/10",
  },
  {
    name: "Diamond",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FDiamond_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1/10",
  },
];

export function UncommonPage() {
  useEffect(() => {
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense script load error:", e);
        }
      };
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense push error:", e);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">UnCommon Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-screen-2xl">
        {items.map((item) => (
          <div key={item.name} className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center relative">
            <span className="absolute top-3 right-3 text-green-500 text-xs font-semibold">🟢 {item.status}</span>
            <img src={item.icon} alt={item.name} className="h-24 w-24 object-contain mx-auto mb-4" loading="lazy" />
            <h2 className="text-2xl font-bold text-white text-center">{item.name}</h2>
            <p className="text-gray-300 mt-2">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400">Demand: {item.demand}</p>
            <select className="mt-4 bg-gray-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Select Value Type">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>
            <button aria-label="Favorite Item" className="mt-4 text-gray-400 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <FaStar className="text-2xl" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full max-w-[970px]">
        <ins className="adsbygoogle block w-full" data-ad-client="ca-pub-4679619533362780" data-ad-slot="3961900505" data-ad-format="autorelaxed"></ins>
      </div>
    </div>
  );
}

export default UncommonPage;
