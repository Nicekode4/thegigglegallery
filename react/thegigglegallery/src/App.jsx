
import GlobalStyle from './root/Global.style.js';
import AppRouter from './AppRouter/AppRouter.jsx';
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
