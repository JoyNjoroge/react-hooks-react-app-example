import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <div title="time video">...</div>
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
  );
}

export default App;
