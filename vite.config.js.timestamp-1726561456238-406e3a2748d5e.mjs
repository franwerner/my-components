var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../alias.config.js
var alias_config_exports = {};
__export(alias_config_exports, {
  default: () => alias_config_default
});
import path from "path";
var __vite_injected_original_dirname, alias_config_default;
var init_alias_config = __esm({
  "../../alias.config.js"() {
    "use strict";
    __vite_injected_original_dirname = "C:\\Users\\ifran\\OneDrive\\Escritorio\\Proyectos\\personal-monorepo";
    alias_config_default = {
      "@responsive-component": path.resolve(__vite_injected_original_dirname, "packages/responsive-component/src"),
      "responsive-component": path.resolve(__vite_injected_original_dirname, "packages/responsive-component/lib/index.ts"),
      "breakpoints": path.resolve(__vite_injected_original_dirname, "packages/responsive-component/src/constant/index.ts"),
      "@my-components": path.resolve(__vite_injected_original_dirname, "packages/my-components/src"),
      "@my-utilities": path.resolve(__vite_injected_original_dirname, "packages/my-utilities/src"),
      "my-utilities": path.resolve(__vite_injected_original_dirname, "packages/my-utilities/lib/index.ts"),
      "react-observer-context": path.resolve(__vite_injected_original_dirname, "packages/react-observer-context/lib/index.ts"),
      "@react-observer-context": path.resolve(__vite_injected_original_dirname, "packages/react-observer-context/src")
    };
  }
});

