import React, { useEffect, useState } from 'react'

import axios from 'axios'


const ViewVol = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-vol").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Volunteer ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Blood Group</th>
                        <th>Department</th>
                        <th>Year of Study</th>
                        <th>Camp Name</th>
                        <th>Hours completed</th>
                        <th>Address</th>
                        <th>Unit Number</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.volId}</td>
                                <td>{value.fullName}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.dob}</td>
                                <td>{value.gender}</td>
                                <td>{value.bloodGrp}</td>
                                <td>{value.dept}</td>
                                <td>{value.year}</td>
                                <td>{value.campName}</td>
                                <td>{value.hours}</td>
                                <td>{value.address}</td>
                                <td>{value.unitNumber}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewVol