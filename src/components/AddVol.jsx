import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'



const AddVol = () => {

    const [input, changeInput] = useState(
        {
            volId: "",
            fullName: "",
            email: "",
            phone: "",
            dob: "",
            gender: "",
            bloodGrp: "",
            dept: "",
            year: "",
            campName: "",
            hours: "",
            address: "",
            unitNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-vol", input).then(
            (response) => {
                console.log(response.data)
                alert("Volunteer added successfully")
            }
        ).catch(
            (error) => {
                console.error("Error adding volunteer:", error)

                alert("Failed to add volunteer")
            }
        )
    }

    return (
        <div>
<NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Volunteer ID</label>
                                <input type="text" className="form-control" name="volId" value={input.volIdId} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name="fullName" value={input.fullName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name="dob" value={input.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="" id="" className="form-control" name="gender" value={input.gender} onChange={inputHandler} >
                                    <option value="">Select</option>
                                    <option value="">Female</option>
                                    <option value="">Male</option>
                                </select>
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" name="bloodGrp" value={input.bloodGrp} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" name="dept" value={input.dept} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Year of Study</label>
                                <input type="number" className="form-control" name="year" value={input.year} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Camp Name</label>
                                <input type="text" className="form-control" name="campName" value={input.campName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Hours</label>
                                <input type="number" className="form-control" name="hours" value={input.hours} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Unit Number</label>
                                <input type="text" className="form-control" name="unitNumber" value={input.unitNumber} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddVol