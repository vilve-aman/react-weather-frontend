import AddInfo from './AddInfo';
import Info from "./Info.js"
import WeekInfo from './WeekInfo';
import './P2.css'
import { Link } from "react-router-dom";

let d = new Date()


let init = {
    "OpenWeather": {
        "weather": [
            {
                "main": "loading"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 273
        },
        "visibility": 10000,
        "wind": {
            "speed": 78
        },

        "dt": 1659599324,
        "sys": {
            "country": "IN",
            "sunrise": 1659572170,
            "sunset": 1659620610
        },
        "timezone": 19800,
        "id": 1258076,
        "name": "Loading",
        "cod": 200
    },
    "weatherbit": [
        [
            {
                "datetime": d,
                "app_max_temp": 40.6,
                "app_min_temp": 33
            },
            {
                "datetime": d,
                "app_max_temp": 43,
                "app_min_temp": 31.8
            },
            {
                "datetime": d,
                "app_max_temp": 41.1,
                "app_min_temp": 32.1
            },
            {
                "datetime": d,
                "app_max_temp": 40.9,
                "app_min_temp": 27.5
            },
            {
                "datetime": d,
                "app_max_temp": 43.3,
                "app_min_temp": 34.6
            },
            {
                "datetime": d,
                "app_max_temp": 41.5,
                "app_min_temp": 36.9
            }
        ]
    ]
}


let P2 = (props) => {


    return (<>

        <div className='back_btn'>
            <Link to="/" onClick={() => {
                props.reset(init)
            }} >
                <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise refresh" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
            </Link>

        </div>
        <div className='p2-container'>

            <div className='lefty' >
                <Info object={props.object} />
                <AddInfo object={props.object} />
            </div>
            <div className='righty'  >
                <WeekInfo object={props.object} />
            </div>
        </div>
    </>)
}

export default P2;

