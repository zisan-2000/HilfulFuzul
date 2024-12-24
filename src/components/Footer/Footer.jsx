import React from "react";
import Features from "./Features";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import LowerFooter from "./LowerFooter";

const footerLinksData = [
  {
    title: "Explore",
    links: [
      { name: "Shop", path: "/shop" },
      { name: "New Arrivals", path: "/new-arrivals" },
      { name: "Best Sellers", path: "/best-sellers" },
      { name: "Discount Offers", path: "/discount-offers" },
      { name: "Gift Cards", path: "/gift-cards" },
      { name: "Affiliate Program", path: "/affiliate-program" },
      { name: "Become a Vendor", path: "/become-vendor" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Our Story", path: "/our-story" },
      { name: "Careers", path: "/careers" },
      { name: "Sustainability", path: "/sustainability" },
      { name: "Press", path: "/press" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
      { name: "Order Status", path: "/order-status" },
      { name: "Wishlist", path: "/wishlist" },
      { name: "Rewards", path: "/rewards" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Support Center", path: "/support-center" },
      { name: "FAQs", path: "/faqs" },
      { name: "Shipping & Returns", path: "/shipping-returns" },
      { name: "Order Tracking", path: "/order-tracking" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <Features />
      <div className="footer-container mx-auto grid max-w-7xl grid-cols-3 gap-12 px-6">
        <FooterContact />
        {footerLinksData.map((section, index) => (
          <FooterLinks
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
        <FooterSocial />
      </div>
      <LowerFooter />
    </footer>
  );
};

export default Footer;
