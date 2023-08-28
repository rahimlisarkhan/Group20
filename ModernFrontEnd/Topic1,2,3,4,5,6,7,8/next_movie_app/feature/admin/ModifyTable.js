import Table from "react-bootstrap/Table";
import { TableRowInput } from "../TableRowInput";
import { TableRowSelect } from "../TableRowSelect";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { withAdminTable } from "shared/hoc/withAdminTable";

function ModifyTable() {
  let dataArray = [
    {
      id: "001",
      "Field name": "Reason priority number",
      "Current value": "2",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "002",
      "Field name": "Reason Type",
      "Current value": "Stop",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "003",
      "Field name": "Suppress process name",
      "Current value": "Suppression",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "004",
      "Field name": "Reason persistent",
      "Current value": "Hardadaptable",
      "New value": ["select one", "select two", "select three"],
    },
    {
      id: "005",
      "Field name": "XLOB reason category",
      "Current value": "Non Numeric Acct Balance (Cycle)",
      "New value": "",
    },
    {
      id: "006",
      "Field name": "Reason description 1",
      "Current value":
        "Account with non numeric last credit bureau account balance from C3 (Cycle)",
      "New value": "",
    },
    {
      id: "007",
      "Field name": "Reason description 3",
      "Current value": "Defensive Code",
      "New value": "",
    },
  ];

  const { sortIcon, sortedArray, sortFunction, changeInputValue } = props;

  return (
    <Table responsive hover role="modify_table">
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
          <th>
            <div className="d-flex align-items-center">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => sortFunction("Current value")}
              >
                Current value
              </span>
              <span
                style={{ fontSize: "8px", cursor: "pointer" }}
                className="ms-2 d-flex flex-column"
                onClick={() => sortFunction("Current value")}
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
              <td>{val["Current value"]}</td>
              <td>
                {Array.isArray(val["New value"]) ? (
                  <TableRowSelect
                    rowTitle={val["Field name"]}
                    inputValue={["select one", "select two", "select three"]}
                  />
                ) : (
                  <TableRowInput inputValue="" />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default withAdminTable(ModifyTable);
