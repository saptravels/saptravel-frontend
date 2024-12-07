import React, { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table';
import { IoTrashOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

import { Button } from 'react-bootstrap';
const BootstrapCustomTable = ({
    headers,
    data,
    rowsPerPage: defaultRowsPerPage,
    onEdit,
    onDelete,
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  
    useEffect(() => {
      setCurrentPage(1);
    }, [rowsPerPage]);
  
    const handleChangePage = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
  
    const renderStatus = (status) => (
      <span className={`badge ${status === 'active' ? 'badge-success' : 'badge-secondary'}`}>
        {status}
      </span>
    );
  
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const firstRowIndex = (currentPage - 1) * rowsPerPage + 1;
    const lastRowIndex = Math.min(currentPage * rowsPerPage, data.length);
  
    return (
      <div>
        <div className="table-responsive">
          <Table className="table table-striped table-hover">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={index}>
                  {headers.map((header, headerIndex) => (
                    <td key={headerIndex}>
                      {header === 'Actions' ? (
                        <div className="d-flex justify-content-left gap-4">
                          {/* <TbEdit size={20} onClick={() => onEdit(row)} /> */}
                          <IoTrashOutline size={20} onClick={() => onDelete(row)} />
                        </div>
                      ) : header === 'status' ? (
                        renderStatus(row.status)
                      ) : (
                        row[header]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          <nav className="d-flex justify-content-end align-items-center gap-4">
            <span className="mr-2">Rows per page:</span>
            <div className="d-flex align-items-center">
              <select
                className="form-control form-control-sm"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </div>
            <span>{`${firstRowIndex} - ${lastRowIndex} of ${data.length}`}</span>
            <ul className="pagination mb-0" role="navigation" aria-label="Pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <Button
                  type="button"
                  className="page-link"
                  aria-label="Previous Page"
                  onClick={() => handleChangePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <MdKeyboardArrowLeft />
                </Button>
              </li>
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <Button
                  type="button"
                  className="page-link"
                  aria-label="Next Page"
                  onClick={() => handleChangePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <MdOutlineKeyboardArrowRight />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };

export default BootstrapCustomTable;
