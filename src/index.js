import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


App.listen(process.env.PORT || 3000)
console.log("Server is listening on port", process.env.PORT || 3000)
reportWebVitals();
