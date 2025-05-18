import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";

const items = [
  {
    name: "Rocket",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.org/pfruits/Permanent-Rocket.webp"
        className="h-24 w-24 object-contain mx-auto"
        alt="Rocket"
        loading="lazy"
      />
    ),
    value: 5000,
    demand: "1/10",
  },
  {
    name: "Spin",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpin_Icon.webp&w=256&q=75"
        className="h-24 w-24 object-contain mx-auto"
        alt="Spin"
        loading="lazy"
      />
    ),
    value: 7500,
    demand: "1/10",
  },
  {
    name: "Blade",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBlade_Icon.webp&w=256&q=75"
        className="h-24 w-24 object-contain mx-auto"
        alt="Blade"
        loading="lazy"
      />
    ),
    value: 50000,
    demand: "1/10",
  },
  {
    name: "Spring",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpring_Icon.webp&w=256&q=75"
        className="h-24 w-24 object-contain mx-auto"
        alt="Spring"
        loading="lazy"
      />
    ),
    value: 60000,
    demand: "1/10",
  },
  {
    name: "Bomb",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBomb_Icon.webp&w=256&q=75"
        className="h-24 w-24 object-contain mx-auto"
        alt="Bomb"
        loading="lazy"
      />
    ),
    value: 80000,
    demand: "1/10",
  },
  {
    name: "Smoke",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSmoke_Icon.webp&w=256&q=75"
        className="h-24 w-24 object-contain mx-auto"
        alt="Smoke"
        loading="lazy"
      />
    ),
    value: 100000,
    demand: "1/10",
  },
  {
    name: "Spike",
    category: "Common",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpike_Icon.webp&w=256&q=75"
        className="h-24 w-24 object-contain mx-auto"
        alt="Spike"
        loading="lazy"
      />
    ),
    value: 5000,
    demand: "1/10",
  },
];

export function CommonPage() {
  const adRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    script.onerror = () => {
      console.error("Failed to load AdSense script");
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">Common Items</h1>
      <div className="mb-8 w-full max-w-[970px]">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4679619533362780"
          data-ad-slot="3961900505"
          data-ad-format="auto"
          data-full-width-responsive="true"
          ref={adRef}
        ></ins>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-screen-2xl">
        {items.map((item) => (
          <div key={item.name} tabIndex={0} aria-label={`${item.name} Card`} className="relative bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 focus-within:scale-105">
            <span className="absolute top-3 right-3 text-green-500 text-xs font-semibold">🟢 {item.status}</span>
            <div>{item.icon}</div>
            <h2 className="text-2xl font-bold text-white mt-4">{item.name}</h2>
            <p className="text-gray-300 mt-2">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400">Demand: {item.demand}</p>
            <select aria-label="Select Value Type" className="mt-4 bg-gray-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>
            <button aria-label="Favorite Item" className="mt-4 text-gray-400 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <FaStar className="text-2xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}