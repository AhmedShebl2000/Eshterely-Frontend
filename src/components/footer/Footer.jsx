import { useState } from "react";
import FooterItem from "./FooterItem";
import { TfiWorld } from "react-icons/tfi";

const customer_care = {
  id: 1,
  menu: [
    "Exclusive services",
    "FAQ",
    "Service and Support",
    "Contact us",
    "Find store",
  ],
};
const our_policies = {
  id: 2,
  menu: [
    "Accessibility",
    "Counterfeit",
    "Cookie Settings",
    "Cookie Policy",
    "Privacy Policy",
    "Policies and terms",
  ],
};
const our_company = {
  id: 3,
  menu: [
    "Sustainability",
    "Investors",
    "Careers",
    "Press",
    "Custom integration",
    "Become a sales partner",
    "Contact us",
  ],
};
const social_links = {
  id: 4,
  menu: [
    "Facebook",
    "Instagram",
    "LinkedIn",
    "X",
    "Youtube",
    "TikTok",
    "Pinterest",
  ],
};
const download_our_app = {
  id: 5,
  menu: ["Discover Bang & Olufsen apps"],
};
const international = {
  id: 6,
  menu: ["English", "Arabic", "French", " Spanish", " German", "Italian"],
};

function Footer() {
  const [selectedID, setSelectedID] = useState(false);

  return (
    <div className="flex flex-col justify-between h-[500px] bg-[#191817] text-white p-4 px-12">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6 gap-x-26 h-2 mt-40">
        <FooterItem
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          id={customer_care.id}
          menuArr={customer_care.menu}
        >
          CUSTOMER CARE
        </FooterItem>
        <FooterItem
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          id={our_policies.id}
          menuArr={our_policies.menu}
        >
          OUR POLICIES
        </FooterItem>
        <FooterItem
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          id={our_company.id}
          menuArr={our_company.menu}
        >
          OUR COMPANY
        </FooterItem>
        <FooterItem
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          id={social_links.id}
          menuArr={social_links.menu}
        >
          SOCIAL LINKS
        </FooterItem>
        <FooterItem
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          id={download_our_app.id}
          menuArr={download_our_app.menu}
        >
          DOWNLOAD OUR APPS
        </FooterItem>
        <FooterItem
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          id={international.id}
          menuArr={international.menu}
        >
          <div className="flex items-center gap-3">
            <TfiWorld />
            <div className="flex flex-col ">
              <p>International</p>
              <p className="text-sm">English</p>
            </div>
          </div>
        </FooterItem>
      </div>
      <p className="text-xs mb-5">© Bang & Olufsen 2025</p>
    </div>
  );
}

export default Footer;
