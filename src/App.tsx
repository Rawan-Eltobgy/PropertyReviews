import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import ReviewsHome from "./pages/ReviewsHome/ReviewsHome";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReviewsHome />
      </div>
    </Provider>
  );
}

export default App;
