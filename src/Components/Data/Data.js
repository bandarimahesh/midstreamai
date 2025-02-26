import Industries1 from "../../Assets/Industries/Industies1.jpg";
import Industries2 from "../../Assets/Industries/Industies2.jpg";
import Industries3 from "../../Assets/Industries/Industies3.jpg";
import Industries4 from "../../Assets/Industries/Industies4.jpg";
import SolImage1 from "../../Assets/Services/Solutions1.jpg";
import SolImage2 from "../../Assets/Services/Solutions2.cms";
import SolImage3 from "../../Assets/Services/Solutions3.jpg";
import SolImage4 from "../../Assets/Services/Solutions4.jpg";
export const NavbarData = [
  {
    id: 1,
    menuName: "Home",
    url: "/",
    className: "menu-li",
  },
  {
    id: 2,
    menuName: "About Us",
    url: "/about",
    className: "menu-li",
  },
  {
    id: 3,
    menuName: "Services",
    url: "/services",
    className: "menu-li",
  },
  {
    id: 4,
    menuName: "Products",
    url: "/products",
    className: "menu-li hide",
  },
  {
    id: 5,
    menuName: "Industries",
    url: "/industries",
    className: "menu-li",
  },
  {
    id: 7,
    menuName: "Blog",
    url: "/blog",
    className: "menu-li hide",
  },
  {
    id: 8,
    menuName: "Career",
    url: "/career",
    className: "menu-li hide",
  },
];

export const IndustriesData = [
  {
    title: "Oil",
    title1: "",
    image: Industries1,
    description: "Crude and Refine Products Pipelines",
  },
  {
    title: "Gas",
    title1: "",
    image: Industries2,
    description: "Natural Gas and Natural Gas Liquids Pipelines",
  },
  {
    title: "Chemicals ",
    title1: "",
    image: Industries3,
    description: "Petro Chemical and Chemical Pipelines",
  },
];
export const integrityData = [
  {
    title: "AI-Powered Leak Detection",
    content: [
      "1. Uses machine learning models trained on historical data",
      "2. Real-time detection with minimal false alarms",
      "3. Integrates with SCADA systems",
    ],
  },
  {
    title: "Corrosion & Fatigue Monitoring",
    content: [
      "1. Predicts pipeline degradation using advanced analytics",
      "2. Provides recommendations for maintenance schedules",
    ],
  },
  {
    title: "Pipeline Risk Assessment",
    content: [
      "1. AI-driven risk evaluation based on historical failure patterns",
      "2. Customizable dashboards for risk visualization",
    ],
  },
];
export const operationData = [
  {
    title: "Flow Efficiency Optimization",
    content: [
      "1. Real-time adjustments to minimize energy consumption",
      "2. Hydraulic modeling and pressure balancing",
    ],
  },
  {
    title: "Batch Tracking & Product Scheduling",
    content: [
      "1. AI-powered batch tracking to optimize product movement",
      "2. Predicts estimated time of arrival (ETA) at delivery points",
    ],
  },
  {
    title: "Real-Time Data Analytics",
    content: [
      "1. Data-driven insights to optimize throughput",
      "2. Cloud-based platform with historical trend analysis",
    ],
  },
];
export const maintenanceData = [
  {
    title: "Asset Health Monitoring",
    content: [
      "1. Detects anomalies in pumps, compressors, and valves",
      "2. Reduces unplanned downtime with AI-driven alerts",
    ],
  },
  {
    title: "Equipment Failure Prediction",
    content: [
      "1. Uses historical failure data to predict equipment malfunctions",
      "2. Optimizes maintenance schedules based on risk assessment",
    ],
  },
  {
    title: "Regulatory Compliance & Reporting",
    content: [
      "1. Automated compliance tracking for PHMSA, EPA, and API standards",
      "2. Report generation with minimal manual effort",
    ],
  },
];

export const SolutionsData = [
  {
    title: "Leak Detection",
    image: SolImage1,
  },
  {
    title: "Batch Tracking",
    image: SolImage2,
  },
  {
    title: "Operator Training Simulator",
    image: SolImage3,
  },
  {
    title: "Product Compatibility",
    image: SolImage4,
  },
];

// export const IndustriesData = [
//   {
//     title: "Crude Oil Pipelines",
//     title1: "",
//     image: Industries1,
//   },
//   {
//     title: "Refined Products ",
//     title1: "Pipelines",
//     image: Industries2,
//   },
//   {
//     title: "Petrochemical and ",
//     title1: "Chemical Pipelines",
//     image: Industries3,
//   },
//   {
//     title: "Natural Gas and ",
//     title1: "Liquids Transmission",
//     image: Industries4,
//   },
// ];
