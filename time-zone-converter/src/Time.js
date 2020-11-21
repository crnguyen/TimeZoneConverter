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
    const [value, setValue] = useState("Select a timezone");

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
     
    //handles selected option for dropdown menu - grabs eventKey from dropdown item
    //sets the value as state
    const handleSelect=(e)=>{
        // console.log(e);
        setValue(e);
    }

    //check to see if value is being captured 
    const convertTime=()=>{
        if (value === options[0].label){
            console.log("***********", value)
        }
        else if (!value){
            console.log("nothing was selected")
        }
        else{
            console.log("something else:", value)
        }
    }

    return(
        <div>
            <p>You clicked {time} times</p>
            <h2>Choose your timezone:</h2>
            <DropdownButton
                alignRight
                title={value}
                id="dropdown-basic-button"
                onSelect={handleSelect}
            >
              <Dropdown.Item eventKey={options[0].label}>{options[0].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[1].label}>{options[1].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[2].label}>{options[2].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[3].label}>{options[3].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[4].label}>{options[4].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[5].label}>{options[5].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[6].label}>{options[6].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[7].label}>{options[7].label}</Dropdown.Item>
              <Dropdown.Item eventKey={options[8].label}>{options[8].label}</Dropdown.Item>
              <Dropdown.Divider /> 
            </DropdownButton>
           
            <button onClick={()=> setTime(time +1)}>Click me</button>
            <button onClick={refreshPage}>Refresh</button>
            <button onClick={convertTime}>testing</button>

            <div className="inputSection">
                <label for="name">Atlantic Standard Time (AST):</label>
                <input
                    name="name"
                    placeholder=""
                    value={time} //this is a test
                />
                
                <label for="name">Eastern Standard Time (EST):</label>
                <input
                    name="name"
                    placeholder=""
                    value={time} //this is a test
                />
            </div>
            
        </div>
    )
}

export default Time;