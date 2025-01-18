import "./styles.css";
import { useContext } from "react";
import Context from "./context";

export default function JSONTable() {
  const jsonData = useContext(Context);

  const getButtonName = (val) => {
    console.log("value is : ", val);
    alert("My name is : " + val);
  };

  if (jsonData) {
    console.log("update div : ", jsonData);

    return (
      <div className="customerList">
        <br />
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
              <th>Country</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {
              // use data State Variable For Get Data Use JavaScript Map Mathod
              jsonData
                ? jsonData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.state}</td>
                        <td>{data.country}</td>
                        <td>
                          <button
                            onClick={(e) => getButtonName(e.target.value)}
                            value={data.name}
                          >
                            Get Name
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""
            }
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}
