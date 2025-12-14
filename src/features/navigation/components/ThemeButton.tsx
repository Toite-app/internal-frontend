import { Button } from "@/components/ui/button";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { cn } from "@/lib/utils";
import { MessageCategories } from "@/messages/index.types";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { FC } from "react";

type Props = {
  className?: string;
  showText?: boolean;
};

export const ThemeButton: FC<Props> = (props) => {
  const { showText = true, className } = props;

  const t = useTranslations(MessageCategories.TOITE);
  const { theme, setTheme } = useTheme();

  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return null;
  }

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      suppressHydrationWarning
    >
      <Button
        className={cn(
          "flex w-full flex-row items-center justify-start gap-2",
          !showText && "justify-center"
        )}
        variant="outline"
        size="sm"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <>
            <SunIcon className="h-6 w-6" />
            {showText && (
              <span className="whitespace-nowrap">{t("light-mode")}</span>
            )}
          </>
        ) : (
          <>
            <MoonIcon className="h-6 w-6" />
            {showText && (
              <span className="whitespace-nowrap">{t("dark-mode")}</span>
            )}
          </>
        )}
      </Button>
    </div>
  );
};

export default ThemeButton;
