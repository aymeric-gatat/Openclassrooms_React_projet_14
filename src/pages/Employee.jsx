import { useSelector } from "react-redux";
import { Link } from "react-router";
import TableComponent from "../components/Table/TableComponent";

const Employee = () => {
  const employees = useSelector((state) => state.employees.list);

  return (
    <>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
      <section>{employees.length === 0 ? <p>Aucun employé n'a été ajouté pour le moment.</p> : <TableComponent array={employees} arrayHeader={true} arrayStyle={true} className={"test"} />}</section>
    </>
  );
};

export default Employee;
