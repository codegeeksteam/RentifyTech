import React, { useState, useEffect } from "react";

const SoftMonochromeCountdownTimer = () => {
  // Set end date to December 31, 2024
  const calculateTimeLeft = () => {
    const difference = new Date("April 14, 2025") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [pulseSecond, setPulseSecond] = useState(false);
  const [compactMode, setCompactMode] = useState(false);

  useEffect(() => {
    // Timer for countdown
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setPulseSecond(true);
      setTimeout(() => setPulseSecond(false), 500);
    }, 1000);

    // Timer to switch to compact mode after 5 seconds
    const modeChangeTimer = setTimeout(() => {
      setCompactMode(true);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(modeChangeTimer);
    };
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  if (compactMode) {
    // Compact version that sticks to top right
    return (
      <div className="fixed -top-76 right-4 z-50 bg-white shadow-lg rounded-lg border border-gray-200 p-3 transition-all duration-500">
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold text-gray-600">SALE ENDS:</div>
          <div className="flex gap-1">
            <div className="bg-gray-100 px-2 py-1 rounded">
              <span className="text-sm font-bold text-gray-800">
                {formatTime(timeLeft.days)}
              </span>
              <span className="text-xs text-gray-500 ml-1">d</span>
            </div>
            <div className="bg-gray-100 px-2 py-1 rounded">
              <span className="text-sm font-bold text-gray-800">
                {formatTime(timeLeft.hours)}
              </span>
              <span className="text-xs text-gray-500 ml-1">h</span>
            </div>
            <div className="bg-gray-100 px-2 py-1 rounded">
              <span className="text-sm font-bold text-gray-800">
                {formatTime(timeLeft.minutes)}
              </span>
              <span className="text-xs text-gray-500 ml-1">m</span>
            </div>
            <div
              className={`bg-gray-100 px-2 py-1 rounded ${
                pulseSecond ? "ring-1 ring-gray-400" : ""
              }`}
            >
              <span className="text-sm font-bold text-gray-800">
                {formatTime(timeLeft.seconds)}
              </span>
              <span className="text-xs text-gray-500 ml-1">s</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full version shown initially
  return (
    <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-sm mb-2">
          LIMITED TIME OFFER
        </span>
        <h2 className="text-2xl font-bold text-gray-800">EXCLUSIVE SALE</h2>
        <p className="text-gray-500 text-sm mt-1">Offer ends April 31, 2025</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="bg-white p-3 rounded shadow text-center border border-gray-100">
          <div className="text-3xl font-bold text-gray-800">
            {formatTime(timeLeft.days)}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Days
          </div>
        </div>
        <div className="bg-white p-3 rounded shadow text-center border border-gray-100">
          <div className="text-3xl font-bold text-gray-800">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Hours
          </div>
        </div>
        <div className="bg-white p-3 rounded shadow text-center border border-gray-100">
          <div className="text-3xl font-bold text-gray-800">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Mins
          </div>
        </div>
        <div
          className={`bg-white p-3 rounded shadow text-center border ${
            pulseSecond ? "border-gray-400" : "border-gray-100"
          }`}
        >
          <div className="text-3xl font-bold text-gray-800">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Secs
          </div>
        </div>
      </div>

      <div className="text-center bg-white p-4 rounded shadow-sm border border-gray-100 mb-5">
        <p className="text-gray-600 text-sm font-medium mb-1">Use Promo Code</p>
        <div className="text-xl font-mono font-bold text-gray-800 tracking-wider">
          NoboBorsho-25
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-500 text-sm mb-4">
          Get 45% off your entire purchase
        </p>
        <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded transition-all">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default SoftMonochromeCountdownTimer;
