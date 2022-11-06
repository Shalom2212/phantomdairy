import "./css/signup.css"


function signup(){
    return(
        <div>
        <h1>Signup</h1>
        <from>
            <input
                type="text"
                placeholder="Username"
            />
            <input
                type="password"
                placeholder="Password"
            />
            <input
                type="password"
                placeholder="reenter password"
            />

            <input
                type="email"
                placeholder="enter email"
            />
            <button>Signup</button>
        </from>
    </div>
    )
}

export default signup