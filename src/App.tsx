import React from 'react';
import MainRoutes from './routes/routes';
import Header from "./layout/Header/Header";
import { useLocation } from 'react-router-dom';


function App() {

  const { pathname } = useLocation();
  const shouldShow = pathname.split("/")[1] !== "admin";

  return (
    <>
      {shouldShow && <Header />}
      <MainRoutes />
    </>
  );
}

export default App;