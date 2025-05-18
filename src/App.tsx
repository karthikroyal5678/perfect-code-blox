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
    <div className="flex flex-col items-center text-center py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">The Most Trusted Value List for Blox Fruits</h1>
      <p className="text-sm sm:text-base mt-1.5 text-gray-300 max-w-md mx-auto">NEW! Check out our trade calculator!</p>
      <h2 className="text-base sm:text-lg mt-2 text-white">Please Donate to Support Us</h2>
      <div className="container mx-auto px-3 sm:px-6 mt-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 text-center">
            Trade Calculator
          </h2>
          <TradeCalculator />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Blox Fruit ${idx + 1}`}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-md border-2 border-blue-500 object-cover"
            animate={{ x: [0, 6, -6, 0], opacity: [0.8, 1], scale: [0.95, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            loading="lazy"
          />
        ))}
      </div>

      <motion.div className="py-4" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h3 className="text-lg sm:text-xl lg:text-2xl text-white">Stock Reset Countdown</h3>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">01:24:01</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {["Common", "Uncommon", "Rare", "Legendary", "Mythical", "Gamepass"].map((cat, idx) => (
          <motion.div
            key={idx}
            className="px-4 py-2 bg-gray-700 rounded-md text-white text-sm font-medium shadow-sm cursor-pointer"
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
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow overflow-auto px-4 sm:px-6 lg:px-8 py-6">
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
