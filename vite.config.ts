import { defineConfig } from "vite";
import withReactRouter from "vite-plugin-next-react-router";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), withReactRouter()],
  server: {
    port: 5174  
  }
});