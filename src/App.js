
import ArticleListPage from "./pages/ArticleListPage";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import ThemeProviderWrapper from "./context/Theme.context";

function App() {
  return (
    <ThemeProviderWrapper>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticleListPage />} />



        </Routes>
      </div>
    </ThemeProviderWrapper>
  );
}

export default App;
