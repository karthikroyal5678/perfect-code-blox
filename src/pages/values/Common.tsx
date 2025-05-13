import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const items = [
  {
    name: "Rocket",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.org/pfruits/Permanent-Rocket.webp"  className="h-24 w-24 mx-auto" />,
    value: 5000,
    demand: "1/10",
  },
  {
    name: "Spin",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpin_Icon.webp&w=256&q=75" className="h-24 w-24 mx-auto" />, 
    value: 7500,
    demand: "1/10",
  },
  {
    name: "Blade",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBlade_Icon.webp&w=256&q=75"  className="h-24 w-24 mx-auto" />, 
    value: 50000,
    demand: "1/10",
  },
  {
    name: "Spring",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpring_Icon.webp&w=256&q=75" className="h-24 w-24 mx-auto" />, 
    value: 60000,
    demand: "1/10",
  },
  {
    name: "Bomb",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBomb_Icon.webp&w=256&q=75" alt="Bomb" className="h-24 w-24 mx-auto" />, 
    value: 80000,
    demand: "1/10",
  },
  {
    name: "Smoke",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSmoke_Icon.webp&w=256&q=75" alt="Smoke" className="h-24 w-24 mx-auto" />, 
    value: 100000,
    demand: "1/10",
  },
  {
    name: "Spike",
    category: "Common",
    status: "Stable",
    icon: <img src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpike_Icon.webp&w=256&q=75" alt="Spike" className="h-24 w-24 mx-auto" />, 
    value: 5000,
    demand: "1/10",
  },
];

export function CommonPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-6">Common Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-gray-900 p-4 rounded-lg shadow-lg relative">
            <span className="absolute top-2 right-2 text-green-500 text-xs font-bold">🟢 {item.status}</span>
            <div className="flex justify-center mt-2">{item.icon}</div>
            <h2 className="text-xl font-bold text-white mt-4">{item.name}</h2>
            <p className="text-gray-400 text-xl text-white">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400">Demand: {item.demand}</p>
            <select className="mt-2 w-full bg-gray-800 text-white p-2 rounded">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>
            <button className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400"><FaStar /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
