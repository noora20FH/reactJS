// JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
// JSX and React are two separate things. They’re often used together, but you can use them independently of each other. 
// JSX is a syntax extension, while React is a JavaScript library.

//simple functional component that will render
import React from 'react'

//willreturn the html or in otherword JSX

// const Hello=()=>{
//     return(
//         <div className='dummyClass'>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

//without JSX
//use react library to create element method
//we need div tag to be rendered
const Hello=()=>{
    // minimum has 3 perametr
    //the first div tag as a string
    //second parameter is for the additional property; 
    // the third parameter is the child of html element (*this is from the div tag)
    // for each element needs createElement

    // return React.createElement('div', null,'h1','Hello Noora')
    // return React.createElement('div', null,React.createElement('h1', null,'Hello Noora'))

    //second aparam: object of key-values pairs that will be applied to the elements
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null,'Hello Noora')
    )
}
export default Hello;