import React, { Suspense } from "react";
import { Link } from "react-router";

const Form = React.lazy(() => import("../components/Form"));

const App = () => {
  const userTemplate = {
    firstname: "",
    lastname: "",
    birthday: "",
    start_day: "",
    adress: {
      street: "",
      city: "",
      state: "",
      zip_code: "",
    },
    departement: "",
  };

  return (
    <>
      <h1>HRnet</h1>
      <Link to="/employee">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Suspense fallback={<p>Loading ... </p>}>
        <Form data={userTemplate} />
      </Suspense>
    </>
  );
};

export default App;
