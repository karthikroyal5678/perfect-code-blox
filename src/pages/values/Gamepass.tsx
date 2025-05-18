import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const items = [
  {
    name: "Fast Boats",
    category: "UnCommon",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFast%20Boats_Icon.webp&w=256&q=75"
        alt="Fast Boats"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 1000000,
    demand: "1/10",
  },
  {
    name: "2x Boss Drops",
    category: "Underpaid",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Boss%20Drops_Icon.webp&w=256&q=75"
        alt="2x Boss Drops"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 1500000,
    demand: "1/10",
  },
  {
    name: "2x Money",
    category: "UnCommon",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Money_Icon.webp&w=256&q=75"
        alt="2x Money"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 1500000,
    demand: "1/10",
  },
  {
    name: "2x Mastery",
    category: "Underpaid",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Mastery_Icon.webp&w=256&q=75"
        alt="2x Mastery"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 2000000,
    demand: "1/10",
  },
  {
    name: "+1 Fruit Storage",
    category: "Overpaid",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F%2B1%20Fruit%20Storage_Icon.webp&w=256&q=75"
        alt="+1 Fruit Storage"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 2500000,
    demand: "4/10",
  },
  {
    name: "Legendary Scrolls",
    category: "UnCommon",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FLegendary%20Scrolls_Icon.webp&w=256&q=75"
        alt="Legendary Scrolls"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 2750000,
    demand: "4/10",
  },
  {
    name: "Dark Blade",
    category: "Underpaid",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDark%20Blade_Icon.webp&w=256&q=75"
        alt="Dark Blade"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 5000000,
    demand: "6/10",
  },
  {
    name: "Mythical Scrolls",
    category: "UnCommon",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FRumble_Icon.webp&w=256&q=75"
        alt="Mythical Scrolls"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 7000000,
    demand: "7/10",
  },
  {
    name: "Fruit Notifier",
    category: "Underpaid",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFruit%20Notifier_Icon.webp&w=256&q=75"
        alt="Fruit Notifier"
        className="h-24 w-24 mx-auto sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
        loading="lazy"
      />
    ),
    value: 11000000,
    demand: "10/10",
  },
];

export function GamepassPage() {
  useEffect(() => {
    // Load Google AdSense script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // Ignore errors
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
      <h1 className="text-4xl font-extrabold mb-8 text-center sm:text-left">
        Gamepass
      </h1>

      {/* Google AdSense ad block */}
      <ins
        className="adsbygoogle block mx-auto my-6 max-w-full"
        style={{ display: "block", maxWidth: "728px", height: "90px" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-4679619533362780"
        data-ad-slot="3961900505"
        aria-label="Advertisement"
      ></ins>

      {/* Flex container for items */}
      <section
        role="list"
        className="flex flex-wrap justify-center gap-6 flex-grow overflow-auto"
      >
        {items.map((item) => (
          <article
            key={item.name}
            tabIndex={0}
            role="listitem"
            aria-label={`${item.name} gamepass card`}
            className="relative bg-gray-800 p-5 rounded-lg shadow-lg focus-within:scale-105 focus-within:outline-none focus-within:ring-4 focus-within:ring-yellow-400 transition-transform duration-200 ease-in-out flex flex-col items-center w-72"
          >
            {/* Status Indicator */}
            <span className="absolute top-3 right-3 text-green-400 text-xs font-semibold select-none">
              🟢 {item.status}
            </span>

            {/* Item Icon */}
            <div className="flex justify-center">{item.icon}</div>

            {/* Item Name */}
            <h2 className="mt-4 text-xl font-semibold text-center">{item.name}</h2>

            {/* Value & Demand */}
            <p className="text-gray-300 mt-2 text-lg">
              Value: <span className="font-mono">{item.value.toLocaleString()}</span>
            </p>
            <p className="text-gray-400">Demand: {item.demand}</p>

            {/* Dropdown for Value Type */}
            <select
              aria-label={`Select value type for ${item.name}`}
              className="mt-4 w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            {/* Favorite Button */}
            <button
              aria-label={`Mark ${item.name} as favorite`}
              type="button"
              className="absolute bottom-3 right-3 text-gray-400 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              <FaStar size={20} />
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
