import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔧 Settings page — store, payment, email and appearance.
// Dark mode is ON/OFF via the "dark" class on <html> (see tailwind config: darkMode: ['class']).

export default function SettingsPage() {
  const navigate = useNavigate();

  // Appearance state (dark mode)
  const [darkMode, setDarkMode] = useState(false);

  // Business info state
  const [business, setBusiness] = useState({
    storeName: "Khmer Coffee Shop",
    phone: "0715499832",
    email: "maovibol41@gmail.com",
    address: "Phnom Penh, Cambodia",
    currency: "USD / KHR",
  });

  // Payment settings state
  const [payment, setPayment] = useState({
    khqrEnabled: true,
    khqrMpi: "bakong@khmer.com",
    paypalEnabled: false,
  });

  // Email settings state
  const [email, setEmail] = useState({
    orderAlerts: true,
    lowStockAlerts: true,
    weeklyReport: false,
  });

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      // add or remove the "dark" class on the <html> tag
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  // Handlers for save buttons (show a small "saved" state)
  const [saved, setSaved] = useState("");

  const saveBusiness = (e) => {
    e.preventDefault();
    setSaved("business");
    setTimeout(() => setSaved(""), 1500);
  };

  const savePayment = (e) => {
    e.preventDefault();
    setSaved("payment");
    setTimeout(() => setSaved(""), 1500);
  };

  const saveEmail = (e) => {
    e.preventDefault();
    setSaved("email");
    setTimeout(() => setSaved(""), 1500);
  };

  return (
    <div>
      {/* Header + back link */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-ink-100">
            Settings
          </h1>
        </div>

        {saved && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm flex items-center gap-2">
            <span className="text-lg">✓</span>
            Saved! (this is just a demo — nothing is sent to a server yet)
          </div>
        )}

        {/* ============ 1. Business Information ============ */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-ink-900 dark:text-ink-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mulberry-500" />
            1. Business Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4 bg-white dark:bg-ink-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
            <div className="space-y-4">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Store name
              </label>
              <input
                type="text"
                value={business.storeName}
                onChange={(e) =>
                  setBusiness({ ...business, storeName: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-ink-900 dark:text-ink-100 text-sm focus:outline-none focus:ring-2 focus:ring-mulberry-500"
                placeholder="Store name"
              />

              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Phone
              </label>
              <input
                type="text"
                value={business.phone}
                onChange={(e) =>
                  setBusiness({ ...business, phone: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-ink-900 dark:text-ink-100 text-sm focus:outline-none focus:ring-2 focus:ring-mulberry-500"
                placeholder="098 123 456"
              />

              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email
              </label>
              <input
                type="email"
                value={business.email}
                onChange={(e) =>
                  setBusiness({ ...business, email: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-ink-900 dark:text-ink-100 text-sm focus:outline-none focus:ring-2 focus:ring-mulberry-500"
                placeholder="shop@khmer.com"
              />

              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Address
              </label>
              <input
                type="text"
                value={business.address}
                onChange={(e) =>
                  setBusiness({ ...business, address: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-ink-900 dark:text-ink-100 text-sm focus:outline-none focus:ring-2 focus:ring-mulberry-500"
                placeholder="Phnom Penh, Cambodia"
              />
            </div>

            <div className="flex flex-col justify-between bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Currency
                </p>
                <p className="text-2xl font-bold text-ink-900 dark:text-ink-100">
                  {business.currency}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Default exchange rate
                </p>
                <p className="mono text-lg font-bold text-ink-900 dark:text-ink-100">
                  1 USD = 4,100 KHR
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={saveBusiness}
            className="mt-4 w-full bg-mulberry-500 hover:bg-mulberry-600 text-dark-gray font-semibold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            Save Business Information
          </button>
        </section>

        {/* ============ 2. Payment Settings ============ */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-ink-900 dark:text-ink-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            2. Payment Settings
          </h2>

          <div className="bg-white dark:bg-ink-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink-900 dark:text-ink-100">
                    KHQR / Bakong
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Enable QR payment for your customers
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPayment({
                      ...payment,
                      khqrEnabled: !payment.khqrEnabled,
                    })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${payment.khqrEnabled ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${payment.khqrEnabled ? "translate-x-5" : ""}`}
                  />
                </button>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  KHQR MPI (Merchant ID)
                </label>
                <input
                  type="text"
                  value={payment.khqrMpi}
                  onChange={(e) =>
                    setPayment({ ...payment, khqrMpi: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-ink-900 dark:text-ink-100 text-sm focus:outline-none focus:ring-2 focus:ring-mulberry-500"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-700">
                <div>
                  <p className="font-medium text-ink-900 dark:text-ink-100">
                    PayPal
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Enable PayPal checkout
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPayment({
                      ...payment,
                      paypalEnabled: !payment.paypalEnabled,
                    })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${payment.paypalEnabled ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${payment.paypalEnabled ? "translate-x-5" : ""}`}
                  />
                </button>
              </div>
            </div>

            <button
              onClick={savePayment}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              Save Payment Settings
            </button>
          </div>
        </section>

        {/* ============ 3. Email / Notification Settings ============ */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-ink-900 dark:text-ink-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            3. Email & Notifications
          </h2>

          <div className="space-y-3 bg-white dark:bg-ink-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
            {[
              {
                key: "orderAlerts",
                label: "Order alerts",
                hint: "Get notified when a new order arrives",
              },
              {
                key: "lowStockAlerts",
                label: "Low stock alerts",
                hint: "Alert when a product is out of stock",
              },
              {
                key: "weeklyReport",
                label: "Weekly sales report",
                hint: "Send a summary email every Monday",
              },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink-900 dark:text-ink-100">
                    {item.label}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.hint}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setEmail({ ...email, [item.key]: !email[item.key] })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${email[item.key] ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${email[item.key] ? "translate-x-5" : ""}`}
                  />
                </button>
              </div>
            ))}

            <button
              onClick={saveEmail}
              className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              Save Notification Settings
            </button>
          </div>
        </section>

        {/* ============ 4. Appearance ============ */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-ink-900 dark:text-ink-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            4. Appearance
          </h2>

          <div className="bg-white dark:bg-ink-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-ink-900 dark:text-ink-100">
                  Dark mode
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Switch between light and dark theme
                </p>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative w-11 h-6 rounded-full transition-colors ${darkMode ? "bg-mulberry-500" : "bg-gray-300 dark:bg-gray-600"}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${darkMode ? "translate-x-5" : ""}`}
                />
              </button>
            </div>

            <p className="text-xs text-neutral-400 mt-3">
              💡 Tip: your preference is saved in this browser.
            </p>
          </div>
        </section>

        {/* ============ 5. About / Version ============ */}
        <section className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
          <h2 className="text-lg font-bold text-ink-900 dark:text-ink-100 mb-4">
            About
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-mulberry-100 dark:bg-mulberry-900/30 flex items-center justify-center text-2xl">
                🇰🇭
              </div>
              <div>
                <p className="font-bold text-ink-900 dark:text-ink-100">
                  Khmer Merchant Dashboard
                </p>
                <p className="text-xs text-neutral-500">
                  Version {__APP_VERSION__ ?? "1.0.0"}
                </p>
              </div>
            </div>
            <span className="text-xs text-neutral-400 mono">
              Built with Vite + React
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
