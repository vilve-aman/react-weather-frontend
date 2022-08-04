import { useEffect, useState } from 'react';
import './Info.css'


const icons = {

    Clear : './asset/6.png',
    Clouds : './asset/5.png',
    Rain : './asset/2.png',
    Snow : './asset/9.png',
    Haze : './asset/7.png',
    Thunderstorm : './asset/24.png',
    Mist : './asset/1.png'

}

let Info = (props) => {
    let d =new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let [india,setindia] = useState('India')    //props.object['OpenWeather'].name
    let [temp,settemp] = useState(0)          //Math.round(props.object['OpenWeather'].main.temp-273)
    let [state,setstate] = useState('clouds')   //props.object['OpenWeather'].weather[0].main

    useEffect(()=>{
        setindia(props.object['OpenWeather'].name)
        settemp(Math.round(props.object['OpenWeather'].main.temp-273))
        setstate(props.object['OpenWeather'].weather[0].main)
    
    })


    return (<>

        <div className='infocard'>
            <div className='leftcontainer'>

                <div className='location'>
                    <svg width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>

                    <h5 className='loc'>{india}</h5>
                </div>

                <div className='sv-container'>
                    <img className='creativesvg' src={icons[state]} />
                </div>
            </div>

            <div className='rightcontainer'>
                <h1 className='t'>{temp}</h1>
                <div className='tinfo'>
                    <h3 className='tc'>{state}</h3>
                    <h4 className='td'>{months[d.getMonth()] + " " + d.getDate() }</h4>
                </div>
            </div>
        </div>

    </>)
}

export default Info;