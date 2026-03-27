"use client";

import { ThemeProvider } from "./ThemeContext";
import ReactQueryClientProvider from "../ReactQueryClientProvider";
import StoreProvider from "../StoreProvider";
import AuthProvider from "../AuthProvider";
import { HoverProvider } from "../browser/SecondaryContainer/context/HoverContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <StoreProvider>
        <AuthProvider>
          <HoverProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </HoverProvider>
        </AuthProvider>
      </StoreProvider>
    </ReactQueryClientProvider>
  );
}
