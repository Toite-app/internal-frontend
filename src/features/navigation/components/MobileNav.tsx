"use client";

import { FC } from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import TOITE_CONFIG from "@config";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { menuItems } from "../menu-items";
import NavMenuItem from "./MenuItem";
import { useNavigationStore } from "../store";
import ThemeButton from "./ThemeButton";
import LanguageSelector from "@/components/toite/language-selector";
import { useSession } from "@/features/guards/hooks/useSession";
import { useTranslations } from "next-intl";
import { MessageCategories } from "@/messages/index.types";
import { LogoutButton } from "./LogoutButton";
import { Link } from "@/navigation";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const MobileNav: FC = () => {
  const { isMobileOpen, toggleMobile, closeMobile } = useNavigationStore();
  const { data } = useSession();

  const t = useTranslations(MessageCategories.ROLES);

  const name = data?.name ?? data?.login;

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b bg-stone-50 px-4 md:hidden dark:bg-stone-900">
        <Link href="/dashboard" className="relative h-[24px] w-[100px] dark:invert">
          <Image
            src={TOITE_CONFIG.logo.svg}
            fill
            style={{
              width: "100%",
              objectFit: "contain",
              objectPosition: "left",
            }}
            alt=""
            priority
          />
        </Link>
        <Button variant="outline" size="sm" onClick={toggleMobile}>
          <MenuIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Sheet Drawer */}
      <Sheet open={isMobileOpen} onOpenChange={(open) => !open && closeMobile()}>
        <SheetContent side="left" className="flex w-[300px] flex-col p-0">
          <SheetHeader className="border-b border-stone-200 p-4 dark:border-stone-800">
            <VisuallyHidden.Root>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden.Root>
            <Link
              href="/dashboard"
              onClick={closeMobile}
              className="relative h-[30px] w-[150px] dark:invert"
            >
              <Image
                src={TOITE_CONFIG.logo.svg}
                fill
                style={{
                  width: "100%",
                  objectFit: "contain",
                  objectPosition: "left",
                }}
                alt=""
                priority
              />
            </Link>
          </SheetHeader>

          <div className="flex-1 overflow-hidden py-4">
            <ScrollArea className="h-full w-full">
              <nav className="grid items-start gap-1 px-4 text-base font-medium">
                {menuItems.map((item) => (
                  <NavMenuItem data={item} key={item.labelId} />
                ))}
              </nav>
            </ScrollArea>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <div className="flex flex-col gap-2 px-4">
              <LanguageSelector showText className="w-full" />
              <ThemeButton showText className="w-full" />
            </div>
            <div className="flex min-w-[250px] flex-row items-center border-t border-stone-200 p-4 dark:border-stone-800">
              <Avatar className="mr-4 h-9 w-9">
                <AvatarFallback>
                  <span>{name?.charAt(0).toUpperCase()}</span>
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="whitespace-nowrap font-semibold">{name}</h3>
                <p className="whitespace-nowrap text-sm text-stone-500 dark:text-stone-400">
                  {t(data?.role ?? "User")}
                </p>
              </div>
              <LogoutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;

