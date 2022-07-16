import { Link } from "react-router-dom"

export function Dashboard(){
    return(
        <div>
            <h1>My To-Do</h1>
            <Link to="/login"> Entrar/Login </Link>
        </div>
    )
}