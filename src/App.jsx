import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Clients,
  Dashboard,
  Error,
  FixedAbout,
  Km,
  KmAbout,
  Orders,
  Rates,
  Regions,
  RegionsAbout,
  Settings,
} from "./pages";
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
  AboutCompany,
  CompanyBranch,
  AboutBranch,
  Katalog,
  Product,
  Personal,
  Kassir,
  Kuryer,
  KassirAbout,
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
        <Route
          path="/stockList/reviews/reviews-about/uzb"
          element={<ReviewsAbout />}
        />
        <Route
          path="/stockList/reviews/reviews-about/ru"
          element={<ReviewsAboutRu />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/rates/fixed" element={<Rates />} />
        <Route path="/rates/fixed/about" element={<FixedAbout />} />
        <Route path="/rates/km" element={<Km />} />
        <Route path="/rates/km/about" element={<KmAbout />} />
        <Route path="/settings/about-company" element={<AboutCompany />} />
        <Route path="/settings/company-branch" element={<CompanyBranch />} />
        <Route path="/settings/regions" element={<Regions />} />
        <Route path="/settings/regions/about" element={<RegionsAbout />} />
        <Route
          path="/settings/company-branch/catalog/category"
          element={<Katalog />}
        />
        <Route
          path="/settings/company-branch/catalog/product"
          element={<Product />}
        />
        <Route
          path="/settings/company-branch/personal/kuryer"
          element={<Personal />}
        />
        <Route
          path="/settings/company-branch/personal/kuryer/about-kuryer"
          element={<Kuryer />}
        />
        <Route
          path="/settings/company-branch/personal/kassir"
          element={<Kassir />}
        />
        <Route
          path="/settings/company-branch/personal/kassir/about-kassir"
          element={<KassirAbout />}
        />
        <Route
          path="/settings/company-branch/about-branch"
          element={<AboutBranch />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
