import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Home } from "./pages/home";

const links = [{ path: "/", element: <Home /> }];

const Router = () => {
  return (
    <Routes>
      {links.map((item) => {
        return (
          <Route key={item.path} path={item.path} element={item.element} />
        );
      })}
    </Routes>
  );
};

export const App = () => (
  <ChakraProvider>
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </ChakraProvider>
);
