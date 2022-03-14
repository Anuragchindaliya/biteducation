
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../components/Dashboard'
import LoginForm from '../components/LoginForm'
import weburl from '../config';

const Login = () => {
    const isValidToken = () => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token")
            fetch(`${weburl}/api/validate-token?token=${token}`)
                .then((res) => res.json())
                .then((result) => {
                    if (result.status === "success") {
                        setUserLogin(true);
                    } else {
                        setUserLogin(false);
                    }
                });
        }
    }
    const [isUserLogin, setUserLogin] = useState(false)
    useEffect(() => {
        isValidToken()
    }, [])

    const logout = () => {
        const formData = new FormData();
        formData.append("token", localStorage.getItem("token"));
        formData.append("id", localStorage.getItem("id"));
        fetch(`${weburl}/api/logout`, { method: "POST", body: formData })
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "success") {
                    localStorage.setItem("token", "");
                    setUserLogin(false);
                    toast.success("Logout")
                } else {
                    toast.error("Can't logout")
                }
            });
    }
    return (
        <div className='site-section'>
            <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
                <div className="container">
                    <div className="row align-items-end justify-content-center text-center">
                        <ToastContainer />
                        {isUserLogin ?
                            <div className="col-lg-7">
                                <h2 className="mb-0">Dashboard</h2>


                                <p>Upload certificate of students</p>
                            </div>
                            : <div className="col-lg-7">
                                <h2 className="mb-0">Login</h2>
                                <p>Admin login</p>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="custom-breadcrumns border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Link to="/">Home</Link>
                            <span className="mx-3 icon-keyboard_arrow_right" />
                            <span className="current">{isUserLogin ? "Dashboard" : "Login"}</span>
                        </div>
                        {isUserLogin && <div className="col-md-4 btn btn-danger" onClick={logout}>logout</div>}
                    </div>
                </div>

            </div>
            <div className="site-section">

                {isUserLogin ? <Dashboard toast={toast} /> : <LoginForm toast={toast} setUserLogin={setUserLogin} />}

            </div>

        </div>
    )
}

export default Login