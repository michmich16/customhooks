import { useState } from "react";
import { useFetch } from "./useFetch";
import { useImages } from "./useImages";

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos/1");
  const { data } = useFetch(url);
  const images = useImages();

  return (
    <>
      <div>
        <h1>Image Gallery</h1>
        {images.length > 0 ? (
          <ul>
            {images.map((image) => (
              <li key={image.url}>
                <img src={image.url} alt="Image" />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading images...</p>
        )}
      </div>

      <div>
        <img src={data?.image || 'loading...'} alt="" />
        <p>{data?.title || 'Loading...'}</p>
      </div>
    </>
  );
}

export default App;
