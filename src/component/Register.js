import { useState } from "react";
import data from "../Json/Account.json";
export default function Register() {
    const [account, setAccount] = useState(data);
    const checkAccountexit = () => {
        const name = document.getElementById('InputName').value;
        const email = document.getElementById('InputEmail1').value;
        const password = document.getElementById('InputPassword').value;
        const radios = document.getElementsByName('option');
        let value;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                value = radios[i].value;
                break;
            }
        }

        const checkexit = account.filter((a) => a.email == email);
        if (checkexit > 0) {
            alert('Email already exit!!!');
        }
        else {
            const newaccount = { name, email, password, gender: value };
            account.push(newaccount);
            setAccount(account);
            localStorage.setItem('Datauser', JSON.stringify(account));
        }
    }
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center ">
                <div className="loginform col-md-12 ">
                    <form>
                        <h3 className="">Register</h3>
                        <div className="form-group">
                            <label for="InputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="InputName">Username</label>
                            <input type="text" className="form-control" id="InputName" placeholder="Enter name"/>
                        </div>
                        <div className="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" className="form-control" id="InputPassword" placeholder="Enter password" pattern="[a-zA-Z0-9_]{8,15}" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="option" id="inlineRadio1" value="male" />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="option" id="inlineRadio2" value="female" />
                            <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={checkAccountexit}>Submit</button>
                    </form>
                </div>

            </div>
        </div>



    )
}