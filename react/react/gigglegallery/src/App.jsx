import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import AppRouter from "./Router/AppRouter"
import GlobalStyle from "./assets/GlobalStyle"


function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<AppRouter />
			<Footer />
		</div>
	)
}

export default App
