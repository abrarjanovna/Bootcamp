import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Charts, Clients, Dashboard, Error, Orders } from "./pages";
import {
  Promotion,
  StockList,
  ClientsOrders,
  Banners,
  Review,
  AboutBanners,
  AboutClients,
  ReviewsAbout,
  ReviewsAboutRu,
} from "./some";
import { Other } from "./components";
import "./css/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Other />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/about-clients" element={<AboutClients />} />
        <Route
          path="/clients/about-clients/orders"
          element={<ClientsOrders />}
        />
        <Route path="/stockList" element={<StockList />} />
        <Route path="/stockList/promotion" element={<Promotion />} />
        <Route path="/stockList/banners" element={<Banners />} />
        <Route
          path="/stockList/banners/about-banners"
          element={<AboutBanners />}
        />
        <Route path="/stockList/reviews" element={<Review />} />
        <Route path="/stockList/reviews/reviews-about/uzb" element={<ReviewsAbout />} />
        <Route path="/stockList/reviews/reviews-about/ru" element={<ReviewsAboutRu />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
