

const Footer = () => {
  return (
    <footer className="pt-10 pb-5">
      {/* box 1 */}
      <div className="flex flex-col  sm:justify-between  mx-5 md:flex-row gap-3">
        <div>
          <img src="/logo.png" alt="logo" className="h-28 select-none" />
          <div className="footer_items">Bynry Inc</div>
          <div className="footer_items">Pune</div>
          <div className="footer_items">contact@bynry.io</div>
        </div>
        {/* box 2 */}
        <div>
          <h4 className="footer_items text-primary font-extrabold">Company</h4>
          <div className="footer_items">About Us</div>
          <div className="footer_items">Careers</div>
          <div className="footer_items">Patners</div>
          <div className="footer_items">Pricing</div>
        </div>
        {/* box 3 */}
        <div>
          <h4 className="footer_items text-primary font-extrabold">
            Solutions by Industry
          </h4>
          <div className="footer_items">Water</div>
          <div className="footer_items">Electric</div>
          <div className="footer_items">Gas</div>
          <h4 className="footer_items text-primary font-extrabold">
            Solutions by Use Cases
          </h4>
          <div className="footer_items">Customer & Self-Service</div>
          <div className="footer_items">Meter Data Management</div>
          <div className="footer_items">Billing & Collection</div>
        </div>
        {/* box 4 */}
        <div>
          <h4 className="footer_items text-primary font-extrabold">
            Solutions by Services
          </h4>
          <div className="footer_items">Consulting Services</div>
          <div className="footer_items">Implementation Services</div>
          <div className="footer_items">Customer Success & Support</div>
        </div>
      </div>
      <div className="border border-gray-500 border-x-2"></div>
      <div className="text-center mt-3 font-serif">Copyrights©Bynry.com</div>
    </footer>
  );
};

export default Footer;
