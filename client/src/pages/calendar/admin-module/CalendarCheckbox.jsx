import React from "react";

function CalendarCheckbox (){
    return(
        <div>
            {/* Checkboxes */}
            <div className="calendar-checkbox">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">Pending</label>
                    <span className="circle1"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>
                    

                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    <label className="form-check-label" htmlFor="gridCheck2">Accepted</label>
                    <span className="circle2"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck3"/>
                    <label className="form-check-label" htmlFor="gridCheck3">Finished</label>
                    <span className="circle3"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>

                    <input className="form-check-input" type="checkbox" id="gridCheck4"/>
                    <label className="form-check-label" htmlFor="gridCheck4">Cancelled</label>
                    <span className="circle4"><i className = "fa fa-circle fa-2xs" aria-hidden="true"></i></span>
                </div>

            </div>

        </div>
    )

}

export default CalendarCheckbox;