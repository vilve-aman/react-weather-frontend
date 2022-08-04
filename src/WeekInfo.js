import './WeekInfo.css'
import Daycard from './Day-card'
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let WeekInfo = (props) => {
    console.log()

    return (<div className='winfo'>
        {
            (() => {
                let p = []
                for (let i = 0; i < 6; i++) {
                let dt = new Date(props.object['weatherbit'][0][i]['datetime'])
                let itrdate = dt.getDate() + " " + months[dt.getMonth()].substring(0,3)
                let itrmax = Math.round(props.object['weatherbit'][0][i]['app_max_temp'])
                let itrmin = Math.round(props.object['weatherbit'][0][i]['app_min_temp'])
                // let itrmax = Math.round(props.object['weatherbit'][0][i]['app_max_temp'])
                // let itrmin = Math.round(props.object['weatherbit'][0][i]['app_min_temp'])

                // console.log(props)

                    p.push(<Daycard className='dc' day={weekDay[dt.getDay()]} date={itrdate} max={itrmax} min={itrmin} />)

                }
                return p;
            })()
        }
    </div>)
}


export default WeekInfo;
