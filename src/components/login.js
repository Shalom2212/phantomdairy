import "./css/login.css"
import {Link} from 'react-router-dom'

function login(){
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
            <Link to='/signup'>Don't have an account yet? Sign up here</Link>
        </div>
    )
}

export default login