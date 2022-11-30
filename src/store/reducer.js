
const initialState = {
    tasks: []
}

const reducer = (state = initialState, action)=>{
    
    switch(action.type){ 
       case 'ADDTASK':
        let task = action.payload 
            return{
            ...state,
            tasks: state.tasks.concat(task)
            }
        case 'DELETETASK':
            return{
            ...state,
            tasks: state.tasks.filter((task, index) => index !==action.payload)
            }
    }
    return state

}

export default reducer