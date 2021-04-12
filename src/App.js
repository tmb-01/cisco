import React, { useEffect } from "react";

import { Switch, Route, Router } from "react-router-dom";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { LanguageProvider } from "./containers/languages";

import history from "./history";
import { currentAdmin } from "./actions";
import loginPage from "../src/pages/login/loginPage";
import homePage from "./pages/homePage/homePage";
import AdminPanelPage from "./pages/admin_panel/adminPanelPage";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = (props) => {
  useEffect(() => {
    store.dispatch(currentAdmin());
  }, []);
  return (
    <LanguageProvider>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/admin" component={loginPage} />
            <AdminPanelPage />
          </Switch>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
