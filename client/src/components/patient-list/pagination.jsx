import React from 'react';
import { Pagination } from 'react-bootstrap';

const PatientListPagination = ({ widgetsPerPage, totalWidgets, currPage, paginate, nextPage, prevPage}) => {
        const pageNumbers = [];
        //if (currentPage > 1) {
        //    pageNumbers.push(<Pagination.Prev key="prev"/>)
        //}

        for (let i = 1; i <= Math.ceil(totalWidgets / widgetsPerPage); i++) {
            pageNumbers.push(i);
        }

        var i=1;
        const arrNum = pageNumbers.slice(-1);

        //if (currentPage < totalWidgets) {
        //    pageNumbers.push(<Pagination.Next key="next"/>)
        //}

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" id="number" href="#" onClick={() => {
                    if(currPage<=1){
                        alert("No more")
                    }else{paginate(i--)}
                     }
                      }>Previous</a>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                            <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => {if(currPage >= arrNum){alert("last page")}else{paginate(++i)}}}>Next</a>
                    </li>
                </ul>
            </nav>
        );
    };

export default PatientListPagination;