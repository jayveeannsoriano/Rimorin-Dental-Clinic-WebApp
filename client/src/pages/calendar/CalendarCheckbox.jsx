import React from "react";

function CalendarCheckbox (){
    return(
        <div>
            {/* Checkboxes */}
            <div className="calendar-checkbox">
                <div className="form-check">
                    <input className="form-check-input1" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label1" htmlFor="gridCheck1">Pending</label>
                    <span className="badge bg-warning"><i></i></span>

                    <input className="form-check-input2" type="checkbox" id="gridCheck2"/>
                    <label className="form-check-label2" htmlFor="gridCheck2">Accepted</label>
                    <span className="badge bg-info"><i></i></span>

                    <input className="form-check-input3" type="checkbox" id="gridCheck3"/>
                    <label className="form-check-label3" htmlFor="gridCheck3">Finished</label>
                    <span className="badge bg-success"><i></i></span>

                    <input className="form-check-input4" type="checkbox" id="gridCheck4"/>
                    <label className="form-check-label4" htmlFor="gridCheck4">Cancelled</label>
                    <span className="badge bg-danger"><i></i></span>
                </div>

            </div>

        </div>
    )

}

export default CalendarCheckbox;