import {
  ShoppingCart,
  Package,
  Factory,
  Warehouse,
  CheckCircle,
  DollarSign,
  BarChart3,
  Settings,
  Cog,
} from 'lucide-react';
import {
  FaTasks,
  FaChartLine,
  FaMicrophone,
  FaSave,
} from 'react-icons/fa';

export const coreModules = [
  {
    icon: ShoppingCart,
    title: "Sales & CRM",
    description: "Manage customer relationships and streamline sales operations with integrated CRM functionality."
  },
  {
    icon: Package,
    title: "Purchase Management",
    description: "Optimize procurement processes and vendor management with comprehensive purchase controls."
  },
  {
    icon: Factory,
    title: "Production Planning & Control (PPC)",
    description: "Plan and monitor production schedules with real-time control and visibility."
  },
  {
    icon: Warehouse,
    title: "Bill of Materials (BOM)",
    description: "Create and manage complex material structures for efficient manufacturing operations."
  },
  {
    icon: Package,
    title: "Inventory & Warehouse Management",
    description: "Real-time inventory tracking and warehouse operations for optimal stock management."
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Ensure product quality with comprehensive quality management and control systems."
  },
  {
    icon: DollarSign,
    title: "Finance & Accounting",
    description: "Complete financial management including GL, AR, AP, and financial reporting."
  },
  {
    icon: BarChart3,
    title: "GST, E-Invoice & E-Way Bill",
    description: "Full compliance with Indian GST regulations and electronic documentation requirements."
  },
  {
    icon: Settings,
    title: "MIS & Custom Reports",
    description: "Create custom reports and gain actionable insights from your business data."
  }
];

export const keyFeaturesData = [
  {
    icon: FaTasks,
    iconBg: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/20",
    title: "Manufacturing-Focused ERP, not a generic system",
    description: "Built specifically for manufacturing, not a generic system. Purpose-built features for engineering and fabrication businesses."
  },
  {
    icon: FaChartLine,
    iconBg: "from-blue-400 to-indigo-600",
    shadowColor: "shadow-blue-500/20",
    title: "Real-time production and inventory tracking",
    description: "Monitor production and inventory in real-time with complete visibility across your operations."
  },
  {
    icon: FaMicrophone,
    iconBg: "from-green-400 to-emerald-600",
    shadowColor: "shadow-green-500/20",
    title: "Job-wise costing and profitability analysis",
    description: "Analyze profitability at the job level with detailed cost tracking and reporting."
  },
  {
    icon: FaSave,
    iconBg: "from-orange-400 to-red-500",
    shadowColor: "shadow-orange-500/20",
    title: "Customizable workflows and reports",
    description: "Adapt the system to your unique business processes with flexible workflow customization."
  }
];

export const targetUsers = [
  {
    title: "Engineering Manufacturing Companies",
    description: "Complete ERP solution for engineering manufacturers."
  },
  {
    title: "Fabrication & Job Work Industries",
    description: "Specialized support for fabrication and job work operations."
  },
  {
    title: "Machine Component Manufacturers",
    description: "Tailored for machine component and precision manufacturing."
  },
  {
    title: "Project-Based Manufacturing Units",
    description: "Solutions for project-driven manufacturing operations."
  },
  {
    title: "MSMEs & Growing Enterprises",
    description: "Scalable ERP for small, medium, and growing enterprises."
  }
];

export const industriesServed = [
  {
    title: "Engineering & Manufacturing",
    description: "Comprehensive ERP solutions for engineering manufacturers.",
    icon: "⚙️"
  },
  {
    title: "Heavy Fabrication",
    description: "Specialized support for heavy fabrication and large-scale manufacturing operations.",
    icon: "🔧"
  },
  {
    title: "Pharma Equipment Manufacturing",
    description: "Compliance-ready solutions for pharmaceutical equipment manufacturers.",
    icon: "💊"
  },
  {
    title: "Machine Tools & Components",
    description: "Optimized for machine tools and industrial component manufacturers.",
    icon: "🏭"
  }
];
