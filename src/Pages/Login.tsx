import { useNavigate } from "react-router-dom"

export function Login(){
    const navigate = useNavigate();
    
    function handleClick(){
        navigate("/");
    }

    function handleLogin(){
        navigate("*")
    }

    return(
        <div>
            <h1>Login</h1>

            <form>
                <label>E-mail
                    <input id="email" type="email" />
                </label>

                <label>Senha
                    <input id="password" type="password" />
                </label>
                
                <button type="button" onClick={handleLogin}>Efetuar Login</button>
            </form>

        </div>
    )
}