import "./App.css";
import data from "./users.json";
import netflixLogo from "./img/netflix.png";
function App() {
  return (
    <ul className="App">
      <header>
        <img alt="netflix" src={netflixLogo} />
      </header>
      {data.map((element, index) => {
        return (
          <>
            <p className="h1">{element.category}</p>
            <div className="carousel">
              {element.images.map((image) => {
                return <img src={image} alt=""></img>;
              })}
            </div>
          </>
        );
      })}
    </ul>
  );
}

export default App;

// const App = () => {
//   const users = ["Bastien", "Tom"];

//   return (
//     <ul>
//       {users.map((name) => {
//         return <p>{name}</p>;
//       })}
//     </ul>
//   );
// };

// export default App;
