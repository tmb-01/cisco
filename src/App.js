import { Switch, Route, Router } from "react-router-dom";
import { LanguageProvider } from "./containers/languages";

import history from "./history";

import loginPage from "../src/pages/login/loginPage";
import homePage from "./pages/homePage/homePage";
import AdminPanelPage from "./pages/admin_panel/adminPanelPage";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";
import "./App.css";

const App = () => {
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
