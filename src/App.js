// in src/App.js
import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import AssignmentIcon from "@material-ui/icons/Assignment";

import { BeerList } from "./beerList";

import dataProvider from "./dataProvider";

// const dataProvider = jsonServerProvider("http://localhost:4000/admin");
console.log("::::::::dataProvider::::::", dataProvider);
const App = () => (
  <Admin
    dataProvider={dataProvider}
    // dashboard={Dashboard}
  >
    <Resource name="beerlist" list={BeerList} icon={AssignmentIcon} />
  </Admin>
);

export default App;
