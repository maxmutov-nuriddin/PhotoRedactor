import { locales } from "@/i18n/routing";

export const ADSENSE_CLIENT = "";

export const AD_FREE_ROUTES = ["/editor", "/code", "/tweet", "/store-screenshots"];

const AD_FREE_PATH = new RegExp(
  `^(/(${locales.join("|")}))?(${AD_FREE_ROUTES.join("|")})/?$`
);

export function isAdFreePath(pathname: string): boolean {
  return AD_FREE_PATH.test(pathname);
}

export function AdSenseScript() {
  return null;
}
