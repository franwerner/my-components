// vite.config.js
import { defineConfig } from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import dts from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\ifran\\OneDrive\\Escritorio\\Proyectos\\personal-monorepo\\packages\\my-components";
var vite_config_default = defineConfig(
  () => {
    return {
      plugins: [
        react(),
        dts({
          exclude: ["src/App.tsx", "src/main.tsx"]
        })
      ],
      resolve: {
        alias: {
          "@": path.resolve(__vite_injected_original_dirname, "src")
        }
      },
      build: {
        outDir: "dist",
        lib: {
          entry: path.resolve(__vite_injected_original_dirname, "lib/index.ts"),
          name: "index",
          formats: ["es", "umd"],
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          external: ["react", "react-dom", "framer-motion"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "framer-motion": "FramerMotion"
            }
          }
        }
      }
    };
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpZnJhblxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXFByb3llY3Rvc1xcXFxwZXJzb25hbC1tb25vcmVwb1xcXFxwYWNrYWdlc1xcXFxteS1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpZnJhblxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXFByb3llY3Rvc1xcXFxwZXJzb25hbC1tb25vcmVwb1xcXFxwYWNrYWdlc1xcXFxteS1jb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9pZnJhbi9PbmVEcml2ZS9Fc2NyaXRvcmlvL1Byb3llY3Rvcy9wZXJzb25hbC1tb25vcmVwby9wYWNrYWdlcy9teS1jb21wb25lbnRzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgZHRzKHtcbiAgICAgICAgZXhjbHVkZTogW1wic3JjL0FwcC50c3hcIiwgXCJzcmMvbWFpbi50c3hcIl1cbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpXG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9pbmRleC50cycpLFxuICAgICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCBcImZyYW1lci1tb3Rpb25cIl0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgICAgICAnZnJhbWVyLW1vdGlvbic6ICdGcmFtZXJNb3Rpb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn1cbikiXSwKICAibWFwcGluZ3MiOiAiO0FBQW1jLFNBQVMsb0JBQW9CO0FBQ2hlLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVE7QUFBQSxFQUFhLE1BQU07QUFFaEMsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sSUFBSTtBQUFBLFVBQ0YsU0FBUyxDQUFDLGVBQWUsY0FBYztBQUFBLFFBQ3pDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsVUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsUUFDcEM7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsVUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsVUFDN0MsTUFBTTtBQUFBLFVBQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLFVBQ3JCLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLFFBQ3ZDO0FBQUEsUUFDQSxlQUFlO0FBQUEsVUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLGVBQWU7QUFBQSxVQUNoRCxRQUFRO0FBQUEsWUFDTixTQUFTO0FBQUEsY0FDUCxPQUFPO0FBQUEsY0FDUCxhQUFhO0FBQUEsY0FDYixpQkFBaUI7QUFBQSxZQUNuQjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0E7IiwKICAibmFtZXMiOiBbXQp9Cg==
