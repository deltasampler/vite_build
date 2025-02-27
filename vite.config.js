import {defineConfig} from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, "./modules/engine/source"),
            '@examples': path.resolve(__dirname, "./modules/examples/source"),
            '@cl': path.resolve(__dirname, "./modules/cl/source"),
            '@gui': path.resolve(__dirname, "./modules/gui/source"),
            '@panel_templater': path.resolve(__dirname, "./modules/panel_templater/source"),
            '@square': path.resolve(__dirname, "./modules/square/source"),
            '@turmite': path.resolve(__dirname, "./modules/turmite/source")
        }
    }
});
