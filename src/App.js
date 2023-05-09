import React, { useState } from "react";

import LoginForm from "./components/Users/LoginForm";
import Navbar from "./components/Nav/Navbar";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="">
      {login && <Navbar setLogin={setLogin} />}
      {!login && <LoginForm setLogin={setLogin} />}
    </div>
  );
};

export default App;
