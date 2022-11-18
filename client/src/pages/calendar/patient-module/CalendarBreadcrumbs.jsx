import React from "react";

function CalendarBreadcrumbs (){
    return(
        <div>
            {/* Breadcrumbs */}
            <div className="calendar-breadcrumb">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/patient">Home</a></li>
                        <li className="breadcrumb-item active">Calendar</li>
                    </ol>
                </nav>
            </div>

        </div>
    )
}

export default CalendarBreadcrumbs;