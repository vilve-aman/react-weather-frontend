import './Card.css'

let Card = (props) => {
    return (<>
        <div className="outer">
            {props.svgs}
            <div className="inner">
                    <h4 className='card-text'>{props.Title}</h4>
                    <h3 className='card-text val'>{props.val}</h3>
            </div>
        </div>
    </>)
}

export default Card;