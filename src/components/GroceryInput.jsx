import { useState } from "react";

export const GroceryInput = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const inpValue = (e) => {
    setValue(e.target.value);
  };

  const inpData = () => {
    setData((olditems) => {
      return [...olditems, value];
    });
    setValue("");
  };
  const deletes = (indexM) => {
    console.log("deleted the item from the list", indexM);
    let filt = (olditems) => {
      return olditems.filter((ele, indexF) => {
        // console.log(olditems);
        return indexF !== indexM.index;
      });
    };
    setData(filt);
  };
  return (
    <div>
      <h1>Grocery List</h1>
      <input type="text" onChange={inpValue} name="" value={value} />
      <button onClick={inpData}>+</button>
      <ol>
        {data.map((itemsVal, index) => {
          return (
            <>
              <button
                onClick={() => {
                  return deletes({ index });
                }}
              >
                x
              </button>
              <li>{itemsVal}</li>
            </>
          );
        })}
      </ol>
    </div>
  );
};
