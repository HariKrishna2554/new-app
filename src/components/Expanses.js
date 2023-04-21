import FirstComponent from "./FirstComponents";
import Expanses from "./Expanses.css"

function Expanses(props) {
    return(
        <div className="Expanses">
            <FirstComponent
                title={props.item[0].title}
                price={props.item[0].price}
                date={props.item[0].date}
            />
            <FirstComponent
                title={props.item[1].title}
                price={props.item[1].price}
                date={props.item[1].date}
            />
            <FirstComponent
                title={props.item[2].title}
                price={props.item[2].price}
                date={props.item[2].date}
            />
        </div>
    );
}

export default Expanses;