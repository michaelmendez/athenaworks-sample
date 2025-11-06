import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import App from "./App.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import "./index.css";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#6b5dd3",
    colorTextBase: "#000000",
    colorBgBase: "#ffffff",
    fontSize: 19,
    fontFamily:
      "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    borderRadius: 8,
  },
  components: {
    Button: {
      colorPrimary: "#6b5dd3",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
