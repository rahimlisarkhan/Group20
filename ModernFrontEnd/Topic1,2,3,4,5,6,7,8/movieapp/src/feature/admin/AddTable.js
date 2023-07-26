import { useState } from "react";
import Table from "react-bootstrap/Table";
import { TableRowInput } from "../TableRowInput";
import { TableRowSelect } from "../TableRowSelect";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { withAdminTable } from "shared/hoc/withAdminTable";

function AddTable(props) {
  let dataArray = [
    { id: "001", "Field name": "Stop reason code", "New value": "" },
    { id: "002", "Field name": "Reason descriprion 2", "New value": "" },
    {
      id: "003",
      "Field name": "Reason priority number",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "004",
      "Field name": "Reason Type",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "005",
      "Field name": "Suppress process name",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "006",
      "Field name": "Reason persistent",
      "New value": ["select one", "select two", "select three"],
    },
    { id: "007", "Field name": "XLOB reason category", "New value": "" },
    { id: "008", "Field name": "Reason description 1", "New value": "" },
    { id: "009", "Field name": "Reason description 3", "New value": "" },
  ];

  const { sortIcon, sortedArray, sortFunction, changeInputValue } = props;

  return (
    <Table responsive hover role="add_table">
      <thead>
        <tr>
          <th>
            <div className="d-flex align-items-center">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => sortFunction("Field name", dataArray)}
              >
                Field name
              </span>
              <span
                style={{ fontSize: "8px", cursor: "pointer" }}
                className="ms-2 d-flex flex-column"
                onClick={() => sortFunction("Field name", dataArray)}
              >
                <FaChevronUp
                  style={sortIcon === "down" ? { opacity: 0.3 } : {}}
                />
                <FaChevronDown
                  style={sortIcon === "up" ? { opacity: 0.3 } : {}}
                />
              </span>
            </div>
          </th>
          <th>New value</th>
        </tr>
      </thead>
      <tbody>
        {sortedArray.map((val) => {
          return (
            <tr key={val.id}>
              <td className="fw-bold">{val["Field name"]}</td>
              <td>
                {Array.isArray(val["New value"]) ? (
                  <TableRowSelect
                    title={val["Field name"]}
                    value={["select one", "select two", "select three"]}
                  />
                ) : (
                  <TableRowInput
                    title={val["Field name"]}
                    changeInputValue={changeInputValue}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default withAdminTable(AddTable);
