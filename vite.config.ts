
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middlewareMode: false,
    fs: {
      strict: false
    },
    headers: {
      'Content-Type': 'text/javascript; charset=utf-8'
    }
  },
  build: {
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        manualChunks: undefined
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false
  },
  esbuild: {
    target: 'esnext',
    format: 'esm'
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  }
}));
