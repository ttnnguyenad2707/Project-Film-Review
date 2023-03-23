import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import data from "../Json/Account.json";
export default function Register() {
    
    useEffect(() => {
        localStorage.setItem("dataUser",JSON.stringify(data))       
        
    },[])
    const getData = JSON.parse(localStorage.getItem('dataUser'));
    console.log(getData);
    const [account, setAccount] = useState(getData);
    // console.log(account);
    let navigate = useNavigate ();
    const checkAccountexit = (e) => {
        e.preventDefault()
        const FullName = document.getElementById('InputName').value;
        const Address = document.getElementById('Address').value;
        const Email = document.getElementById('InputEmail1').value;
        const Password = document.getElementById('InputPassword').value;
        const radios = document.getElementsByName('option');
        const ID = account.length+1;
        let value;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                value = radios[i].value;
                break;
            }
        }
        

        const checkexit = account.filter((a) => a.Email == Email);
        if (checkexit.length > 0) {
            alert('Email already exit!!!');
        }
        else {
            const newaccount = { ID,FullName, Email, Password, Gender: value,Address };
            account.push(newaccount);
            setAccount(account);
            localStorage.setItem('dataUser', JSON.stringify(account));
            alert('Sign Up Success');
            navigate('/Login');
        }
    }
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center ">
                <div className="loginform col-md-12 ">
                    <form onSubmit={checkAccountexit}>
                        <h3 className="">Register</h3>
                        <div className="form-group">
                            <label for="InputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="InputName">Name</label>
                            <input type="text" className="form-control" id="InputName" placeholder="Enter name"/>
                        </div>
                        <div className="form-group">
                            <label for="InputName">Address</label>
                            <input type="text" className="form-control" id="Address" placeholder="Address"/>
                        </div>
                        <div className="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" className="form-control" id="InputPassword" placeholder="Enter password" pattern="[a-zA-Z0-9_@]{8,15}" required />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="option" id="inlineRadio1" value="male" required />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="option" id="inlineRadio2" value="female" required />
                            <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </div>



    )
}