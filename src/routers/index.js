import AboutUs from "../pages/AboutUs";
import BookingForm from "../pages/BookingForm";
import CategoryPage from "../pages/CategoryPage";
import Home from "../pages/Home";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/bookingform", component: BookingForm, layout: null },
  { path: "/category", component: CategoryPage },
  { path: "/aboutus", component: AboutUs },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
