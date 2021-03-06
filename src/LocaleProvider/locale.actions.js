import { CHANGE } from "./locale.constants";
import { RU_TRANSLATION } from "../_locale/ru";
import { KK_TRANSLATION } from "../_locale/kk";
import { EN_TRANSLATION } from "../_locale/en";

export const changeLocale = lang => {
  localStorage.setItem("lang", lang);

  let messages = RU_TRANSLATION.messages;
  if (lang === "kk") messages = KK_TRANSLATION.messages;
  if (lang === "en") messages = EN_TRANSLATION.messages;

  return {
    type: CHANGE,
    lang: lang,
    messages: messages
  };
};
