import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function TermsAndConditions() {
  const contentRef = useRef(null);

  
  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(element, {
  scale: 2,
  useCORS: true,
  foreignObjectRendering: false
});  

    const element = contentRef.current;
    
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save("terms-and-conditions.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Download PDF
        </button>
      </div>

      {/* ✅ Entire content is wrapped in the ref */}
      <div ref={contentRef}>
        <h1 className="text-3xl font-bold mb-6">
          Terms and Conditions of Sales and After-Sales Service
        </h1>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <p><strong>Effective Date:</strong> March 3, 2025</p>

          <section>
            <h2 className="font-semibold text-lg mb-2">1. COMPANY INFORMATION</h2>
            <p><strong>1.1 Inkarp Instruments Pvt. Ltd.</strong><br />
              Head Office:<br />
              Plot No - 5A/10-11, 3rd Floor, IDA Nacharam, Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad, Telangana 500076.<br />
              GST Number: 36AABCI2728R1Z4
            </p>
            <p className="mt-4"><strong>1.2 Inkarp Instruments Services</strong><br />
              Head Office:<br />
              Plot No - 5A/10-11, 2nd Floor, IDA Nacharam, Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad, Telangana 500076.<br />
              GST Number: 36AABFI9315B1ZQ
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. APPLICABILITY</h2>
            <p>2.1 These T&Cs apply to all sales of products, spare parts, accessories, and services by Inkarp Instruments Pvt. Ltd. and Inkarp Instruments Services (collectively referred to as "Inkarp") to any individual, company, or entity ("Buyer").</p>
            <p>2.2 By placing an order, Buyer acknowledges, accepts, and agrees to these T&Cs.</p>
            <p>2.3 These T&Cs may be amended without prior notice. The latest version will always be available at www.inkarp.co.in.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. QUOTATIONS & ORDERS</h2>
            <p>3.1 Quotations are valid for a maximum of 30 days from the date of issue unless otherwise stated in writing.</p>
            <p>3.2 Orders are confirmed only upon written acceptance by Inkarp.</p>
            <p>3.3 Confirmed orders cannot be cancelled unless Inkarp agrees in writing.</p>
            <p>3.4 Orders may be subject to minimum order value requirements based on product type.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. PRICING, PAYMENT & OWNERSHIP RETENTION</h2>
            <p>4.1 Prices are in INR unless specified otherwise.</p>
            <p>4.2 Prices exclude:<br />
              - GST and other applicable taxes.<br />
              - Freight, packaging, insurance, handling charges.<br />
              - Import duties or customs clearances (if applicable).
            </p>
            <p>4.3 GST will be applied as per the rate prevailing at the time of billing.</p>
            <p>4.4 For SEZ customers, GST exemption will be granted only if all valid SEZ documents are received before invoicing. Otherwise, GST will be charged and recovered.</p>
            <p><strong>4.5 Ownership Retention Clause:</strong><br />
              - Until full payment is received, the product remains the exclusive property of Inkarp.<br />
              - Buyer is not allowed to resell, transfer, pledge, or lease the product without Inkarp’s written consent.<br />
              - Inkarp may repossess the product if payment is delayed beyond 90 days.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. DELIVERY, SHIPMENT & RISK OF LOSS</h2>
            <p>5.1 Delivery dates are estimates and may change based on availability or import delays.</p>
            <p>5.2 Products are supplied on Ex-Works (Inkarp Facility, Hyderabad) unless agreed otherwise.</p>
            <p>5.3 Risk and title pass to Buyer upon handover to the carrier.</p>
            <p>5.4 Inkarp is not responsible for transit delays or damage after dispatch.</p>
            <p>5.5 Partial deliveries are allowed and invoiced separately.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. ORDER CANCELLATION & RETURNS</h2>
            <p>6.1 Orders cannot be cancelled post-confirmation unless agreed in writing.</p>
            <p>6.2 Returns are only accepted if:<br />
              - Wrong product was supplied<br />
              - Manufacturing defect is reported within 7 days
            </p>
            <p><em>Disclaimer:</em> Replacement or repair is at Inkarp’s discretion.</p>
            <p>6.3 All returns require prior approval and RMA number.</p>
            <p>6.4 Non-defective returns attract a 25% restocking fee.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. WARRANTY POLICY</h2>
            <p>7.1 Standard warranty: 12 months from shipment, for manufacturing defects only.</p>
            <p>7.2 Does not cover wear & tear parts (glassware, tubing, sensors, lamps, belts, etc.).</p>
            <p>7.3 Warranty void if product is misused, altered, or repaired by unauthorized personnel.</p>
            <p>7.4 Warranty covers repair/replacement only. No refunds under warranty.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. FOREIGN CURRENCY (FC) ORDERS – OEM RESPONSIBILITY</h2>
            <p>8.1 In FC Orders, Buyer transacts directly with OEM; Inkarp is only a facilitator.</p>
            <p>8.2 OEM is solely responsible for performance, warranty, and service obligations.</p>
            <p>8.3 Inkarp holds no legal responsibility for failures or disputes in FC Orders.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">9. GOVERNING LAW & JURISDICTION</h2>
            <p>9.1 Governed by Indian law.</p>
            <p>9.2 All disputes fall under Hyderabad, Telangana jurisdiction.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">10. CUSTOMER DATA & PRIVACY</h2>
            <p>10.1 Inkarp may collect and process customer data for support, order, and legal compliance.</p>
            <p>This data may be shared with operational partners (e.g., logistics, auditors) only as needed.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

