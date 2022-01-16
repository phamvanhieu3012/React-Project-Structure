import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import productApi from "./api/productApi";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className="App">
      <h2>Cấu trúc Folder API</h2>
    </div>
  );
}

export default App;
