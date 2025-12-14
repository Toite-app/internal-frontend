import { FC, PropsWithChildren } from "react";
import Providers from "./providers";
import "./globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { IntlPageParams } from "@/types/i18n.types";
import { locales } from "@/config";
import { Toaster } from "@/components/ui/toaster";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const LocaleLayout: FC<PropsWithChildren & IntlPageParams> = async (props) => {
  const {
    children,
    params: { locale },
  } = props;

  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <Providers {...{ locale, messages }}>
      {children}
      <Toaster />
    </Providers>
  );
};

export default LocaleLayout;
