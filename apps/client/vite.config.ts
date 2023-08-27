import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir:
    process.env.NODE_ENV === "development"
      ? path.join(__dirname, "../../")
      : path.join(__dirname, "./"),
});
