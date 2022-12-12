import react, { useState } from "react";

const SessionBox = () => {
  const [box, setBox] = useState("");
  const [allBox, setAllBox] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setAllBox([...allBox, box]);
  };

  const setColorValue = (e) => {
    setBox({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Add Color :</label>
        <input onChange={setColorValue} name="colorBox" />
        <input type="submit" />
      </form>

      {allBox.map((item, index) => {
        return (
          <div
            style={{
                display:"inline-block",
              backgroundColor: item.colorBox,
              margin: "10px",
              height: "150px",
              width: "150px",
              boxShadow: "5px 10px #888888",
            }}
          ></div>
        );
      })}
    </>
  );
};

export default SessionBox;
