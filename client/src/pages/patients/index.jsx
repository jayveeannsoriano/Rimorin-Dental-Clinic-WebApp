//Patient list
import React, { useState, useEffect } from "react";
import Axios from "axios";
import PatientProfileWidget from "../../components/patient-list/admin-patient-list";
import PatientListPagination from "../../components/patient-list/pagination";

const Patients = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const userRole = userInfo["user_role_id"];

  var HomeRoute = "";
  switch (userRole) {
    case 1:
      HomeRoute = "/patient";
      break;
    case 2:
      HomeRoute = "/secretary";
      break;
    case 3:
      HomeRoute = "/dentist";
      break;
    case 4:
      HomeRoute = "/admin";
      break;
  }

  const [widgetData, setWidgetData] = useState([]);

  useEffect(async () => {
    try {
      const response = await Axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getUserDetails"
      );
      console.log(response, "Responses");
      setWidgetData(response.data);

    } catch (error) {
      console.log(error);
    }
  }, []);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [widgetsPerPage, setWidgetsPerPage] = useState(8);

  const indexOfLastPost = currentPage * widgetsPerPage;
  const indexOfFirstPost = indexOfLastPost - widgetsPerPage;
  const currentWidgets = widgetData.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = pageNum => setCurrentPage(pageNum);
  const nextPage = pageNum => setCurrentPage(pageNum + 1);
  const prevPage = pageNum => setCurrentPage(pageNum - 1 );


  // const nextPagination = () => this.setState({ currentPage: currentPage + 1 });
  // const prevPagination = () => this.setState({ currentPage: currentPage - 1 });

  return (
    <>
      <div class="pagetitle">
        <h1>Patients</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href={HomeRoute}>Home</a>
            </li>
            <li class="breadcrumb-item active">Patients</li>
          </ol>
        </nav>
      </div>
      <PatientProfileWidget widgetData={currentWidgets} />
      <div>
        <PatientListPagination
          widgetsPerPage={widgetsPerPage}
          totalWidgets={widgetData.length}
          setCurrentPage={setCurrentPage}
          currPage={currentPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </>
  );
};
export default Patients;
