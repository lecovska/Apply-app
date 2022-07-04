import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import MainAdminPage from "./pages/MainAdminPage/MainAdminPage";
import WizardPage from "./pages/WizardPage/WizardPage";
import { useEffect, useState } from "react";
import { AppProvider, CompanyProvider, ReportProvider } from "./contexts";
import { Switch, Link, Route, Redirect } from "react-router-dom";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);

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

  return (
    <AppProvider value={candidates}>
      <CompanyProvider value={companies}>
        <ReportProvider value={reports}>
          <div className="app">
            <Switch>
              <Route exact path="/">
                <HomePage
                  openLogin={openLogin}
                  openLoginModal={openLoginModal}
                />
              </Route>
              
              <Route path="/candidate/:id">
                <SinglePage />
              </Route>


              <Route path="">
                <MainAdminPage />
              </Route>
              <WizardPage />
            </Switch>
          </div>
        </ReportProvider>
      </CompanyProvider>
    </AppProvider>
  );
}

export default App;
