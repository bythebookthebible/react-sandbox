// importing React and useState let us create our react components
import React, { useState } from 'react';

// importing this image will give us its url. The production url 
// will not be './logo.svg' but this variable will still be correct.
import logo from './logo.svg';

// This is how we can import a stylesheet to be included with
// this part of the site.
import './App.css';


// This function is the entrypoint where the code first starts.
// This function is also a React component.
function App() {
  // You can do any of the usual javascript computations here
  let faces = ['😁','🧐','🤪','🤩','🤓','😎','🤫','🥸'];

  // And you return something which can eventually be rendered to HTML
  // This is a special syntax called JSX which lets you write HMTL style
  // syntax and converts it into a React component.
  // You can also put javascript inside this JSX if it is inside curly braces
  return (
    <div className="App">
      {/* If you are writing comments inside the JSX you need to use
          the curly braces and then javascript comments */}

      {/* This is a normal HTML image, but instead of hardcoding a src
          attribute, we use the javascript variable we imported at the top. */}
      <img src={logo} className="logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>

      <p>Click on the face to change it!</p>
      {/* You can also write other React components and add them
          the same way you added the HTML components.
          In addition, you can pass properties to your React components.
          Here we pass the JS array faces as the content property, and 
          the string "face" the className property. */}
      <ClickSwap content={faces} className="face" />
    </div>
  );
}

// Here is where we define our other react component.
// The properties are passed as a javascript object into the props variable.
// We can access these with props.content and props.className
function ClickSwap(props) {
  // To have a persistant state for this component, we use
  // a React hook called useState.
  // This line creates a variable index which will initially hold the value 0.
  // It also creates a function updateIndex which can be used to chage the value
  // of index for the next time React renders this function.
  let [index, updateIndex] = useState(0);

  // we create our own function here which will cycle around the different
  // indices of props.content. We pass this function as an event handler
  // for when we click on our content.
  function nextIndex() {
    updateIndex((index + 1) % props.content.length);
  }

  return (
    // Here we pass our event handler and the class name to our div
    <div onClick={nextIndex} className={props.className} >
      {/* Because we can use JS inside our JSX it is easy to dynamically choose the correct item */}
      { props.content[index] }
    </div>
  );
}

// This is how you would export the main App function to be used by other code.
// In this case it is being used by index.js, but you could export functions from
// other files and import them into this file if you want to split up your code.
// It can be imported in another file by doing
// import App from './App';
export default App;
