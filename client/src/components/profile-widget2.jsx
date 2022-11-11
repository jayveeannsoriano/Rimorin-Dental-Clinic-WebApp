import React from "react";
import "react-bootstrap";
import "../styles/profilewidgettwo.css";


import '../styles/dental-record.css'

const ProfileWidgetTwo = () => {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    return (
        <>



            <div class="col-xl">
                <div className="card dental-record-form">
                    <div className="card-body pt-3">
                        <h5 className="card-title">Summary of Treatment</h5>
                        <div className="divider"></div>
                            <div className="row">
                                <div className="col-3">
                                    <label>label</label>
                                    <p>text</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileWidgetTwo;