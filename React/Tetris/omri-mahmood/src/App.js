import React, { useState, Fragment } from "react";

import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [imgObj, setImgObj] = useState({
    cake: "",
    circle: "",
    combo: "",
    pink: "",
  });

  const handleImgClick = (e) => {
    const name = e.currentTarget.name;
    const obj = { ...imgObj };
    obj[name] = e.currentTarget.src;

    setResult([...result, obj]);
  };
  console.log(result);
  return (
    <div className="App">
      <table style={{ width: "100" }}>
        <tr>
          <th>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqwAdOx9rAVWB4Lq_JG4srbDEIune6aDzA7g&usqp=CAU"
              alt=""
              className="candy-img"
              name="cake"
              onClick={(e) => handleImgClick(e)}
            />
          </th>
          <th>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPLrZVDWAVrYwoSLQx4zcmWtth3RW-t9Hw8A&usqp=CAU"
              alt=""
              className="candy-img"
              name="combo"
              onClick={(e) => handleImgClick(e)}
            />
          </th>
          <th>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRDn_DWDbXxQc4OLHeWj79701LdDwXihXqBg&usqp=CAU"
              alt=""
              className="candy-img"
              name="circle"
              onClick={(e) => handleImgClick(e)}
            />
          </th>
          <th>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzXE_LTFsVZnRdQac8um8T9LA6LT-HE1qBqA&usqp=CAU"
              alt=""
              className="candy-img"
              name="pink"
              onClick={(e) => handleImgClick(e)}
            />
          </th>
        </tr>

        {result
          .slice(0)
          .reverse()
          .map((img) => (
            <tr>
              {img.cake ? (
                <td>
                  <img src={img.cake} className="candy-img"></img>
                </td>
              ) : (
                <td></td>
              )}
              {img.combo ? (
                <td>
                  <img src={img.combo} className="candy-img"></img>
                </td>
              ) : (
                <td></td>
              )}
              {img.circle ? (
                <td>
                  <img src={img.circle} className="candy-img"></img>
                </td>
              ) : (
                <td></td>
              )}
              {img.pink ? (
                <td>
                  <img src={img.pink} className="candy-img"></img>
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;

//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN9LcnXGHPd1A3Rl5QRA_GG8p0OVqROR9R2w&usqp=CAU
//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqwAdOx9rAVWB4Lq_JG4srbDEIune6aDzA7g&usqp=CAU
//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRDn_DWDbXxQc4OLHeWj79701LdDwXihXqBg&usqp=CAU
//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzXE_LTFsVZnRdQac8um8T9LA6LT-HE1qBqA&usqp=CAU
//https://image.winudf.com/v2/image1/Y29tLmJyaWdodC5saWdodC5icmlnaHRsaWdodF9zY3JlZW5fMF8xNTQ0NTA3MzA3XzAxNA/screen-0.jpg?fakeurl=1&type=.jpg
