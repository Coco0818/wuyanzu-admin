/**
 * 路由配置
 *
 */
import { lazy } from "react";

const Login = lazy(() => import("@pages/Login"));
const Home = lazy(() => import("@pages/Home"));
const Positions = lazy(() => import("@pages/Positions"));

const routes = [
  { path: "/login", component: Login, exact: true },
  { path: "/", component: Home },
  { path: "/positions", component: Positions },
];

export default routes;
