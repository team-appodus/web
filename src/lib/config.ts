export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Appodus",
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
  microsoftClarityProjectId: process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_PROJECT_ID,
  // Only use on server
  secretKey: process.env.BACKEND_SECRET_KEY || "",
};
