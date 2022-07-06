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
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);
  // !! token
  const [token, setToken] = useState(null);

  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBkZXYuY29tIiwiaWF0IjoxNjU3MDI2MDU5LCJleHAiOjE2NTcwMjk2NTksInN1YiI6IjEifQ.twWmzimNSRUQT3Djm2J-g4vRpDmYOjDbJ8uriPy3nb0";

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const openLogin = () => {
    setOpenLoginModal(!openLoginModal);
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
    getReportInfo();
  }, []);

  console.log(token);

  return (
    <AppProvider value={candidates}>
      <CompanyProvider value={companies}>
        <ReportProvider value={reports}>
          <TokenProvider value={setToken}>
            <div className="app">
              {token && (
                <Switch>
                  <Route path="/admin">
                    <MainAdminPage />
                  </Route>
                  <Route path="/create-report">
                    <WizardPage />
                  </Route>
                </Switch>
              )}
              {!token && (
                <Switch>
                  <Route exact path="/">
                    <HomePage
                      openLogin={openLogin}
                      openLoginModal={openLoginModal}
                    />
                  </Route>
                  <Route path="/candidate/:id">
                    <SinglePage
                      openLogin={openLogin}
                      openLoginModal={openLoginModal}
                    />
                  </Route>
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
