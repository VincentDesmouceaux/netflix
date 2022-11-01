import "./App.css";
import data from "./users.json";
import netflixLogo from "./img/netflix.png";
function App() {
  const movies = [{ category, images }];
  return (
    <ul>
      {data.map((element, index) => {
        return <> {element.movies}</>;
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
