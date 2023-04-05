// The Rules of JSX 
// 1. Return a single root element; in this case use div tag
//2. Close all the tags 
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.
// 3. camelCase all most of the things! 

export default function TodoList(){
    return (
        <div className="todo-list">
            <h1>Hedy Lamarr's Todos</h1>
            <img 
                src="https://i.imgur.com/yXOvdOSs.jpg" 
                alt="Hedy Lamarr" 
                class="photo"></img>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    );
}



//Why do multiple JSX tags need to be wrapped?
// JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.