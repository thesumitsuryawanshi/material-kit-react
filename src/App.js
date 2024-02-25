import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Crowdfunding from "../src/pages/Presentation/sections/crowdfunding";
import Stripesuccess from "../src/pages/Presentation/sections/stripesuccess";
import Stripefailure from "../src/pages/Presentation/sections/stripefailure";
import routes from "routes";
import Stripe from "stripe";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="/crowdfunding" element={<Crowdfunding />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/success" element={<Stripesuccess />} />
        <Route path="/cancel" element={<Stripefailure />} />
      </Routes>
    </ThemeProvider>
  );
}
