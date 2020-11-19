import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

// The United States uses nine standard time zones. 
// From east to west they are:
// * Atlantic Standard Time (AST), 
// * Eastern Standard Time (EST), 
// * Central Standard Time (CST), 
// * Mountain Standard Time (MST), 
// * Pacific Standard Time (PST), 
// * Alaskan Standard Time (AKST), 
// * Hawaii-Aleutian Standard Time (HST), 
// * Samoa standard time (UTC-11)
// * Chamorro Standard Time (UTC+10).

function Time() {
    //react hooks to set state
    const [time, setTime] = useState(0);

    //handle refresh of page
    function refreshPage(){
        window.location.reload(false);
    }

    //set up dropdown options
    const options = [
        { value: 'AST', label: 'Atlantic Standard Time (AST)' },
        { value: 'EST', label: 'Eastern Standard Time (EST)' },
        { value: 'CST', label: 'Central Standard Time (CST)' },
        { value: 'MST', label: 'Mountain Standard Time (MST)' },
        { value: 'AKST', label: 'Alaskan Standard Time (AKST)' },
        { value: 'PST', label: 'Pacific Standard Time (PST)' },
        { value: 'HST', label: 'Hawaii-Aleutian Standard Time (HST)' },
        { value: 'UTC-11', label: 'Samoa standard time (UTC-11)' },
        { value: 'UTC+10', label: 'Chamorro Standard Time (UTC+10)' },
    ]

    //convert the time based on which option is selected
    // function convertTime(e) {
    //     // if (e.target.value = options[0].value){
    //     //     console.log("yes")
    //     // }
    //     console.log(e.target.value)
    // }

    return(
        <div>
            <p>You clicked {time} times</p>
            <h2>Choose your timezone:</h2>
            <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="option-1">{options[0].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">{options[1].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">{options[2].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-4">{options[3].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-5">{options[4].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-6">{options[5].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-7">{options[6].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-8">{options[7].label}</Dropdown.Item>
              <Dropdown.Item eventKey="option-9">{options[8].label}</Dropdown.Item>
              <Dropdown.Divider /> 
            </DropdownButton>
           
            <button onClick={()=> setTime(time +1)}>Click me</button>
            <button onClick={refreshPage}>Refresh</button>
            {/* <button onClick={convertTime}>Refresh</button> */}
        </div>
    )
}

export default Time;