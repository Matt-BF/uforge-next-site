import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundDNA from "../components/BackgroundDNA";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
    AOS.refresh();
  }, []);
  if (typeof window !== "undefined") {
    if (window.location.hostname !== "localhost") {
      useEffect(() => {
        const handleRouteChange = (url) => {
          gtag.pageview(url);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
          router.events.off("routeChangeComplete", handleRouteChange);
        };
      }, [router.events]);
    }
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <BackgroundDNA />
      <Footer />
    </div>
  );
}

export default MyApp;
