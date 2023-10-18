import React, { useState } from 'react'
import './UserPage.css';
import Range from './Range';
// import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  // const navigate = useNavigate()
  const [status_code, setStatus_code] = useState(false)
  const [ProjectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [num_days, setNumDays] = useState();
  const [progress,setProgress]=useState();

  const payload ={
    project_name:ProjectName,
    project_desc:projectDescription,
    days_to_comp:num_days
  }
  let task_percentage = 0;
  function updateTextInput(event) {
    task_percentage = event.target.value;
    console.log(event.target.value);
    // document.getElementById('taskprogress').value=val;
    // range=val; 
  }
  function submitHandler() {
    console.log(status_code)

    setStatus_code(true)
    console.log("Add Task Btn Working Fine")

  }
  console.log(payload)
  const logInFunc = async () => {
    
    try {
      const response = await fetch('http://127.0.0.1:8000/add_project', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)

      }).then((response)=>{
        if(response.status!==200){
          alert("Data Failed to Save")
        } else {
          alert("Data Saved Successfully")
        }
        })
    }
     catch(error){
      console.log("Error")
     }
  }

  const update_status = async () => {
    
    try {
      const response = await fetch('http://127.0.0.1:8080/update_project', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)

      })
    }
     catch(error){
      console.log("Error")
     }
  }

    return (
      <div>
        {/* <h3>{username}</h3> */}
        <h3 id="user_profile_name">Hi Charan!</h3>
        <form className='userpage_form'>
          <div className="input-box">
            <label htmlFor="name" className='user_project_details'>ProjectName:<br />
              <input type="text" onChange={(event) => { setProjectName(event.target.value)}} className="signup_input-boxes" name='ProjectName' required />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="name" className='user_project_details'>Progress:<br />
              <textarea onChange={(event) => { setProjectDescription(event.target.value)}} name='Progress' defaultValue="" />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="name" className='user_project_details'>No of Days:<br />
              <input type="number" onChange={(event) => { setNumDays(event.target.value)}} className="signup_input-boxes" name='No_of_days' required />
            </label>
          </div>
          <div className="button input-box">
            <button type="button" className="submit_btn" value="Add Task" onClick={logInFunc}>Add Task</button>
          </div>
          {/* <Range /> */}
          {
            status_code ? <div className='card'><h4>Demo Card</h4>
              <h5>Project Name</h5>
              <p>Project Progress</p>
              <Range />
              <div className="button input-box">
                {/* <button type="button" className="submit_btn" value="Add Task" onClick={submitHandler}>Update Task</button> */}
              </div></div> : null
          }
        </form>

      </div>
    )
  }


  export default UserPage
