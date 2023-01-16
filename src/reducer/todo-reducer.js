export default function todoReducer(todos, action) {
    switch (action.type) {
       
        case 'added': {
         const { todo } = action;
        let arr = [...todos, todo];
            let recent = JSON.stringify(arr);
            localStorage.setItem('todoList', recent);
            return arr; 
            }   
        case 'deleted':
            // todoList에서 삭제
            // localStorage에 넣기
            // console.log('todo', todo);
            break;
        case 'updated': {
             const { todo } = action;
            console.log('todo', todo, todos);
            return todos;
        }
        case 'created':
            
            if (localStorage.todoList) {
                todos = [...JSON.parse(localStorage.todoList)];
            }
           
            return todos;
        default: throw new Error('알 수 없음');
    }

    
}