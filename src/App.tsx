import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { CommonPage } from "./pages/values/Common";
import { UncommonPage } from "./pages/values/Uncommon";
import { RarePage } from "./pages/values/Rare";
import { LegendaryPage } from "./pages/values/Legendary";
import { MythicalPage } from "./pages/values/Mythical";
import { GamepassPage } from "./pages/values/Gamepass";
import { LimitedPage } from "./pages/values/Limited";
import { CalculatorPage } from "./pages/Calculator";
import { LoginPage } from "./pages/auth/Login";
import { RegisterPage } from "./pages/auth/Register";
import { ForgotPasswordPage } from "./pages/auth/ForgotPassword";
import { FAQPage } from "./pages/information/FAQ";
import { UsageGuidePage } from "./pages/information/UsageGuide";
import { DonatePage } from "./pages/Donate";
import { TradeCalculator } from "./components/TradeCalculator";
import { useEffect } from "react";

const images = [
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.8c8b2355.webp&w=1920&q=75",
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.ceb66b51.webp&w=1920&q=75",
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.50c3ed77.webp&w=1920&q=75",
];

const HomePage = () => {
  useEffect(() => {
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
    <div className="text-center py-4 px-3 sm:px-6 lg:px-8">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
        The Most Trusted Value List for Blox Fruits
      </h1>
      <p className="text-sm sm:text-base mt-1.5 text-gray-300 max-w-md mx-auto">
        NEW! Check out our trade calculator!
      </p>
      <h2 className="text-base sm:text-lg mt-2 text-white">Please Donate to Support Us</h2>

      {/* Animated Images */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-4">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Blox Fruit ${idx + 1}`}
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md border-2 border-blue-500 object-cover"
            animate={{ x: [0, 6, -6, 0], opacity: [0.8, 1], scale: [0.95, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Countdown Timer */}
      <motion.div
        className="text-center py-2 sm:py-3 mt-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-sm sm:text-base lg:text-lg text-white">Stock Reset Countdown</h3>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-1">01:24:01</p>
      </motion.div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-3 max-w-3xl mx-auto">
        {["Common", "Uncommon", "Rare", "Legendary", "Mythical", "Gamepass"].map((cat, idx) => (
          <motion.div
            key={idx}
            className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-700 rounded-md text-white text-xs sm:text-sm font-medium shadow-sm cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="button"
            aria-label={`View ${cat} items`}
          >
            {cat}
          </motion.div>
        ))}
      </div>

      {/* Trade Calculator Section */}
      <div className="container mx-auto px-3 sm:px-6 mt-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 text-center">
            Trade Calculator
          </h2>
          <TradeCalculator />

          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-gray-800/70 p-2.5 sm:p-3 rounded-md">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">How to Use</h3>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-tight">
                <li>1. Click the + button to add items to either side</li>
                <li>2. Select items from your inventory or search for specific items</li>
                <li>3. Calculator computes values and differences</li>
                <li>
                  4. Green = fair trade, Yellow = uneven, Red = very uneven
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/70 p-2.5 sm:p-3 rounded-md">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                Trading Tips
              </h3>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-tight">
                <li>• Verify items match trade window and calculator</li>
                <li>• Consider demand ratings with values</li>
                <li>• Be cautious of trades too good to be true</li>
                <li>• Double-check before confirming trades</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Google AdSense Ad Container */}
      <div className="my-4 sm:my-6 flex justify-center">
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
};

const App = () => {
  return (
    <Router>
      {/* Outer container: flex column, full viewport height */}
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        {/* Navbar stays at the top */}
        <Navbar />
        {/* Main content flex-grow to fill available space, scrollable */}
        <main className="flex-grow overflow-auto max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/values/common" element={<CommonPage />} />
            <Route path="/values/uncommon" element={<UncommonPage />} />
            <Route path="/values/rare" element={<RarePage />} />
            <Route path="/values/legendary" element={<LegendaryPage />} />
            <Route path="/values/mythical" element={<MythicalPage />} />
            <Route path="/values/gamepass" element={<GamepassPage />} />
            <Route path="/values/limited" element={<LimitedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/guide" element={<UsageGuidePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
