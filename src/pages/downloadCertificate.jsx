
import React, { useState } from 'react'
import weburl from '../config';
import Breadcrumb from '../components/common/Breadcrumb';
import Jumbotron from '../components/common/Jumbotron';

const DownloadCertificate = () => {
    const [state, setState] = useState({ sr_no: "", adm_no: "" });

    const [link, setLink] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const { sr_no, adm_no } = state;
        fetch(`${weburl}/api/certificate?sr_no=${sr_no}&adm_no=${adm_no}`)
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "success") {
                    if (result.data.length === 0) {
                        setLink("0")
                    } else {
                        setLink(result.data.cert_path)
                    }

                } else {


                }
            });
    }
    return (
        <div className=''>
            <Jumbotron title='Certificate' />
            <Breadcrumb currentPage='Download Certificate' />
            {(link === "" || link === "0") && <div className="site-section">
                <div className="row justify-content-center mb-2">
                    <h2 className="section-title-underline "><span>Download Certificate </span></h2>
                </div>
                <form className="container" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="fname">Serial no.</label>
                            <input type="number" id="fname" className="form-control form-control-lg" min="1" value={state.sr_no} onChange={(e) => setState({ ...state, sr_no: e.target.value })} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="lname">Addmision no.</label>
                            <input type="number" id="lname" className="form-control form-control-lg" min="1" value={state.adm_no} onChange={(e) => setState({ ...state, adm_no: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Search" className="btn btn-primary btn-lg px-5" />
                        </div>
                    </div>
                </form>
            </div>
            }
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {link !== "" && (link === "0" ? <h2>Not Found</h2> : <a target="_blank" download="BitEducation-certificate" href={"http://localhost/bitapi/uploads/certificates/" + link} rel="noreferrer"><img src="./assets/images/download-pdf.svg" className='m-auto' alt='download' width={"100px"} height="100px" /> <h3>Download</h3></a>)
                        }
                    </div >
                </div >
            </div >

        </div >
    )
}

export default DownloadCertificate