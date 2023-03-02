import { createProxyMiddleware } from "http-proxy-middleware";

export default function setPoxy(app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
      ws: true,
    })
  );
}
