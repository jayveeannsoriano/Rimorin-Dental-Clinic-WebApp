import React, { useState } from 'react'
import '../../styles/dashboard.css';
import '../../styles/accounts.css';
import '../../styles/login-signup.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

    const [value, setValue] = useState();
    const handleSelect = (e) => {
        console.log(e);
        setValue(e.target.value);
    }
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">Accounts</a>
                    </li>
                    <li className="breadcrumb-item active">Create Account</li>
                </ol>
            </nav>

            <section className="section dashboard">
                <div className="row">
                    <div class="col-12">
                        <div class="card overflow-auto">
                            <div class="card-body datatable">
                                <div className="container">
                                    <h5 className="card-title">Create Account</h5>
                                    <div className="divider"></div>
                                    <br />
                                    <div className="row">
                                        {/* profile image */}
                                        <div className="col">
                                            <div className="signature-wrap">
                                                <span>Profile Picture</span>

                                                <input
                                                    type="file"
                                                    className="signature sgn-file"
                                                // onChange={handleChange}
                                                />
                                                <span className="text-muted">Upload profile picture</span>

                                            </div>
                                        </div>
                                        {/* sign up form */}
                                        <div className="col-md-8">
                                            <form>
                                                <div className="mb-3">
                                                    <Form.Label>Type of user:</Form.Label>
                                                    <Form.Select value={value} onChange={handleSelect}>
                                                        <option value="" selected disabled>--Select Type--</option>
                                                        <option value="patient">Patient</option>
                                                        <option value="secretary">Secretary</option>
                                                        <option value="dentist">Dentist</option>
                                                        <option value="admin">Admin</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="mb-3">
                                                            <label>First name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mb-3">
                                                            <label>Middle Initial</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Middle Initial"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="mb-3">
                                                            <label>Last name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3 suffix">
                                                            <label>Suffix</label>
                                                            <input
                                                                type="text"
                                                                className="form-control suffix"
                                                                placeholder="(e.g. Jr. , Sr., II)"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Email address</label>
                                                    <input
                                                        type='email'
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                        required
                                                    />
                                                </div>

                                                <div className="row mb-3">
                                                    <label>Gender</label>
                                                    <div className="col-4">
                                                        <div className="form-check">
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    // onChange={handleChange('gender')}
                                                                    // defaultValue={values.gender}
                                                                    className="form-check-input"
                                                                    value="Female"
                                                                    name="gender"
                                                                    required
                                                                />
                                                                <span>Female</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-check">
                                                            <input
                                                                type="radio"
                                                                className="form-check-input"
                                                                name="gender"
                                                                value="Male"
                                                                required
                                                            />
                                                            Male
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-7">
                                                        <div className="mb-3">
                                                            <label>Mobile Number</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="09XXXXXXXXX"
                                                                maxLength="11"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-5">
                                                        <div className="mb-3">
                                                            <label>Date of Birth</label>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                placeholder="Enter birthday"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                            <div className="d-grid ad-btn">
                                                <div className='col-md-auto '>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-primary ad-btn-space"
                                                        onClick={() => navigate(-1)}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary ad-btn-space"
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default CreateAccount;
