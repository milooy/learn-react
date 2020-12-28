import "./App.css";
import ListRow from "./components/ListRow";
import MainCard from "./components/MainCard";
import { formatCatId } from "./utils";

const cat1url =
  "https://user-images.githubusercontent.com/3839771/103185428-c4c46e00-48ff-11eb-8b1f-2d1cda61f383.jpg";
const cat2url =
  "https://user-images.githubusercontent.com/3839771/103185434-c726c800-48ff-11eb-8312-38cd1bf3d707.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Cats</h1>
      <MainCard id={formatCatId("1aa")} url={cat1url} />
      <ul>
        <ListRow id={formatCatId("1aa")} url={cat1url} />
        <ListRow id={formatCatId("2bb")} url={cat2url} />
      </ul>
    </div>
  );
}

export default App;
