import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "./global.css";
import { Content } from "./shared/components/Content/Content";
import { NotFound } from "./shared/pages/NotFound/NotFound";
import { Order } from "./shared/pages/Order/Order";
import { rootReducer } from "./store/store";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppContent() {
  return (
    <Content>      
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Content>
  );
}

export const ClientApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export const ServerApp = (url: string) => {
  return (
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </Provider>
  );
};
