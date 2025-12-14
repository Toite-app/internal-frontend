import {
  BadgePercentIcon,
  BoltIcon,
  CalendarFold,
  CandlestickChartIcon,
  LandmarkIcon,
  Layers,
  LayoutDashboardIcon,
  ShoppingBasketIcon,
  SoupIcon,
  StoreIcon,
  UserIcon,
} from "lucide-react";
import { ReactNode } from "react";

export type MenuItem = {
  labelId: string;
  href?: string;
  icon?: ReactNode;
  childrens?: MenuItem[];
  disabled?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    labelId: "dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon />,
  },
  {
    labelId: "orders",
    href: "/orders",
    icon: <ShoppingBasketIcon />,
    childrens: [
      {
        labelId: "orders-dispatcher",
        href: "/orders/dispatcher",
      },
      {
        labelId: "orders-kitchen",
        href: "/orders/kitchener",
      },
      {
        labelId: "orders-delivery",
        href: "/orders/delivery",
        disabled: true,
      },
      {
        labelId: "orders-archive",
        href: "/orders/archive",
        disabled: true,
      },
    ],
  },
  {
    labelId: "finances",
    icon: <LandmarkIcon />,
    childrens: [
      {
        labelId: "workshifts",
        href: "/workshifts",
        icon: <CalendarFold />,
      },
      {
        labelId: "finances-report",
        href: "/finances",
        icon: <CandlestickChartIcon />,
        disabled: true,
      },
    ],
  },
  {
    labelId: "administrate",
    icon: <BoltIcon />,
    childrens: [
      {
        labelId: "restaurants",
        href: "/restaurants",
        icon: <StoreIcon />,
      },
      {
        labelId: "dishes",
        href: "/dishes",
        icon: <SoupIcon />,
      },
      {
        labelId: "discounts",
        href: "/discounts",
        icon: <BadgePercentIcon />,
      },
      {
        labelId: "workers",
        href: "/workers",
        icon: <Layers />,
      },
      {
        labelId: "guests",
        href: "/guests",
        icon: <UserIcon />,
      },
    ],
  },
];
