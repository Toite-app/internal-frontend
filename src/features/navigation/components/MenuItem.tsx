"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FC, memo, useState } from "react";
import { MenuItem } from "../menu-items";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { MessageCategories } from "@/messages/index.types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useNavigationStore } from "../store";
import { cn } from "@/lib/utils";
type Props = {
  data: MenuItem;
};

const NavMenuItem: FC<Props> = (props) => {
  const { data } = props;
  const { labelId, href, icon, childrens, disabled } = data;

  const isExpandable = childrens && childrens.length > 0;

  const [isExpanded, setIsExpanded] = useState(false);

  const t = useTranslations(MessageCategories.NAVBAR);
  const { isOpen, toggle } = useNavigationStore();

  const pathname = usePathname();

  // Check if current item's href matches the pathname
  const isCurrentItemSelected = href
    ? pathname === href || pathname.startsWith(href + "/")
    : false;

  // Check if any child's href matches the pathname
  const hasSelectedChild =
    childrens?.some((child) =>
      child.href
        ? pathname === child.href || pathname.startsWith(child.href + "/")
        : false
    ) ?? false;

  // Item is selected if:
  // 1. It's the current item (exact match or pathname starts with the href)
  // 2. OR it has children and one of them is selected (for parent items)
  const isSelected =
    isCurrentItemSelected || (isExpandable && hasSelectedChild);

  // Debug: Log selection state for kitchen item
  if (labelId === "orders-kitchen") {
    console.log("🔍 Kitchen Selection:", {
      isCurrentItemSelected,
      hasSelectedChild,
      isSelected,
      pathnameEqualsHref: pathname === href,
      pathnameStartsWithHref: pathname.startsWith(href + "/"),
    });
  }

  const itemClasses = twMerge(
    clsx(
      "flex items-center gap-3 rounded-lg px-3 py-3 transition-all",
      "text-stone-500 dark:text-stone-400",
      !disabled &&
        "hover:bg-stone-200 hover:text-stone-900 dark:hover:text-stone-50 dark:hover:bg-stone-800 dark:hover:text-stone-50",
      isSelected &&
        !disabled &&
        "bg-primary/20 text-primary/80 dark:bg-primary/80 dark:text-stone-50",
      isSelected &&
        !disabled &&
        "hover:bg-primary/30 hover:text-primary/80 dark:hover:bg-primary dark:hover:text-stone-50",
      disabled &&
        "opacity-50 cursor-not-allowed text-stone-400 dark:text-stone-600",
      !isOpen && "justify-center"
    )
  );

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (!isExpandable) {
      toggle();
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (!isOpen) {
      toggle();
      if (isExpanded) return;
    }

    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-full" asChild>
            {disabled ? (
              <button
                data-selected={isSelected}
                className={itemClasses}
                disabled={disabled}
                onClick={handleClick}
                type="button"
              >
                <div className="h-6 w-6">{icon}</div>
                {isOpen && <span>{t(labelId)}</span>}
                {isExpandable && isOpen ? (
                  isExpanded ? (
                    <ChevronUpIcon className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="ml-auto h-4 w-4" />
                  )
                ) : (
                  <></>
                )}
              </button>
            ) : (
              <Link
                data-selected={isSelected}
                className={itemClasses}
                // @ts-ignore
                href={href || "---"}
                onClick={handleClick}
              >
                <div className="h-6 w-6">{icon}</div>
                {isOpen && <span>{t(labelId)}</span>}
                {isExpandable && isOpen ? (
                  isExpanded ? (
                    <ChevronUpIcon className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="ml-auto h-4 w-4" />
                  )
                ) : (
                  <></>
                )}
              </Link>
            )}
          </TooltipTrigger>
          <TooltipContent
            className={cn(
              "absolute left-7 top-1 flex h-[48px] items-center justify-center whitespace-nowrap",
              isOpen && !disabled && "hidden"
            )}
            align="end"
            alignOffset={-300}
          >
            {disabled ? t("page-unavailable") : t(labelId)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {isExpandable && isOpen && isExpanded ? (
        <div className="ml-4">
          {childrens?.map((child) => (
            <NavMenuItem key={child.labelId} data={child} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(NavMenuItem);
