import { defineRule } from "vee-validate";
import { email} from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {

  defineRule("email", email);
  
  defineRule("required", (value, _ , ctx) => {
    if (!value || value.length < 3) {
      return !value ? `${ctx.field} field is required` : `${ctx.field} field at list should contain 3 characters`;
    }
    return true;
  });
});
