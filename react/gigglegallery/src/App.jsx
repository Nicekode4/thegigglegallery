import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import AppRouter from "./Router/AppRouter"
import GlobalStyle from "./assets/GlobalStyle"
import { Login } from "./Pages/Login/Login"


function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Login />
			<AppRouter />
			<Footer />
		</div>
	)
}

export default App
