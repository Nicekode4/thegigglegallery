import { HeaderStyled } from "./header.styled.js"
import Login from "../../assets/images/login.png"

export const Header = () => {
	return (
		<HeaderStyled>
			<div className="top">
				<h1><span className="s1">The</span> Gi<span className="s2">gg</span>le Ga<span className="s3">ll</span>ery</h1>
				<div className="logimg">
					<img src={Login} alt="LoginIcon" id="loginacc" onClick={show}/>	
				</div>
			</div>
		</HeaderStyled>

	)
}

function show() {
	document.getElementById('logmein').classList.toggle('active');
}
