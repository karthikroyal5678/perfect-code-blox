import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const items = [
  {
    name: "Rocket",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.org/pfruits/Permanent-Rocket.webp",
    value: 5000,
    demand: "1/10",
  },
  {
    name: "Spin",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpin_Icon.webp&w=256&q=75",
    value: 7500,
    demand: "1/10",
  },
  {
    name: "Blade",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBlade_Icon.webp&w=256&q=75",
    value: 50000,
    demand: "1/10",
  },
  {
    name: "Spring",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpring_Icon.webp&w=256&q=75",
    value: 60000,
    demand: "1/10",
  },
  {
    name: "Bomb",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBomb_Icon.webp&w=256&q=75",
    value: 80000,
    demand: "1/10",
  },
  {
    name: "Smoke",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSmoke_Icon.webp&w=256&q=75",
    value: 100000,
    demand: "1/10",
  },
  {
    name: "Spike",
    category: "Common",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpike_Icon.webp&w=256&q=75",
    value: 5000,
    demand: "1/10",
  },
];

export function CommonPage() {
  useEffect(() => {
    // Ensure AdSense script is loaded once
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense script load error:", e);
        }
      };

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
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
    <div className="container mx-auto px-4 py-6 max-w-7xl bg-gray-800 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Common Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-gray-900 p-4 rounded-lg shadow-lg relative flex flex-col"
          >
            {/* Status Indicator */}
            <span className="absolute top-2 right-2 text-green-500 text-xs font-bold">
              🟢 {item.status}
            </span>

            {/* Item Icon */}
            <div className="flex justify-center mt-2">
              <img
                src={item.icon}
                alt={item.name}
                className="h-20 w-20 sm:h-24 sm:w-24 mx-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Item Name */}
            <h2 className="text-lg sm:text-xl font-bold text-white mt-4 text-center">
              {item.name}
            </h2>

            {/* Value & Demand */}
            <p className="text-gray-400 text-base sm:text-lg text-center">
              Value: {item.value.toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              Demand: {item.demand}
            </p>

            {/* Dropdown for Value Type */}
            <select
              className="mt-3 w-full bg-gray-800 text-white text-sm sm:text-base p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Select value type"
            >
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            {/* Favorite Button */}
            <button
              className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400 p-2"
              aria-label={`Favorite ${item.name}`}
            >
              <FaStar className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Google AdSense Ad Container */}
      <div className="my-6 flex justify-center">
        <ins
          className="adsbygoogle block w-full"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-ad-client="ca-pub-4679619533362780"
          data-ad-slot="3961900505"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        ></script>
      </div>
    </div>
  );
}

export default CommonPage;