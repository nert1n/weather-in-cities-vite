import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import postcssNesting from "postcss-nesting";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
	plugins: [
		react(),
		sitemap({ hostname: "https://www.codersbud.com" }),
		compression({ algorithm: "gzip" }),
		legacy({ targets: ["defaults", "not IE 11"] }),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "robots.txt"],
			manifest: {
				name: "WISICO",
				short_name: "WISICO",
				description: "Weather website",
				theme_color: "#74eeff",
			},
		}),
	],
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@widgets": path.resolve(__dirname, "./src/widgets"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@entities": path.resolve(__dirname, "./src/entities"),
			"@shared": path.resolve(__dirname, "./src/shared"),
		},
	},
	optimizeDeps: { include: ["react", "react-dom"] },
	build: {
		target: "esnext",
		outDir: "dist",
		rollupOptions: {
			input: path.resolve(__dirname, "index.html"),
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.split("node_modules/")[1].split("/")[0];
					}
				},
				chunkFileNames: "assets/[name]-[hash].js",
				assetFileNames: "assets/[name]-[hash][extname]",
			},
		},
		sourcemap: false,
	},
});
