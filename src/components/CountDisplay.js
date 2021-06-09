import { useSelector } from "react-redux";
import PageHeader from "./PageHeader";


const CountDisplay = () => {
   //() 안에 들어갈 함수는 Store가 보관하고 있는 상태.
   const count = useSelector(state => state.countReducer.count)
   
    console.log(count)

    return ( 
        <div>
            <h1>{count}</h1>
            <PageHeader></PageHeader>
        </div>
     );
}
 
export default CountDisplay;