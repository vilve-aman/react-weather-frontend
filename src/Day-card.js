import './Day-card.css';

let Daycard = (props) => {
    // console.log(props)
    return (<>
        <div className='daycontainer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge dsvg" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
</svg>


            <div className='day'>
                <h3 className='wd'>{props.day}</h3>
                <h2 className='date'>{props.date}</h2>
            </div>


            <div className='minmax'>

                <svg width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill minmax-svg" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                <h4>{props.max}</h4>

                <svg width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill l minmax-svg" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                <h4>{props.min}</h4>

            </div>
        </div>
    </>)
}

export default Daycard;