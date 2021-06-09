import { useDispatch } from "react-redux";


const CountButtons = () => {
    
    const dispatch = useDispatch()

    const plus = () => {
        dispatch( {type:'INC'})
    }

    const minus = () => {
        dispatch( {type:'DEC'})
    }
    
    return ( 
        <div>
            <h4></h4>
            <button onClick={() => plus()}>++</button>
            <button onClick={() => minus()}>--</button>
        </div>
     );
}
 
export default CountButtons;