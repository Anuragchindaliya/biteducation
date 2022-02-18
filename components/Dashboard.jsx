import React, { useState } from 'react'

const Dashboard = ({ toast }) => {

    const [state, setState] = useState({ sr_no: "", name: "", father_name: "", adm_no: "", cert_file: [] })
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("sr_no", state.sr_no);
        formData.append("name", state.name);
        formData.append("father_name", state.father_name);
        formData.append("adm_no", state.adm_no);
        formData.append("cert_path", state.cert_file);
        formData.append("token", localStorage.getItem("token"));
        fetch("http://localhost/bitapi/api/upload-certificate", { method: "POST", body: formData })
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "success") {
                    setState({ sr_no: "", name: "", father_name: "", adm_no: "", cert_file: [] })
                    console.log("Date uploaded");
                    toast("certificate uploaded")
                } else {
                    toast("Error in uploading")
                    console.log("error in uploading")
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="col-md-5" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="username">Serial No.</label>
                            <input type="number" className="form-control form-control-lg" min="1" value={state.sr_no} onChange={(e) => setState({ ...state, sr_no: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Name</label>
                            <input type="text" className="form-control form-control-lg" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Father Name</label>
                            <input type="text" className="form-control form-control-lg" value={state.father_name} onChange={(e) => setState({ ...state, father_name: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Addmission No.</label>
                            <input type="number" className="form-control form-control-lg" min="1" value={state.adm_no} onChange={(e) => setState({ ...state, adm_no: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Certificate</label>
                            <input type="file" className="form-control form-control-lg" onChange={(e) => setState({ ...state, cert_file: e.target.files[0] })} />
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

export default Dashboard