import React, { useState } from 'react';

const Range = () => {
  const [currentRangeValue, setCurrentRangeValue] = useState(0);
  const rangeValues = [0, 10, 20, 30, 40, 50,60,70,80,90,100];

  const handleInputChange = (e) => {
    setCurrentRangeValue(e.target.value);
  };
  const logInFunc = async () => {
    try{
    const response = await fetch('http://127.0.0.1:8080/update_project', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentRangeValue)

    }).then(alert("Your Status has been updated"))
  } catch(error){
    console.log(error)
  }
}

  return (
    <div>
      <input
        onChange={handleInputChange}
        type="range"
        min={0}
        defaultValue={0}
        max={10}
        step={1}
        list="tick-list"
      />
      {/* <datalist id="tick-list">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </datalist> */}
      <span id="output">{rangeValues[currentRangeValue]}</span>
      <button style={{marginLeft:'40px'}} type="button" className="submit_btn" value="Add Task">Update Task</button>

    </div>
  );
};

export default Range;