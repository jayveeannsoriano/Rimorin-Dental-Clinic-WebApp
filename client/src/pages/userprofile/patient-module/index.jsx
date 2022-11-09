import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileWidget from "../../../components/profile-widget";

const UserProfile = () => {  
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    return(
        <>
                <div class="pagetitle">
                    <h1>My Profile</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">My Profile</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                        <ProfileWidget/>

                        <div class="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    {/* <!-- Bordered Tabs --> */}
                                    <ul class="nav nav-tabs nav-tabs-bordered">

                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link " data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>
                                    </ul>

                                    <div class="tab-content pt-2">
                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                        
                                            <h5 class="card-title">Profile Details</h5>

                                            {/* <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['email']} McBell</div>
                                            </div> */}
    
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">First Name</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['fname']} </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Middle Name</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['mname']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Last Name</div>
                                                <div class="col-lg-9 col-md-8"> {userInfo['lname']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Date of Birth</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['bday']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Gender</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['gender']}</div>
                                            </div>

                                            {/* <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Address</div>
                                                <div class="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                                            </div> */}

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">House No. & Name of Street</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['house']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">District/Barangay</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['brgy']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Municipality/City</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['municipality']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Province</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['province']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Country</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['country']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Zipcode</div>
                                                <div class="col-lg-9 col-md-8">535022</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Phone</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['mobile']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Email</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['email']}</div>
                                            </div>

                                            <h5 class="card-title">Basic Medical Information</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Medications or maintenance</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['medications']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Allergies</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['allergies']}</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Conditions</div>
                                                <div class="col-lg-9 col-md-8">{userInfo['conditions']}</div>
                                            </div>

                                        </div>

                                        {/* Profile Edit */}
                                        <div class="tab-pane fade profile-edit pt-3" id="profile-edit">        
                                                <form>
                                                    <div class="row mb-3">
                                                    <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <img src="assets/img/messages-1.jpg" alt="Profile"/>
                                                        <div class="pt-2">
                                                        <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="fa-solid fa-upload"></i></a>
                                                        <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="fa-solid fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    {/* <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control" id="fullName" value="{userInfo['email']} McBell"/>
                                                    </div>
                                                    </div> */}

                                                     <h5 class="card-title">Personal Information</h5>   
                                                    <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control" id="fullName" value={userInfo['fname']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Middle Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control" id="fullName" value=""/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Last Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control" id="fullName" value={userInfo['lname']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Date of Birth" class="col-md-4 col-lg-3 col-form-label">Date of Birth</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="date" type="text" class="form-control" id="Birthday" value={userInfo['bday']}/>
                                                    </div>
                                                    </div>

                                                    {/*                                                     
                                                    <div class="row mb-3">
                                                    <label for="Gender" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                                                    </div>
                                                    </div> */}

                                                    {/* <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                                                    </div>
                                                    </div> */}

                                                <h5 class="card-title">Address Information</h5> 

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">House No. & Name of Street</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value={userInfo['house']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">District/Barangay</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value={userInfo['brgy']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Municipality/City</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value={userInfo['municipality']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Province</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value={userInfo['province']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Country</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value={userInfo['country']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Zipcode</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value="535022"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="tel" class="form-control" id="Phone" value={userInfo['mobile']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email Address</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="email" type="email" class="form-control" id="Email" value={userInfo['email']}/>
                                                    </div>
                                                    </div>  

                                                <h5 class="card-title">Medical Conditions</h5>
                                                    <div class="row mb-3">
                                                    <label for="Medications" class="col-md-4 col-lg-3 col-form-label">Medications or maintenance</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="Medications" value={userInfo['medications']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Allergies" class="col-md-4 col-lg-3 col-form-label">Allergies</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone" value={userInfo['allergies']}/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Conditions" class="col-md-4 col-lg-3 col-form-label">Conditions</label>
                                                   
                                                    </div>

                                                    <div class="container">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                        <div className='form-check '>
                                                            <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked={userInfo['conditions'].includes('Heart Disease') ? true : false} value='Heart Disease' />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Heart Disease </label>
                                                        </div>

                                                        <div className='form-check'>
                                                            <input class="form-check-input"type="checkbox" value="High Blood Pressure" id="flexCheckDefault" checked={userInfo['conditions'].includes('High Blood Pressure') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> High Blood Pressure</label> 
                                                        </div>

                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Rheumatic" id="flexCheckDefault" checked={userInfo['conditions'].includes('Rheumatic') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Rheumatic </label>
                                                        </div>
                                                        
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Blood Disorders" id="flexCheckDefault" checked={userInfo['conditions'].includes('Blood Disorders') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Blood Disorders </label>
                                                        </div>
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Diabetes" id="flexCheckDefault" checked={userInfo['conditions'].includes('Diabetes') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Diabetes </label>
                                                        </div>
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Seizures" id="flexCheckDefault" checked={userInfo['conditions'].includes('Seizures') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Seizures </label>
                                                        </div>
                                                        </div>
                                                        
                                                        <div class="col-sm">
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Tuberculosis" id="flexCheckDefault" checked={userInfo['conditions'].includes('Tuberculosis') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Tuberculosis </label>
                                                        </div>
                                                        
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Tumors" id="flexCheckDefault" checked={userInfo['conditions'].includes('Tumors') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Tumors/Growths </label>
                                                        </div>
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Asthma" id="flexCheckDefault" checked={userInfo['conditions'].includes('Asthma') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Asthma </label>
                                                        </div>
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Hepatitis" id="flexCheckDefault" checked={userInfo['conditions'].includes('Hepatitis') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Hepatitis </label>
                                                        </div>
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="STD" id="flexCheckDefault" checked={userInfo['conditions'].includes('STD') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> STD </label>
                                                        </div>
                                                        <div className='form-check'>
                                                            <input class="form-check-input" type="checkbox" value="Stroke" id="flexCheckDefault" checked={userInfo['conditions'].includes('Stroke') ? true : false} />
                                                            <label class="form-check-label px-1" for="flexCheckDefault"> Stroke </label>
                                                        </div>

                                                        </div>
                                                    </div>
                                                    </div>
            

                                                    <div class="text-right">
                                                    <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                    </div>
                                                </form>
                                            </div>

                                            {/* Change Password */}
                                            <div class="tab-pane fade pt-3" id="profile-change-password">
                                                <form>
                                                    <div class="row mb-3">
                                                    <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="password" type="password" class="form-control" id="currentPassword"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" class="form-control" id="newPassword"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" class="form-control" id="renewPassword"/>
                                                    </div>
                                                    </div>

                                                    <div class="text-right">
                                                    <button type="submit" class="btn btn-primary">Change Password</button>
                                                    </div>
                                                </form>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default UserProfile;