import React, { useState, useEffect } from "react";

export default function KHQRPaymentModal({
  isOpen,
  onClose,
  totalUSD,
  totalKHR,
  onPaymentSuccess,
}) {
  const [timeLeft, setTimeLeft] = useState(30); // រាប់ថយក្រោយ ៣០ វិនាទី
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(30);
      setIsPaid(false);
      return;
    }

    // ដំណើរការ Timer រាប់ថយក្រោយ
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSimulateSuccess = () => {
    setIsPaid(true);
    setTimeout(() => {
      onPaymentSuccess(); // បញ្ចប់ការទូទាត់ និងសម្អាតកន្ត្រក
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-sm w-full p-6 text-center relative border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="bg-khmer-100 text-khmer-700 text-xs font-bold px-2.5 py-1 rounded-full">
            🇰🇭 Bakong KHQR
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">
          ស្កេនដើម្បីទូទាត់ប្រាក់
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          KHQR Secure Payment Gateway
        </p>

        {isPaid ? (
          <div className="py-12">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 animate-bounce">
              ✓
            </div>
            <h4 className="text-lg font-bold text-green-600">
              ទូទាត់ប្រាក់បានជោគជ័យ!
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              សូមអរគុណសម្រាប់ការជាវទំនិញ
            </p>
          </div>
        ) : (
          <>
            {/* Timer Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 rounded-full text-xs font-semibold mb-4">
              <span>⏱️ ពេលវេលាសល់:</span>
              <span className="font-bold">{timeLeft}s</span>
            </div>

            {/* QR Code Mockup Box */}
            <div className="bg-white p-4 rounded-2xl shadow-inner border-2 border-dashed border-khmer-200 inline-block mb-4">
              <div className="w-48 h-48 bg-gray-900 rounded-xl flex flex-col items-center justify-center text-white relative overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-khmer-600 to-gold-500 opacity-90"></div>
                <div className="relative z-10 text-center p-2">
                  <p className="font-black text-lg tracking-wider mb-1">
                    KHQR PAY
                  </p>
                  <div className="bg-white p-2 rounded-lg my-2">
                    {/* Simulated QR Pattern */}
                    <div className="w-24 h-24 bg-gray-900 grid grid-cols-4 gap-1 p-1">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`bg-white ${i % 2 === 0 ? "opacity-100" : "opacity-40"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/90">
                    BAKONG KHMER
                  </p>
                </div>
              </div>
            </div>

            {/* Amount Summary */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-2xl mb-6">
              <p className="text-xs text-gray-500 mb-0.5">
                ទឹកប្រាក់សរុប (Total Amount)
              </p>
              <p className="text-xl font-black text-khmer-600">
                ${totalUSD.toFixed(2)}
              </p>
              <p className="text-xs font-bold text-amber-500">
                {totalKHR.toLocaleString()} ៛
              </p>
            </div>

            {/* Simulate Action Button */}
            <button
              onClick={handleSimulateSuccess}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-sm"
            >
              ✅ ចុចត្រាប់តាមការបង់ប្រាក់ជោគជ័យ
            </button>
          </>
        )}
      </div>
    </div>
  );
}
