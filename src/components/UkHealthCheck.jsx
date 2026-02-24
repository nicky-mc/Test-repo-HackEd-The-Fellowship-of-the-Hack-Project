import React, { useState } from "react";

const UKHealthCheck = () => {
  const [billData, setBillData] = useState({
    councilTax: "",
    energy: "",
    water: "",
  });

  const handleChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
  };

  const getContext = (valStr, type) => {
    const val = parseFloat(valStr);
    if (!val || isNaN(val)) return null;
    if (type === "energy" && val > 200)
      return "💡 Tip: That's above average for a small home. Look into the Warm Home Discount.";
    if (type === "councilTax" && val > 150)
      return "💡 Tip: If you live alone, you are entitled to a 25% Single Person Discount!";
    return "✅ This is within the typical UK range.";
  };

  const total =
    (parseFloat(billData.councilTax) || 0) +
    (parseFloat(billData.energy) || 0) +
    (parseFloat(billData.water) || 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-sbs-dark text-2xl font-bold mb-2">
        Essential Bill Check 🇬🇧
      </h3>
      <p className="text-gray-600 mb-6">
        Enter your monthly costs to see how they compare to UK averages.
      </p>

      <div className="mb-4">
        <label className="block font-bold text-sbs-dark mb-2">
          Council Tax (£/month)
        </label>
        <input
          name="councilTax"
          type="number"
          value={billData.councilTax}
          onChange={handleChange}
          placeholder="e.g. 120"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbs-mid"
        />
        <small className="block text-sbs-mid font-bold mt-2">
          {getContext(billData.councilTax, "councilTax")}
        </small>
      </div>

      <div className="mb-4">
        <label className="block font-bold text-sbs-dark mb-2">
          Gas & Electric (£/month)
        </label>
        <input
          name="energy"
          type="number"
          value={billData.energy}
          onChange={handleChange}
          placeholder="e.g. 150"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbs-mid"
        />
        <small className="block text-sbs-mid font-bold mt-2">
          {getContext(billData.energy, "energy")}
        </small>
      </div>

      <div className="mb-6">
        <label className="block font-bold text-sbs-dark mb-2">
          Water (£/month)
        </label>
        <input
          name="water"
          type="number"
          value={billData.water}
          onChange={handleChange}
          placeholder="e.g. 30"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbs-mid"
        />
      </div>

      <div className="bg-white border-2 border-sbs-dark p-5 text-center rounded-xl text-sbs-dark">
        <p className="text-lg m-0">
          Total Essentials:{" "}
          <strong className="text-3xl ml-2">£{total.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

export default UKHealthCheck;
