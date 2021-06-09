
const initState = {
    userid:'',
    username:''
}

//state 값이 없을 경우를 대비해서 initState를 넣어준다.
const loginReducer = (state = initState, action) => {
    console.log("login reducer...")
    console.log(action)

    if(action.type === 'LOGIN'){
        return {userid: action.payload.id, username: action.payload.pw}
    }

    return state;
}
export default loginReducer;