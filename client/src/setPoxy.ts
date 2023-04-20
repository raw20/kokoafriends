import { createProxyMiddleware } from "http-proxy-middleware";

export default function setPoxy(app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
      ws: true,
    })
  );
}
