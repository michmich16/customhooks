import { useState } from "react";
import { useFetch } from "./useFetch";

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos/2");
  const {data} = useFetch(url);
  console.log(data);
  
  return (
    <div>
      {/* Conditionally render only if data is available */}
      <p>{data?.title || 'Loading...'}</p>
    </div>
  );
}
export default App;

