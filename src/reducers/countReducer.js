
const initState = {count:10}

const countReducer = (state = initState, action) => {
    console.log(action)

    if(action.type === 'INC'){
        return {count: state.count + 1}
    }else if(action.type === 'DEC'){
        return {count: state.count - 1}
    }

    return state
}

export default countReducer;