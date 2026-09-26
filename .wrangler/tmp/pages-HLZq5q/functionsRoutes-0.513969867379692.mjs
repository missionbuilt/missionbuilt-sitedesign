import { onRequestGet as __api_beta_js_onRequestGet } from "/Users/mike/Projects/missionbuilt-site/functions/api/beta.js"
import { onRequestPost as __api_beta_js_onRequestPost } from "/Users/mike/Projects/missionbuilt-site/functions/api/beta.js"
import { onRequest as __api_beta_js_onRequest } from "/Users/mike/Projects/missionbuilt-site/functions/api/beta.js"

export const routes = [
    {
      routePath: "/api/beta",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_beta_js_onRequestGet],
    },
  {
      routePath: "/api/beta",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_beta_js_onRequestPost],
    },
  {
      routePath: "/api/beta",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_beta_js_onRequest],
    },
  ]