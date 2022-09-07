import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div className="style">
      <h1> Muneeb Shahzad </h1>
      <h2>Personal Information </h2>
      <p>
        {" "}
        <strong>
          {" "}
          Father Name: <i>Shahzad Paracha</i>{" "}
        </strong>{" "}
        <br />
        City: <em> Karachi</em> <br />
        Date of Birth: 06-FEB-2003 <br />
        Religion: <em>Islam</em>
      </p>
      <h2>Objective</h2>
      <blockquote>
        {" "}
        <p>
          Learning the language of the web: HTML and CSS <br />
          To secure a challenging position in a reputable organization to expand
          my learnings, knowledge, and skills
        </p>
      </blockquote>
      <h2>Qualification</h2>
      <p>
        1. Matric: The Mount View School <br />
        2. Inter: Jinnah Government College <br />
        3. Web Development: Saylani Mass IT Training
      </p>

      <h2>Contact</h2>
      <p>Email: muneebshahzad244@gmail.com</p>
      <p>
        Instagram:
        <a href="https://www.instagram.com/muneeb_shahzad00">Muneeb_shahzad</a>
      </p>
      <p>
        github:<a href="https://github.com/Muneebq1"> Muneeb Shahzad</a>
      </p>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
