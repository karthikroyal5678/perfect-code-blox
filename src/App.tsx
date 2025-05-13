import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { motion } from 'framer-motion';


import { Navbar } from './components/Navbar';
import { CommonPage } from './pages/values/Common';
import { UncommonPage } from './pages/values/Uncommon';
import { RarePage } from './pages/values/Rare';
import { LegendaryPage } from './pages/values/Legendary';
import { MythicalPage } from './pages/values/Mythical';
import { GamepassPage } from './pages/values/Gamepass';
import { LimitedPage } from './pages/values/Limited';
import { CalculatorPage } from './pages/Calculator';
import { LoginPage } from './pages/auth/Login';
import { RegisterPage } from './pages/auth/Register';
import { ForgotPasswordPage } from './pages/auth/ForgotPassword';
import { FAQPage } from './pages/information/FAQ';
import { UsageGuidePage } from './pages/information/UsageGuide';
import { DonatePage } from './pages/Donate';

const images = [
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.8c8b2355.webp&w=1920&q=75",
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.ceb66b51.webp&w=1920&q=75",
  "https://bloxfruitsvalues.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.50c3ed77.webp&w=1920&q=75"
];
import { TradeCalculator } from './components/TradeCalculator';



const HomePage = () => {
  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The Most Trusted Value List for Blox Fruits</h2>
      <p className="text-lg sm:text-xl mt-2">NEW! Check out our trade calculator!</p>
      <h1>PLEASE DONATE YOUR AMOUNT </h1>
      <h2> Most Trusted Value List</h2>
      <h3> Blox Fruits Values</h3>

      {/* Trade Calculator Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Trade Calculator</h1>
          <TradeCalculator />
          
         
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
              <ul className="text-gray-300 space-y-2">
                <li>1. Click the + button to add items to either side</li>
                <li>2. Select items from your inventory or search for specific items</li>
                <li>3. The calculator will automatically compute values and price differences</li>
                <li>4. Green indicates a fair trade, yellow means slightly uneven, red means significantly uneven</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Trading Tips</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Always verify the items in the trade window match the calculator</li>
                <li>• Consider demand ratings alongside pure value</li>
                <li>• Be cautious of trades that seem too good to be true</li>
                <li>• Take your time to double-check everything before confirming</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

      {/* Moving & Fading Image Animation */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-4 border-blue-500 object-cover"
            animate={{ x: [0, 20, -20, 0], opacity: [0, 1], scale: [0.9, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Countdown Timer Animation */}
      <motion.div className="text-center py-5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}>
        <h3 className="text-xl">Stock Reset Countdown</h3>
        <p className="text-4xl font-bold">01:24:01</p>
      </motion.div>

      {/* Category Buttons with Hover Effect */}
      <div className="flex justify-center gap-5 mt-5 flex-wrap">
        {["Common", "Uncommon", "Rare", "Legendary", "Mythical", "Gamepass"].map((category, index) => (
          <motion.div
            key={index}
            className="px-5 py-3 bg-gray-700 rounded-lg text-center text-white text-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }}
            transition={{ duration: 0.3 }}
          >
            {category}
          </motion.div>
        ))}
      </div>

export default App;
