import type { MenuProps } from "antd";
import type { FooterMenuItem } from "../types";

export const HEADER_MENU_ITEMS: MenuProps["items"] = [
  {
    key: "deliveryModels",
    label: "Delivery Models",
  },
  {
    key: "ourExpertise",
    label: "Our Expertise",
  },
  {
    key: "asset",
    label: "ASSET©",
  },
  {
    key: "aboutUs",
    label: "About Us",
  },
  {
    key: "resources",
    label: "Resources",
  },
];

export const FOOTER_DELIVERY_MODELS: FooterMenuItem[] = [
  { id: "staffing", label: "Staffing", href: "#" },
  { id: "co-managed", label: "Co-Managed", href: "#" },
  { id: "turnkey", label: "TurnKey", href: "#" },
];

export const FOOTER_EXPERTISE: FooterMenuItem[] = [
  { id: "ai-machine-learning", label: "AI & Machine Learning", href: "#" },
  { id: "user-experience", label: "User Experience", href: "#" },
  { id: "architecture", label: "Architecture", href: "#" },
  { id: "application-engineering", label: "Application Engineering", href: "#" },
  { id: "quality-assurance-testing", label: "Quality Assurance & Testing", href: "#" },
  { id: "data-engineering-analytics", label: "Data Engineering & Analytics", href: "#" },
  { id: "devops", label: "DevOps", href: "#" },
];

export const FOOTER_ABOUT_US: FooterMenuItem[] = [
  { id: "vision", label: "Vision", href: "#" },
  { id: "mission", label: "Mission", href: "#" },
  { id: "values", label: "Values", href: "#" },
  { id: "meet-our-leaders", label: "Meet Our Leaders", href: "#" },
  { id: "careers", label: "Careers", href: "#" },
];

export const FOOTER_RESOURCES: FooterMenuItem[] = [
  { id: "case-studies", label: "Case Studies", href: "#" },
  { id: "white-papers", label: "White Papers", href: "#" },
  { id: "blog", label: "Blog", href: "#" },
  { id: "webinars", label: "Webinars", href: "#" },
  { id: "reports", label: "Reports", href: "#" },
];

export const FOOTER_CONTACT: FooterMenuItem[] = [
  {
    id: "risk-free-trial",
    label: "Secure a 30-Day Risk-Free Trial",
    href: "#",
  },
];
