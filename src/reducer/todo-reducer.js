export default function todoReducer(todos, action) {
    switch (action.type) {
       
        case 'added': {
            const { todo } = action;
            let arr = [...todos, todo];
            let recent = JSON.stringify(arr);
            localStorage.setItem('todoList', recent);
            return arr;
        }
        case 'deleted':{
            const { todo } = action;
            let arr = todos.filter(item => item.title !== todo.title);
            localStorage.todoList = JSON.stringify(arr);
            return arr;
            }
        case 'updated': {
             const { todo } = action;
             let arr =todos.map(item => {
                if (item.title === todo.title) {
                    return {...item,...todo}
                }else return {...item}
             })
            localStorage.todoList = JSON.stringify(arr);
            return arr;
        }
        case 'created':
            
            if (localStorage.todoList) {
                todos = [...JSON.parse(localStorage.todoList)];
            }
           
            return todos;
        default: throw new Error('알 수 없음');
    }

    
}