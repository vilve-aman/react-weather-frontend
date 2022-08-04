import { useState } from 'react';
import './Company.css'
import { Link } from "react-router-dom";


let Company = (props) => {

    let [inpval, updt] = useState("")

    const inpupdt = (e) => {
        updt(e.target.value)
    }

    const click = (e) => {

        let url = `http://localhost:4000/api_key=1234&q=12&city=${inpval}`;

        fetch(url)
            .then((res) => { return res.json() })
            .then((d) => {
                // console.log(d)
                // props.set(d)
                props.funct(d)
            })

    }
    return (<div>

        <div className='container'>
            <h1>hey there i am   &#187; peppyWeather  &#187;</h1>
            <h3> a smart Weather Assistant</h3>

            <div className='search'>
                <input className="form-control form-control-lg inp" onChange={inpupdt} value={inpval} type="text" placeholder=".delhi india" aria-label=".form-control-lg example" />
                <Link to={'/data'} onClick={click}  >
                <svg width="20" height="20" fill="currentColor"  className="bi bi-cursor-fill  btnsvg" viewBox="0 0 16 16" >                        
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />                        
                </svg>
                </Link>
            </div>


{/* 
            <div className="suggestions-list">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item lis">An item</li>
                    <li className="list-group-item lis">A second item</li>
                    <li className="list-group-item lis">A third item</li>
                    <li className="list-group-item lis">A fourth item</li>
                    <li className="list-group-item lis">And a fifth one</li>
                </ul>
            </div> */}

        </div>

    </div>)
}




export default Company;