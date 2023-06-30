import { LoginStyled } from "./Login.styled.js"

export const Login = () => {
	return (
        <LoginStyled>
			<div className="loginsection" id="logmein">
            <form class="form-container">
                <div className="register" id="reguser">
                        <div class="name">
                            <p>Fornavn:</p>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div class="surname">
                            <p>Efternavn:</p>
                            <input type="text" name="surname" id="surname"/>
                        </div>
                </div>
                        <div class="username">
                            <p>Brugernavn(Email):</p>
                            <input type="text" name="username" id="user"/>
                        </div>
                        <div class="password">
                            <p>Adganskode:</p>
                            <input type="password" name="password" id="password"/>
                        </div>
                <div className="register" id="repeatpasswordContainer">
                    <div className="secpassword">
                        <p>Gentag Adganskode</p>
                        <input type="password" name="repeatpassword" id="password"/>
                </div>
                        </div>
                        <div className="loginbtn">
                            <button>Login</button>
                        </div>
                        <div className="createuser">
                        <p className="newuser" onClick={showreg}>Ny her? Opret bruger</p>
                        </div>
                        
            </form>				
			</div>
        </LoginStyled>	
	)
}

function showreg(){
    document.getElementById('reguser').classList.toggle('activereg');
    document.getElementById('repeatpasswordContainer').classList.toggle('activereg');
}