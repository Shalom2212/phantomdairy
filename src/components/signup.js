import "./css/signup.css"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";



axios.defaults.baseURL = "http://localhost:5000";

function Signup(){

    const [taken,settaken] = useState(false)
    const [retype,setretype] = useState(false)
    const [allf,setallf] = useState(false)
    const [wrong,setwrong] = useState(false)

    const navigate = useNavigate();
    const[userdata,setuserdata] = useState({
        username:"",
        password:"",
        reenter:"",
        email:""
})

    function HandelChange(event){
        const{name,value}= event.target
        setuserdata(prevdata=>{
            return{
                ...prevdata,
                [name]:value
            }
        })
    }



    function Handleclick(event){
        event.preventDefault();
        const pwd = userdata.password
        const uname = userdata.username
        const email = userdata.email
        const rname = userdata.reenter
        if(pwd!==rname)
        {
            setretype(true)
        }else{
                setretype(false)
                axios.post('/users', {
                    username: uname,
                    password: pwd,
                    email:email
                  })
                  .then((response) => {
                    if(response.status===201){
                        navigate('/typepad')
                    }
                  }, (error) => {
                    console.log(error);
                    const statuscode = error.response.status
                    if(statuscode===409){
                        settaken(true)
                    }else if(statuscode===400){
                        setallf(true)
                    }else{
                        setwrong(true)
                    }
                  });
        }
    }

    return(
        <div className="container">
        <h1>Sign up</h1>
        <p>#1.Dont reveal your or others identity</p>
        <p>#2.Have fun and Stay safe</p>
        <form>
            {taken ? <span>username already taken</span> : null}
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={userdata.username}
                onChange={HandelChange}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={HandelChange}
                required
            />
            {retype ? <span>Re-entred password is wrong</span> : null}
            <input
                type="password"
                placeholder="Re-enter Password"
                name="reenter"
                onChange={HandelChange}
                required
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={HandelChange}
                required
            />
            {allf ? <span>please fill all fields </span> : null}
            {wrong ? <span>something went wrong</span> : null}
            <button onClick={Handleclick} className="signupbutton">Sign up</button>
        </form>
    </div>
    )
}

export default Signup