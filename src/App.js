import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
