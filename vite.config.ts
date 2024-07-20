import { defineConfig } from "vite";
import vike from "vike/plugin";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";

export default defineConfig({
  plugins: [relay, vike({}), react({})],
});
