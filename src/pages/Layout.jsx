import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

import { Outlet, ScrollRestoration } from "react-router";

export default function Layout() {
  return (
    <main>
      <Navbar />

      <ScrollRestoration />

      <Outlet />

      <Footer />
    </main>
  );
}