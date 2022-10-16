import '../../../../App.css'
import { Link } from "react-router-dom"


export const BookButton = (props) => {
    return <div className='col d-flex justify-content-center'>
        {/* <Link to={{pathname: `/cusomer-Book-Your-Vehicle/${props.id}`, param1: "Par1"}} className='Button data-taxiBookBtn'>
            Book
        </Link> */}
        <Link to={{pathname: `${props.path}`, param1: "Par1"}} className='Button data-taxiBookBtn'>
            Book
        </Link>
    </div>
}