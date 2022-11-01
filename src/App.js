import "./App.css";
import data from "./users.json";
import netflixLogo from "./img/netflix.png";
function App() {
  return (
    <ul>
      {data.map((element, index) => {
        console.log(element);
        return (
          <div>
            <p>{element.category}</p>
            const images = [{images.array}] data.map((element)) => {}
            {element}
          </div>
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
