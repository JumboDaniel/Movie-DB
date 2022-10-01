import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeContextWrapper from "../context/ThemeContextWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  );
}

export default MyApp;
