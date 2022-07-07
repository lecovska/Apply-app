import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import MainAdminPage from "./pages/MainAdminPage/MainAdminPage";
import WizardPage from "./pages/WizardPage/WizardPage";
import { useEffect, useState } from "react";
import {
  AppProvider,
  CompanyProvider,
  ReportProvider,
  TokenProvider,
} from "./contexts";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("hasToken"));

  const history = useHistory();

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const openLogin = () => {
    setOpenLoginModal(true);
  };

  const closeLogin = () => {
    setOpenLoginModal(false);
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("hasToken");
  };

  const getCandidatesInfo = () => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  };

  const getCompanyInfo = () => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  };

  const getReportInfo = () => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  };

  useEffect(() => {
    getCandidatesInfo();
    getCompanyInfo();
  }, []);

  useEffect(() => {
    getReportInfo();
  }, [refresh]);

  useEffect(() => {
    if (token) {
      history.push("/admin");
    }
    closeLogin();
  }, [token, history]);

  return (
    <AppProvider value={candidates}>
      <CompanyProvider value={companies}>
        <ReportProvider value={reports}>
          <TokenProvider value={{ setToken, token, logout, setRefresh, refresh }}>
            <div className="app">
              {token && (
                <Switch>
                  <Route exact path="/">
                    <HomePage
                      openLogin={openLogin}
                      openLoginModal={openLoginModal}
                    />
                  </Route>
                  <Route path="/admin">
                    <MainAdminPage />
                  </Route>
                  <Route path="/create-report">
                    <WizardPage />
                  </Route>
                  <Route path="/candidate/:id">
                    <SinglePage
                      openLogin={openLogin}
                      openLoginModal={openLoginModal}
                    />
                  </Route>
                  <Redirect to="/admin" />
                </Switch>
              )}
              {!token && (
                <Switch>
                  <Route exact path="/">
                    <HomePage
                      openLogin={openLogin}
                      openLoginModal={openLoginModal}
                      closeLogin={closeLogin}
                    />
                  </Route>
                  <Route path="/candidate/:id">
                    <SinglePage
                      openLogin={openLogin}
                      openLoginModal={openLoginModal}
                      closeLogin={closeLogin}
                    />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              )}
            </div>
          </TokenProvider>
        </ReportProvider>
      </CompanyProvider>
    </AppProvider>
  );
}

export default App;
