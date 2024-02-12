import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    callbackUrl: "",
    uploadthingId: `process.env.NEXT-PUBLIC_UPLOADTHING_APP_ID`,
    uploadthingSecret:
      "sk_live_38d6b7c1fc25847dd32d074ccc645752ad0b0e144be93b6b539a73e9f9238e8b",
  },
});
