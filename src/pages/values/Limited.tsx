import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const items = [
  {
    name: "Dragon Token",
    category: "Limited",
    status: "Overpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDragon%20Token_Icon.webp&w=256&q=75",
    value: 450000000,
    demand: "10/10",
  },
  {
    name: "Permanent Dragon Token",
    category: "Limited",
    status: "Overpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FPermanent%20Dragon%20Token_Icon.webp&w=256&q=75",
    value: 1000000000,
    demand: "10/10",
  },
  {
    name: "Chromatic Skin",
    category: "Limited",
    status: "Overpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FChromatic%20Skin_Icon.webp&w=256&q=75",
    value: 1950000000,
    demand: "10/10",
  },
];

export function LimitedPage() {
  useEffect(() => {
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Adsense error:", e);
        }
      };
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Limited Items</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative flex flex-col items-center"
          >
            <span className="absolute top-2 right-2 text-green-500 text-xs font-bold">
              🟢 {item.status}
            </span>
            <img src={item.icon} alt={item.name} className="h-24 w-24 object-contain" loading="lazy" />
            <h2 className="text-xl font-bold text-white mt-4">{item.name}</h2>
            <p className="text-gray-400 text-lg">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400">Demand: {item.demand}</p>
            <select className="mt-3 w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>
            <button className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400 p-2">
              <FaStar className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <ins className="adsbygoogle block w-full mt-6" style={{ display: "block" }} data-ad-format="autorelaxed" data-ad-client="ca-pub-4679619533362780" data-ad-slot="3961900505"></ins>
    </div>
  );
}

export default LimitedPage;
