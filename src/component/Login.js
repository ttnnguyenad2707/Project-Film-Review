import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import data from "../Json/Account.json";
import '../Login.css';
export default function Login() {
    const [account,setAccount] = useState(data);
    let navigate = useNavigate ();
    const checkAccount = () => {
        const email = document.getElementById('InputEmail1').value;
        const password = document.getElementById('InputPassword').value;
        const checkAccount = account.filter((a)=> a.Email == email && a.Password == password);
        if(checkAccount.length>0){
            sessionStorage.setItem('Account', JSON.stringify(checkAccount) );
            navigate('/');
        }
        else {
            alert("wrong !")
        }


    }
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center ">
                <div className="loginform col-md-12 ">
                <form>
                <h3 className="">Login</h3>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Enter password"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={checkAccount}>Submit</button>
            </form>
                </div>

            </div>
        </div>
    )
}