import "./App.css";
import ListRow from "./components/ListRow";
import MainCard from "./components/MainCard";
import { formatCatId } from "./utils";

const cat1ImgSrc =
  "https://user-images.githubusercontent.com/3839771/103185428-c4c46e00-48ff-11eb-8b1f-2d1cda61f383.jpg";
const cat2ImgSrc =
  "https://user-images.githubusercontent.com/3839771/103185434-c726c800-48ff-11eb-8312-38cd1bf3d707.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Cats</h1>
      <MainCard id={formatCatId("1aa")} imgSrc={cat1ImgSrc} />
      <ul>
        <ListRow id={formatCatId("1aa")} imgSrc={cat1ImgSrc} />
        <ListRow id={formatCatId("2bb")} imgSrc={cat2ImgSrc} />
      </ul>
    </div>
  );
}

export default App;
