"use client";
import { FC, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { US, RU, EE } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showText?: boolean;
};

const LanguageSelector: FC<Props> = ({ showText = true, className }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = useCallback(
    (locale: string) => {
      router.replace(pathname as any, {
        locale,
      });
    },
    [router, pathname]
  );

  const CurrentFlag = () => {
    switch (locale) {
      case "en":
        return <US className="w-5" />;
      case "ru":
        return <RU className="w-5" />;
      case "et":
        return <EE className="w-5" />;
      default:
        return <US className="w-5" />;
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Select value={locale} onValueChange={handleChange}>
        <SelectTrigger className={cn("w-full")}>
          {showText ? <SelectValue placeholder="Language" /> : <CurrentFlag />}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <div className="flex flex-row items-center gap-2">
              <US className="w-5" />
              <p>English</p>
            </div>
          </SelectItem>
          <SelectItem value="ru">
            <div className="flex flex-row items-center gap-2">
              <RU className="w-5" />
              <p>Русский</p>
            </div>
          </SelectItem>
          <SelectItem value="et">
            <div className="flex flex-row items-center gap-2">
              <EE className="w-5" />
              <p>Eesti</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