// vite.config.js
import { defineConfig } from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path2 from "path";
import dts from "file:///C:/Users/ifran/OneDrive/Escritorio/Proyectos/personal-monorepo/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname2 = "C:\\Users\\ifran\\OneDrive\\Escritorio\\Proyectos\\personal-monorepo\\packages\\my-components";
var loadAliasConfig = async () => {
  let load = {};
  try {
    const module = await Promise.resolve().then(() => (init_alias_config(), alias_config_exports));
    load = module.default;
  } catch (error) {
  }
  return load;
};
var vite_config_default = defineConfig(
  async ({ command }) => {
    const alias = await loadAliasConfig();
    const isBuild = command == "build" ? {
      "@my-components": path2.resolve(__vite_injected_original_dirname2, "src")
    } : alias;
    return {
      plugins: [
        react(),
        dts({
          tsconfigPath: "./ts/tsconfig.build.json",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYWxpYXMuY29uZmlnLmpzIiwgInZpdGUuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaWZyYW5cXFxcT25lRHJpdmVcXFxcRXNjcml0b3Jpb1xcXFxQcm95ZWN0b3NcXFxccGVyc29uYWwtbW9ub3JlcG9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGlmcmFuXFxcXE9uZURyaXZlXFxcXEVzY3JpdG9yaW9cXFxcUHJveWVjdG9zXFxcXHBlcnNvbmFsLW1vbm9yZXBvXFxcXGFsaWFzLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaWZyYW4vT25lRHJpdmUvRXNjcml0b3Jpby9Qcm95ZWN0b3MvcGVyc29uYWwtbW9ub3JlcG8vYWxpYXMuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJAcmVzcG9uc2l2ZS1jb21wb25lbnRcIiA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCJwYWNrYWdlcy9yZXNwb25zaXZlLWNvbXBvbmVudC9zcmNcIiksXHJcbiAgICBcInJlc3BvbnNpdmUtY29tcG9uZW50XCIgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwicGFja2FnZXMvcmVzcG9uc2l2ZS1jb21wb25lbnQvbGliL2luZGV4LnRzXCIpLFxyXG4gICAgXCJicmVha3BvaW50c1wiIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInBhY2thZ2VzL3Jlc3BvbnNpdmUtY29tcG9uZW50L3NyYy9jb25zdGFudC9pbmRleC50c1wiKSxcclxuICAgIFwiQG15LWNvbXBvbmVudHNcIiA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCJwYWNrYWdlcy9teS1jb21wb25lbnRzL3NyY1wiKSxcclxuICAgIFwiQG15LXV0aWxpdGllc1wiIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInBhY2thZ2VzL215LXV0aWxpdGllcy9zcmNcIiksXHJcbiAgICBcIm15LXV0aWxpdGllc1wiIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInBhY2thZ2VzL215LXV0aWxpdGllcy9saWIvaW5kZXgudHNcIiksXHJcbiAgICBcInJlYWN0LW9ic2VydmVyLWNvbnRleHRcIiA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCJwYWNrYWdlcy9yZWFjdC1vYnNlcnZlci1jb250ZXh0L2xpYi9pbmRleC50c1wiKSxcclxuICAgIFwiQHJlYWN0LW9ic2VydmVyLWNvbnRleHRcIiA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCJwYWNrYWdlcy9yZWFjdC1vYnNlcnZlci1jb250ZXh0L3NyY1wiKSxcclxufVxyXG5cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpZnJhblxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXFByb3llY3Rvc1xcXFxwZXJzb25hbC1tb25vcmVwb1xcXFxwYWNrYWdlc1xcXFxteS1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpZnJhblxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXFByb3llY3Rvc1xcXFxwZXJzb25hbC1tb25vcmVwb1xcXFxwYWNrYWdlc1xcXFxteS1jb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9pZnJhbi9PbmVEcml2ZS9Fc2NyaXRvcmlvL1Byb3llY3Rvcy9wZXJzb25hbC1tb25vcmVwby9wYWNrYWdlcy9teS1jb21wb25lbnRzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgbG9hZEFsaWFzQ29uZmlnID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgbG9hZCA9IHt9XG4gIHRyeSB7XG4gICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KFwiLi4vLi4vYWxpYXMuY29uZmlnLmpzXCIpXG4gICAgbG9hZCA9IG1vZHVsZS5kZWZhdWx0XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgfVxuICByZXR1cm4gbG9hZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhhc3luYyh7IGNvbW1hbmQgfSkgPT4ge1xuXG4gIGNvbnN0IGFsaWFzID0gYXdhaXQgbG9hZEFsaWFzQ29uZmlnKClcblxuXG4gIGNvbnN0IGlzQnVpbGQgPSBjb21tYW5kID09IFwiYnVpbGRcIiA/XG4gICAge1xuICAgICAgXCJAbXktY29tcG9uZW50c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKVxuICAgIH1cbiAgICA6IGFsaWFzXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIGR0cyh7XG4gICAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcbiAgICAgICAgZXhjbHVkZTogW1wic3JjL0FwcC50c3hcIiwgXCJzcmMvbWFpbi50c3hcIl1cbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IGlzQnVpbGQsXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9pbmRleC50cycpLFxuICAgICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCBcImZyYW1lci1tb3Rpb25cIl0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgICAgICAnZnJhbWVyLW1vdGlvbic6ICdGcmFtZXJNb3Rpb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn1cbikiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRYLE9BQU8sVUFBVTtBQUE3WSxJQUFNLGtDQUVDO0FBRlA7QUFBQTtBQUFBO0FBQUEsSUFBTSxtQ0FBbUM7QUFFekMsSUFBTyx1QkFBUTtBQUFBLE1BQ1gseUJBQTBCLEtBQUssUUFBUSxrQ0FBVSxtQ0FBbUM7QUFBQSxNQUNwRix3QkFBeUIsS0FBSyxRQUFRLGtDQUFVLDRDQUE0QztBQUFBLE1BQzVGLGVBQWdCLEtBQUssUUFBUSxrQ0FBVSxxREFBcUQ7QUFBQSxNQUM1RixrQkFBbUIsS0FBSyxRQUFRLGtDQUFVLDRCQUE0QjtBQUFBLE1BQ3RFLGlCQUFrQixLQUFLLFFBQVEsa0NBQVUsMkJBQTJCO0FBQUEsTUFDcEUsZ0JBQWlCLEtBQUssUUFBUSxrQ0FBVSxvQ0FBb0M7QUFBQSxNQUM1RSwwQkFBMkIsS0FBSyxRQUFRLGtDQUFVLDhDQUE4QztBQUFBLE1BQ2hHLDJCQUE0QixLQUFLLFFBQVEsa0NBQVUscUNBQXFDO0FBQUEsSUFDNUY7QUFBQTtBQUFBOzs7QUNYbWMsU0FBUyxvQkFBb0I7QUFDaGUsT0FBTyxXQUFXO0FBQ2xCLE9BQU9BLFdBQVU7QUFDakIsT0FBTyxTQUFTO0FBSGhCLElBQU1DLG9DQUFtQztBQUt6QyxJQUFNLGtCQUFrQixZQUFZO0FBQ2xDLE1BQUksT0FBTyxDQUFDO0FBQ1osTUFBSTtBQUNGLFVBQU0sU0FBUyxNQUFNO0FBQ3JCLFdBQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVMsT0FBTztBQUFBLEVBRWhCO0FBQ0EsU0FBTztBQUNUO0FBR0EsSUFBTyxzQkFBUTtBQUFBLEVBQWEsT0FBTSxFQUFFLFFBQVEsTUFBTTtBQUVoRCxVQUFNLFFBQVEsTUFBTSxnQkFBZ0I7QUFHcEMsVUFBTSxVQUFVLFdBQVcsVUFDekI7QUFBQSxNQUNFLGtCQUFrQkMsTUFBSyxRQUFRQyxtQ0FBVyxLQUFLO0FBQUEsSUFDakQsSUFDRTtBQUNKLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLElBQUk7QUFBQSxVQUNGLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQyxlQUFlLGNBQWM7QUFBQSxRQUN6QyxDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxVQUNILE9BQU9ELE1BQUssUUFBUUMsbUNBQVcsY0FBYztBQUFBLFVBQzdDLE1BQU07QUFBQSxVQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxVQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxRQUN2QztBQUFBLFFBQ0EsZUFBZTtBQUFBLFVBQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxlQUFlO0FBQUEsVUFDaEQsUUFBUTtBQUFBLFlBQ04sU0FBUztBQUFBLGNBQ1AsT0FBTztBQUFBLGNBQ1AsYUFBYTtBQUFBLGNBQ2IsaUJBQWlCO0FBQUEsWUFDbkI7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
