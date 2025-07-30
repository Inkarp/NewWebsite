import React, { useState } from "react";

const countryStateMap = {
  IN: ["AP", "AR", "AS", "BR", "CH", "CT", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL", "MP", "MH", "MN", "ML", "MZ", "NL", "OD", "PB", "RJ", "SK", "TN", "TS", "TR", "UK", "UP", "WB", "AN", "CH", "DN", "DD", "LA", "LD", "PY"],
  
};

const WebToLeadForm = () => {
  const [country, setCountry] = useState("");
  const [stateOptions, setStateOptions] = useState([]);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setCountry(selected);
    setStateOptions(countryStateMap[selected] || []);
  };

  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      className="max-w-4xl mx-auto  font-['Roboto'] text-sm"
    >
      <input type="hidden" name="oid" value="00D5j00000CAlac" />
      <input type="hidden" name="retURL" value="https://www.inkarp.co.in/thank_you.html" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label> */}
          <input name="last_name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="text" placeholder="Name *" required />
        </div>
        <div>
          <input name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="text" placeholder="Company *" required />
        </div>
        <div>
          <input name="00N5j00000LJtCV" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="text" placeholder="Job Title" />
        </div>
        <div>
          <select name="00NJ40000049PRB" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" placeholder="Department">
            <option value="">Department</option>
            <option value="R&amp;D">R&D</option>
            <option value="Application Support">Application Support</option>
            <option value="Quality Control (QC)">Quality Control (QC)</option>
            <option value="Quality Assurance (QA)">Quality Assurance (QA)</option>
            <option value="Analytical Laboratory Services">Analytical Laboratory Services</option>
            <option value="Regulatory Affairs">Regulatory Affairs</option>
            <option value="Product Development">Product Development</option>
            <option value="Validation &amp; Calibration">Validation & Calibration</option>
            <option value="Technical Services">Technical Services</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <input name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="email" placeholder="Email *" required />
        </div>
        <div>
          <input name="mobile" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="tel" placeholder="Mobile *" required />
        </div>
        <div>
          <select name="country_code" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" value={country} onChange={handleCountryChange} required>
            <option value="">Country</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <select name="state_code" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" required>
            <option value="">State</option>
            {stateOptions.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div>
          <input name="city" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="text" placeholder="City *" required />
        </div>
      </div>

      <div className="mt-6">
        <textarea name="00N5j00000SqALa" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" rows={3} placeholder="Enquired Products"></textarea>
      </div>

      <div className="mt-6">
        <input name="00N5j00000LJSqS" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" type="text" placeholder="Application" />
      </div>

      <div className="mt-6">
        <textarea name="00NJ40000047Ov0" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] font-[Roboto]" rows={3} placeholder="Additional Comments"></textarea>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium font-[Roboto] focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default WebToLeadForm;
