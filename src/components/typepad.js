import "./css/typepad.css"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom";
import {useState} from "react"


axios.defaults.baseURL = "http://localhost:5000";

function Typepad(){

    const [notuser,setnotuser] = useState(false)
    const [wrongpass,setwrongpass] = useState(false)
    const [wrong,setwrong] = useState(false)

    const navigate = useNavigate();
    const[typedata,settypedata] = useState({
        username:"",
        password:"",
        content:""
})


function HandelChange(event){
    const{name,value}= event.target
    settypedata(prevdata=>{
        return{
            ...prevdata,
            [name]:value
        }
    })
}

function Handelcancle(){
    navigate('/')
}

function HandelClick(event){
    event.preventDefault();
    const uname = typedata.username
    const pwd = typedata.password
    const cont = typedata.content

    axios.post('/auth',{
        username:uname,
        password:pwd,
        content:cont
    })
    .then((response) => {
        console.log(response.status);
        if(response.status===201){
            navigate('/')
        }
      }, (error) => {
        console.log(error);
        const statuscode = error.response.status
        if(statuscode===404){
            setnotuser(true)
        }else if(statuscode===401){
            setwrongpass(true)
        }else{
            setwrong(true)
        }
    });

}


    return(
        <div>
            <h1>Your Story</h1>
             <div className="container">
        <form>
        {notuser ? <span>username not found create new account</span>:null}
            <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={HandelChange}
                value={typedata.username}
                required
            />
        
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={HandelChange}
                value={typedata.password}
                required
            />
            {wrongpass ? <span>wrong password</span>:null}

             <label htmlFor="Your story"><h3><b>Let us hear your story</b></h3></label>
            <textarea 
                id="Your story" 
                name="content" 
                rows="5" 
                placeholder="Type in your story" 
                cols="33"
                onChange={HandelChange}
                value={typedata.content}
            >
            Type your story.......
            </textarea>
            <button onClick={HandelClick} className='createbutton' >Submit</button>
        {wrong ? <span>somthing went wrong</span> : null}
        </form>
    </div>
    <button onClick={Handelcancle} className='canclebutton' >Cancle</button>
    <br/>
    <p>
        <Link className="link" to={'/signup'}>create account ?</Link>
    </p>
        </div>
    )
}

export default Typepad