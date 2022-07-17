import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Login(){
    const navigate = useNavigate();

    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    
    function handleClick(){
        navigate("/");
    }

    function handleLogin(){
        console.log(email, password);
        //navigate("");
    }

    return(
        <div>
            <h1>Login</h1>

            <form>
                <label>E-mail
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>Senha
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                
                <button type="button" onClick={handleLogin}>Efetuar Login</button>
            </form>

        </div>
    )
}