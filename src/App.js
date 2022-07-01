import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SinglePage from './pages/SinglePage/SinglePage';
import MainAdminPage from "./pages/MainAdminPage/MainAdminPage";
import WizardPage from "./pages/WizardPage/WizardPage";



function App() {
  return (
    <div className="app">
      <HomePage/>
      <SinglePage/>
      <MainAdminPage/>
      <WizardPage/>
    </div>
  );
}

export default App;
