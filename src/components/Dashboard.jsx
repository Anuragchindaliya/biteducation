import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import weburl from '../config';
const Dashboard = ({ toast }) => {

    const [state, setState] = useState({ sr_no: "", name: "", father_name: "", adm_no: "", cert_file: [] })
    const [certificates, setCertificates] = useState([]);
    const [editModalStatus, setEditModalStatus] = useState(false);
    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const [deleteData, setDeleteData] = useState({})
    const [editData, setEditData] = useState({});



    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.sr_no === "" && state.adm_no === "" && state.name === "" && state.father_name === "" && state.cert_file.length === 0) {
            toast.error("Required field is missing")
        } else {
            const formData = new FormData();
            formData.append("sr_no", state.sr_no);
            formData.append("name", state.name);
            formData.append("father_name", state.father_name);
            formData.append("adm_no", state.adm_no);
            formData.append("cert_path", state.cert_file);
            formData.append("token", localStorage.getItem("token"));
            fetch(`${weburl}/api/upload-certificate`, { method: "POST", body: formData })
                .then((res) => res.json())
                .then((result) => {
                    if (result.status === "success") {
                        setState({ sr_no: "", name: "", father_name: "", adm_no: "", cert_file: [] })
                        toast.success("Certificate Uploaded");
                        e.target.reset();
                        fetchCertificate();

                    } else {
                        toast.error("Error in uploading")

                    }
                });
        }

    }
    const fetchCertificate = () => {
        const token = localStorage.getItem("token");
        fetch(`http://web2rise.q2w.in:100/bitapi/api/certificates?token=${token}`).then((res) => res.json()).then((result) => {

            if (result.status === "success") {
                setCertificates(result.data)
            } else {
                toast.info("No Certificates")
            }
        })

    }
    useEffect(() => {
        fetchCertificate()
    }, [])
    const handleEditModal = (currentData) => {
        setEditModalStatus(true);
        setEditData(currentData);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const editFormData = new FormData();
        editFormData.append("id", editData.id);
        editFormData.append("sr_no", editData.sr_no);
        editFormData.append("name", editData.name);
        editFormData.append("father_name", editData.father_name);
        editFormData.append("adm_no", editData.adm_no);
        editFormData.append("token", localStorage.getItem("token"));
        editFormData.append("created_at", new Date().toISOString().slice(0, 19).replace('T', ' '));

        fetch(`${weburl}/api/update-certificate`, { method: "POST", body: editFormData })
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "success") {
                    setState({ sr_no: "", name: "", father_name: "", adm_no: "", cert_file: [] })
                    toast.success("Certificate Updated");
                    fetchCertificate();
                    e.target.reset();
                } else {
                    toast.error("Error in uploading")
                }
                setEditModalStatus(false);
            });

    }
    const handleDeleteModal = (currentId) => {
        setDeleteModalStatus(true);
        setDeleteData({ id: currentId })
    }
    const handleDelete = () => {
        const token = localStorage.getItem("token");
        fetch(`${weburl}/api/delete?id=${deleteData.id}&token=${token}`).then((res) => res.json()).then((result) => {
            if (result.status === "success") {
                toast.success("Deleted Successfully")
            } else {
                toast.error("Error in Deleting")
            }
            setDeleteModalStatus(false);
            fetchCertificate()
        })
    }

    return (
        <div className="container-fluid px-5">
            <div className="row mb-5">

                <form className="col-lg-3" onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        <h3 className="section-title-underline"><span>Upload Certificate </span></h3>
                    </div>
                    <div className="row ">
                        <div className="form-group col-sm-6 col-md-6 col-lg-12">
                            <label htmlFor="username">Serial No.</label>
                            <input type="number" className="form-control form-control-lg" min="1" value={state.sr_no} onChange={(e) => setState({ ...state, sr_no: e.target.value })} required />
                        </div>
                        <div className=" form-group col-sm-6 col-md-6 col-lg-12">
                            <label htmlFor="pword">Addmission No.</label>
                            <input type="number" className="form-control form-control-lg" min="1" value={state.adm_no} onChange={(e) => setState({ ...state, adm_no: e.target.value })} required />
                        </div>
                        <div className="form-group col-sm-6 col-md-6 col-lg-12">
                            <label htmlFor="pword">Name</label>
                            <input type="text" className="form-control form-control-lg" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} required />
                        </div>
                        <div className=" form-group col-sm-6 col-md-6 col-lg-12">
                            <label htmlFor="pword">Father Name</label>
                            <input type="text" className="form-control form-control-lg" value={state.father_name} onChange={(e) => setState({ ...state, father_name: e.target.value })} required />
                        </div>
                        <div className="form-group col-sm-6 col-md-6 col-lg-12">
                            <label htmlFor="pword">Certificate</label>
                            <input type="file" className="form-control-file" onChange={(e) => setState({ ...state, cert_file: e.target.files[0] })} required />
                        </div>
                        <div className="form-group w-100">
                            <input type="submit" defaultValue="Log In" className="btn btn-primary form-control" />
                        </div>
                    </div>
                </form>
                <div className="col-md-8 offset-md-1 overflow-auto ">
                    <h3 className="section-title-underline text-center"><span>All Certificates </span></h3>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Father name</th>
                                <th scope="col">Serial No.</th>
                                <th scope="col">Admission No.</th>
                                <th scope="col">Certificate</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {certificates?.length >= 0 ? certificates.map((crt, i) => (
                                <tr key={crt.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{crt.name}</td>
                                    <td>{crt.father_name}</td>
                                    <td>{crt.sr_no}</td>
                                    <td>{crt.adm_no}</td>
                                    <td><a target="_blank" download="BitEducation-certificate" href={"http://localhost/bitapi/uploads/certificates/" + crt.cert_path} rel="noreferrer">Download</a></td>
                                    {/* <td>
                                        <button className='btn btn-primary mr-2' onClick={() => handleEditModal(crt)}>Edit</button>
                                        <button className='btn btn-primary' onClick={() => handleDeleteModal(crt.id)}>Delete</button>
                                    </td> */}
                                </tr>
                            )) : <tr><td colSpan={7} align="center"><h2>No Record Availabel</h2></td></tr>}
                        </tbody>
                    </table>
                </div>

            </div>
            <Modal
                show={editModalStatus}
                size="lg"
                onHide={() => setEditModalStatus(false)}
                aria-labelledby="contained-modal-title-vcenter"
                fullscreen
                centered
            >
                <form className='p-3' onSubmit={handleEdit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="sr_no">Serial No.</label>
                            <input type="number" id="sr_no" className="form-control form-control-lg" min="1" value={editData.sr_no} onChange={(e) => setEditData({ ...editData, sr_no: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Addmission No.</label>
                            <input type="number" className="form-control form-control-lg" min="1" value={editData.adm_no} onChange={(e) => setEditData({ ...editData, adm_no: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Name</label>
                            <input type="text" className="form-control form-control-lg" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
                        </div>
                        <div className="col-md-12 form-group">
                            <label htmlFor="pword">Father Name</label>
                            <input type="text" className="form-control form-control-lg" value={editData.father_name} onChange={(e) => setEditData({ ...editData, father_name: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Button variant="secondary" className="btn btn-primary btn-lg px-5 mr-3" onClick={() => setEditModalStatus(false)}>Cancel</Button>
                            <input type="submit" value={"Update"} className="btn btn-primary btn-lg px-5" />
                        </div>
                    </div>
                </form>
            </Modal>
            <Modal
                show={deleteModalStatus}
                size="sm"
                onHide={() => setDeleteModalStatus(false)}
                aria-labelledby="contained-modal-title-vcenter"
                fullscreen
                centered
            >


                <Modal.Header className='justify-content-center'>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <div className="modal-body">
                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                </div>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="secondary" onClick={() => setDeleteModalStatus(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => handleDelete(deleteData.id)}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Dashboard