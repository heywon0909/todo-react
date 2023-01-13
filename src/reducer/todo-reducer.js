export default function todoReducer(todos, action) {
    switch (action.type) {
        case 'added':
            let { todo } = action;
            let arr = [...todos, todo];
            let recent = JSON.stringify(arr);
            localStorage.setItem('todoList', recent);
            return arr;
        case 'deleted':
            // todoList에서 삭제
            // localStorage에 넣기
            console.log('todo', todo);
            break;
        case 'updated':
            // todoList에 넣기
            // localStorage에 넣기 
               console.log('todo', todo);
            break;
        case 'created':
            
            if (localStorage.todoList) {
                todos = [...JSON.parse(localStorage.todoList)];
            }
            console.log('todos', todos);
            return todos;
        default: throw new Error('알 수 없음');
    }

    
}