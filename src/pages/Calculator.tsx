import React, { useEffect } from "react";
import { TradeCalculator } from "../components/TradeCalculator";

const GoogleAd = () => {
  useEffect(() => {
    // Load the AdSense script if not already loaded
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

    // Push the ad slot after a small delay
    const timeout = setTimeout(() => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error("Adsbygoogle error", e);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "20px 0" }}
      data-ad-client="ca-pub-4679619533362780"
      data-ad-slot="5350563826"
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w+4e-db+86"
    ></ins>
  );
};

export function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Trade Calculator</h1>

        <TradeCalculator />

        {/* AdSense Integration */}
        <GoogleAd />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* How to Use Section */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
            <ul className="text-gray-300 space-y-2 list-decimal list-inside">
              <li>Click the + button to add items to either side</li>
              <li>Select items from your inventory or search for specific items</li>
              <li>The calculator will automatically compute values and price differences</li>
              <li>Green indicates a fair trade, yellow means slightly uneven, red means significantly uneven</li>
            </ul>
          </div>

          {/* Trading Tips Section */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Trading Tips</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Always verify the items in the trade window match the calculator</li>
              <li>Consider demand ratings alongside pure value</li>
              <li>Be cautious of trades that seem too good to be true</li>
              <li>Take your time to double-check everything before confirming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
