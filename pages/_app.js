import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const isSSREnabled = () => typeof window === "undefined";

  if (isSSREnabled) return <Component {...pageProps} />;
}

export default MyApp;
