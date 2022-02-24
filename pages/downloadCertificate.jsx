import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const DownloadCertificate = () => {
    const [state, setState] = useState({ sr_no: "", adm_no: "" });

    const [link, setLink] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const { sr_no, adm_no } = state;
        fetch(`http://web2rise.q2w.in:100/bitapi/api/certificate?sr_no=${sr_no}&adm_no=${adm_no}`)
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
        <div className='site-section'>
            <Head>
                <title>Download Certificates - Bit Education</title>
            </Head>
            <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
                <div className="container">
                    <div className="row align-items-end justify-content-center text-center">

                        <div className="col-lg-7">
                            <h2 className="mb-0">Certificate</h2>
                            <p>Download Certificate</p>
                        </div>
                    </div>
                </div>
            </div>
            {(link === "" || link === "0") && <div className="site-section">
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
                        {link !== "" && (link === "0" ? <h2>Not Found</h2> : <a target="_blank" download="BitEducation-certificate" href={"http://localhost/bitapi/uploads/certificates/" + link} rel="noreferrer"><Image src="/assets/images/download-pdf.svg" className='m-auto' alt='download' width={"100px"} height="100px" /> <h3>Download</h3></a>)
                        }
                    </div>
                </div>
            </div>

        </div >
    )
}

export default DownloadCertificate