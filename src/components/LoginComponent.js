import { useDispatch } from "react-redux";


const LoginComponent = () => {
    //action을 전달하려면 dispatch가 필요
    const dispatch = useDispatch();
    
    const sendLogin = () => {
        //payload: 전달되는 데이터
        //action은 반드시 type을 줘야한다.
        const action = {type: 'LOGIN', payload: {id: 'AAA', pw: 'BBB'}}
        dispatch(action)
    }
    
    return ( 
        <div>
            <button onClick={() => sendLogin() }>Login</button>
        </div>
     );
}
 
export default LoginComponent;