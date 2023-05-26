import Detail from "../views/page/detail";
import Like from "../views/page/like";
import Resto from "../views/page/mainPage";

const routes = {
  "/detail/:id": Detail,
  "/home": Resto,
  "/": Resto,
  "/favourite": Like,
};

export default routes;
