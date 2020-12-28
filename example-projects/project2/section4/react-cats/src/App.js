import "./App.css";
import ListRow from "./components/ListRow";
import MainCard from "./components/MainCard";
import { formatCatId } from "./utils";
import catsData from "./catsData";

function App() {
  return (
    <div className="App">
      <h1>Cats</h1>
      <MainCard id={formatCatId(catsData[0].id)} imgSrc={catsData[0].imgSrc} />
      <ul>
        {catsData.map(function (cat) {
          return (
            <ListRow
              key={cat.id}
              id={formatCatId(cat.id)}
              imgSrc={cat.imgSrc}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
