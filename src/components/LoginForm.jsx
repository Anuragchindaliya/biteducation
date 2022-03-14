import React, { useState } from 'react'
import weburl from '../config'

const LoginForm = ({ setUserLogin, toast }) => {
    const [crendetials, setCrendentials] = useState({ username: "", password: "" })
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", crendetials.username);
        formData.append("password", crendetials.password);

        fetch(`${weburl}/api/login`, { method: "POST", body: formData })
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "success") {
                    localStorage.setItem("token", result.data.token);
                    localStorage.setItem("id", result.data.id);
                    setUserLogin(true)
                    toast.success("Login")

                } else {
                    toast.error("wrong credentials")

                }
            });


    }
    return (
        <div className="container">

            <div className="row justify-content-center mb-2">
                <h2 className="section-title-underline "><span>Admin Login </span></h2>
            </div>
            <div className="row justify-content-center">
                <form className="col-md-5" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control form-control-lg" value={crendetials.username} onChange={(e) => setCrendentials({ ...crendetials, username: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Password</label>
                            <input type="password" className="form-control form-control-lg" value={crendetials.password} onChange={(e) => setCrendentials({ ...crendetials, password: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="submit" defaultValue="Log In" className="btn btn-primary btn-lg px-5" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm