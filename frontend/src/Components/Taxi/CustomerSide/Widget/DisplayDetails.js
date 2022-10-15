import '../../../../App.css'

export const DisplayDitails = (props) => {
    return <div className='row dataInput'>
        <div className='col'>
            <h5>{props.title}</h5>
        </div>
        <div className='col'>
            {props.data}
        </div>
    </div>
}