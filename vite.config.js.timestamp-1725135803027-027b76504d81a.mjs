// vite.config.js
import { defineConfig } from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path2 from "path";
import dts from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/vite-plugin-dts/dist/index.mjs";

// ../../alias.config.js
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\ifran\\OneDrive\\Escritorio\\Proyectos\\personal-monorepo";
var alias_config_default = {
  "@responsive-component": path.resolve(__vite_injected_original_dirname, "packages/responsive-component/src"),
  "@my-components": path.resolve(__vite_injected_original_dirname, "packages/my-components/src"),
  "@my-utilities": path.resolve(__vite_injected_original_dirname, "packages/my-utilities/src"),
  "my-utilities": path.resolve(__vite_injected_original_dirname, "packages/my-utilities/lib/index.ts"),
  "responsive-component": path.resolve(__vite_injected_original_dirname, "packages/responsive-component/lib/index.ts")
};

// vite.config.js
var __vite_injected_original_dirname2 = "C:\\Users\\ifran\\OneDrive\\Escritorio\\Proyectos\\personal-monorepo\\packages\\my-components";
var vite_config_default = defineConfig(
  ({ command }) => {
    const isBuild = command == "build" ? {
      "@my-components": path2.resolve(__vite_injected_original_dirname2, "src")
    } : alias_config_default;
    return {
      plugins: [
        react(),
        dts({
          tsconfigPath: "./tsconfig.app.json",
          exclude: ["src/App.tsx", "src/main.tsx"]
        })
      ],
      resolve: {
        alias: isBuild
      },
      build: {
        outDir: "dist",
        lib: {
          entry: path2.resolve(__vite_injected_original_dirname2, "lib/index.ts"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAiLi4vLi4vYWxpYXMuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaWZyYW5cXFxcT25lRHJpdmVcXFxcRXNjcml0b3Jpb1xcXFxQcm95ZWN0b3NcXFxccGVyc29uYWwtbW9ub3JlcG9cXFxccGFja2FnZXNcXFxcbXktY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaWZyYW5cXFxcT25lRHJpdmVcXFxcRXNjcml0b3Jpb1xcXFxQcm95ZWN0b3NcXFxccGVyc29uYWwtbW9ub3JlcG9cXFxccGFja2FnZXNcXFxcbXktY29tcG9uZW50c1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaWZyYW4vT25lRHJpdmUvRXNjcml0b3Jpby9Qcm95ZWN0b3MvcGVyc29uYWwtbW9ub3JlcG8vcGFja2FnZXMvbXktY29tcG9uZW50cy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgYWxpYXMgZnJvbSBcIi4uLy4uL2FsaWFzLmNvbmZpZy5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+IHtcblxuICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PSBcImJ1aWxkXCIgP1xuICAgIHtcbiAgICAgIFwiQG15LWNvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIilcbiAgICB9XG4gICAgOiBhbGlhc1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBkdHMoe1xuICAgICAgICB0c2NvbmZpZ1BhdGg6IFwiLi90c2NvbmZpZy5hcHAuanNvblwiLFxuICAgICAgICBleGNsdWRlOiBbXCJzcmMvQXBwLnRzeFwiLCBcInNyYy9tYWluLnRzeFwiXVxuICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogaXNCdWlsZFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvaW5kZXgudHMnKSxcbiAgICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgXCJmcmFtZXItbW90aW9uXCJdLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICAgICAgJ2ZyYW1lci1tb3Rpb24nOiAnRnJhbWVyTW90aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59XG4pIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpZnJhblxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXFByb3llY3Rvc1xcXFxwZXJzb25hbC1tb25vcmVwb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaWZyYW5cXFxcT25lRHJpdmVcXFxcRXNjcml0b3Jpb1xcXFxQcm95ZWN0b3NcXFxccGVyc29uYWwtbW9ub3JlcG9cXFxcYWxpYXMuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9pZnJhbi9PbmVEcml2ZS9Fc2NyaXRvcmlvL1Byb3llY3Rvcy9wZXJzb25hbC1tb25vcmVwby9hbGlhcy5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcIkByZXNwb25zaXZlLWNvbXBvbmVudFwiIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInBhY2thZ2VzL3Jlc3BvbnNpdmUtY29tcG9uZW50L3NyY1wiKSxcclxuICAgIFwiQG15LWNvbXBvbmVudHNcIiA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCJwYWNrYWdlcy9teS1jb21wb25lbnRzL3NyY1wiKSxcclxuICAgIFwiQG15LXV0aWxpdGllc1wiIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInBhY2thZ2VzL215LXV0aWxpdGllcy9zcmNcIiksXHJcbiAgICBcIm15LXV0aWxpdGllc1wiIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInBhY2thZ2VzL215LXV0aWxpdGllcy9saWIvaW5kZXgudHNcIiksXHJcbiAgICBcInJlc3BvbnNpdmUtY29tcG9uZW50XCIgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwicGFja2FnZXMvcmVzcG9uc2l2ZS1jb21wb25lbnQvbGliL2luZGV4LnRzXCIpXHJcbn1cclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbWMsU0FBUyxvQkFBb0I7QUFDaGUsT0FBTyxXQUFXO0FBQ2xCLE9BQU9BLFdBQVU7QUFDakIsT0FBTyxTQUFTOzs7QUNINFcsT0FBTyxVQUFVO0FBQTdZLElBQU0sbUNBQW1DO0FBRXpDLElBQU8sdUJBQVE7QUFBQSxFQUNYLHlCQUEwQixLQUFLLFFBQVEsa0NBQVUsbUNBQW1DO0FBQUEsRUFDcEYsa0JBQW1CLEtBQUssUUFBUSxrQ0FBVSw0QkFBNEI7QUFBQSxFQUN0RSxpQkFBa0IsS0FBSyxRQUFRLGtDQUFVLDJCQUEyQjtBQUFBLEVBQ3BFLGdCQUFpQixLQUFLLFFBQVEsa0NBQVUsb0NBQW9DO0FBQUEsRUFDNUUsd0JBQXlCLEtBQUssUUFBUSxrQ0FBVSw0Q0FBNEM7QUFDaEc7OztBRFJBLElBQU1DLG9DQUFtQztBQU16QyxJQUFPLHNCQUFRO0FBQUEsRUFBYSxDQUFDLEVBQUUsUUFBUSxNQUFNO0FBRTNDLFVBQU0sVUFBVSxXQUFXLFVBQ3pCO0FBQUEsTUFDRSxrQkFBa0JDLE1BQUssUUFBUUMsbUNBQVcsS0FBSztBQUFBLElBQ2pELElBQ0U7QUFDSixXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixJQUFJO0FBQUEsVUFDRixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUMsZUFBZSxjQUFjO0FBQUEsUUFDekMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsVUFDSCxPQUFPRCxNQUFLLFFBQVFDLG1DQUFXLGNBQWM7QUFBQSxVQUM3QyxNQUFNO0FBQUEsVUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsVUFDckIsVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUEsUUFDdkM7QUFBQSxRQUNBLGVBQWU7QUFBQSxVQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsZUFBZTtBQUFBLFVBQ2hELFFBQVE7QUFBQSxZQUNOLFNBQVM7QUFBQSxjQUNQLE9BQU87QUFBQSxjQUNQLGFBQWE7QUFBQSxjQUNiLGlCQUFpQjtBQUFBLFlBQ25CO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQTsiLAogICJuYW1lcyI6IFsicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
