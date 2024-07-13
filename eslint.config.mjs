import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { ...globals.browser, ...globals.node }},
  pluginJs.configs.recommended,
];