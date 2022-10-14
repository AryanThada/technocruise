import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {
        routes.map((routeItem) => {
          return (
            <div>
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
            <div>
            <Route path="/cities" component={lazy(() => import('../components/cities/Carouselnew/Carousel'))} />
            <Route path="/Contact" component={lazy(() => import('../components/Contact/ContactUs'))} />
            <Route path="/Forms" component={lazy(() => import('../components/Forms/technocruise-form/App'))} />
            <Route path="/Sponsors" component={lazy(() => import('../components/Sponsors/Sponsors'))} />
            </div></div>
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
