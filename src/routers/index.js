import CategoryItem from "../components/component/CategoryComponents/CategoryItem";
import Item from "../components/component/CategoryComponents/Item";
import AboutUs from "../pages/AboutUs";
import BookingForm from "../pages/BookingForm";
import CategoryPage from "../pages/CategoryPage";
import Home from "../pages/Home";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/bookingform", component: BookingForm, layout: null },
  { path: "/category", component: CategoryPage },
  { path: "/aboutus", component: AboutUs },
  { path: "/category/baiviet", component: CategoryItem },
  { path: "/category/baiviet/1", component: Item },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
