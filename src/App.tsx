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
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense push error:", e);
      }
    }
  }, []);

  return (
    <div className="text-center py-8 px-4">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        The Most Trusted Value List for Blox Fruits
      </h2>
      <p className="text-base sm:text-lg mt-2 text-gray-300">
        NEW! Check out our trade calculator!
      </p>
      <h1 className="text-xl sm:text-2xl mt-4 text-white">PLEASE DONATE YOUR AMOUNT</h1>
      <h2 className="text-lg sm:text-xl mt-2 text-white">Most Trusted Value List</h2>
      <h3 className="text-base sm:text-lg mt-2 text-white">Blox Fruits Values</h3>

      {/* Moving & Fading Image Animation */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border-2 border-blue-500 object-cover"
            animate={{ x: [0, 10, -10, 0], opacity: [0.8, 1], scale: [0.95, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Countdown Timer Animation */}
      <motion.div
        className="text-center py-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg sm:text-xl text-white">Stock Reset Countdown</h3>
        <p className="text-2xl sm:text-3xl font-bold text-white">01:24:01</p>
      </motion.div>

      {/* Category Buttons with Hover Effect */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {["Common", "Uncommon", "Rare", "Legendary", "Mythical", "Gamepass"].map(
          (category, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-gray-700 rounded-lg text-center text-white text-sm sm:text-base shadow-lg cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {category}
            </motion.div>
          )
        )}
      </div>

      {/* Trade Calculator Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Trade Calculator</h1>
          <TradeCalculator />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">How to Use</h2>
              <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                <li>1. Click the + button to add items to either side</li>
                <li>2. Select items from your inventory or search for specific items</li>
                <li>3. The calculator will automatically compute values and price differences</li>
                <li>
                  4. Green indicates a fair trade, yellow means slightly uneven, red means
                  significantly uneven
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">Trading Tips</h2>
              <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                <li>• Always verify the items in the trade window match the calculator</li>
                <li>• Consider demand ratings alongside pure value</li>
                <li>• Be cautious of trades that seem too good to be true</li>
                <li>• Take your time to double-check everything before confirming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Google AdSense Ad Container */}
      <div className="my-8 flex justify-center">
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
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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