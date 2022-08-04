import './App.css';
import Company from './Company.js'
import P2 from './P2.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useEffect, useState } from 'react'

let d =new Date()

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

function App() {


  let [obj, setobj] = useState(init)

  let appdata = (e) => {
    // console.log(e)
    setobj(e)

  }

  let getData = () => {
    // console.log(obj)
    return obj
  }


  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Company className="comp" funct={appdata} set={setobj} />} />
          <Route exact path='/data' element={<P2 object={getData()} reset={setobj} />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
