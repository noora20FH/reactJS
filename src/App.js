// A file can have no more than one default export, but it can have as many named exports as you like.
// There are two primary ways to export values with JavaScript: default exports and named exports.

// People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values. 
// Regardless of which coding style you prefer, always give meaningful names to your component functions and the files that contain them. 
// Components without names, like export default () => {}, are discouraged because they make debugging harder.

// Imports Profile as a named import called Profile from Gallery.js.
// Imports Gallery as a default import from Gallery.js.
// Exports the root App component as a default export.
import './App.css';
// import Gallery from './Gallery.js';
// import { Profile } from './Gallery.js';
import Hello from './components/Hello';
import TodoList from './components/Todo';

export default function App() {
  return (
    // <Gallery />
    // <Profile />
    // <Hello />
    <TodoList />
  );
}




