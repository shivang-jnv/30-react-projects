import React , {useState} from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
    const [nameValue, setNameValue] = useState("Your Signature");
    const [date, setDate] = useState("Date");

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0",
    };

  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={nameValue} />
      <Title classes={"main-title mb-4"} text={date} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <footer
        className="d-flex"
        style={{ 
            justifyContent: "space-around",
            position: "relative",
            top: "40vh",
        }}
      >
        <input type="date" value={date} style={inputStyle} onChange={(e) => {setDate(e.target.value)}}/>
        <input type="text" value={nameValue} style={inputStyle} onChange={(e) => {setNameValue(e.target.value)}}/>
      </footer>
    </div>
  );
}
