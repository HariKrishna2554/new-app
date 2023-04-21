import './FirstComponents.css'
import DateExpanses from './ExpansesDate';

function FirstComponent(props) {
    return (
        <div className='discription'>
            <DateExpanses date={props.date}/>
            <div>
                <h1>{props.title}</h1>
                <div>{props.price}</div>
            </div>
        </div>
        )
};

export default FirstComponent;