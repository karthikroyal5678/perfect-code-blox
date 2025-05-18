import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const items = [
  {
    name: "Rubber",
    category: "Rare",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FRubber_Icon.webp&w=256&q=75",
    value: 700000,
    demand: "2/10",
  },
  {
    name: "Ghost",
    category: "Rare",
    status: "Underpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FGhost_Icon.webp&w=256&q=75",
    value: 800000,
    demand: "1/10",
  },
  {
    name: "Light",
    category: "Rare",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FLight_Icon.webp&w=256&q=75",
    value: 800000,
    demand: "3/10",
  },
  {
    name: "Barrier",
    category: "Rare",
    status: "Underpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FBarrier_Icon.webp&w=256&q=75",
    value: 800000,
    demand: "1/10",
  },
  {
    name: "Magma",
    category: "Rare",
    status: "Overpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FMagma_Icon.webp&w=256&q=75",
    value: 1150000,
    demand: "4/10",
  },
];

export function RarePage() {
  useEffect(() => {
    // Load AdSense script only once
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
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense push error:", e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-6">
      <h1 className="text-4xl font-bold mb-6">Rare Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 max-w-7xl">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-gray-900 p-4 rounded-lg shadow-lg relative flex flex-col items-center hover:scale-105 transition-transform focus:scale-105"
            tabIndex={0}
          >
            <span
              className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full select-none ${
                item.status === "Overpaid" ? "bg-red-600" : item.status === "Underpaid" ? "bg-blue-600" : "bg-green-600"
              } text-white`}
            >
              {item.status}
            </span>

            <img
              src={item.icon}
              alt={item.name}
              className="h-24 w-24 object-contain mb-4"
              loading="lazy"
            />

            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-400 mb-1">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400 mb-3">Demand: {item.demand}</p>

            <select className="w-full bg-gray-800 text-white p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            <button className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400 transition-colors">
              <FaStar size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full flex justify-center">
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4679619533362780"
          data-ad-slot="3961900505"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}

export default RarePage;
