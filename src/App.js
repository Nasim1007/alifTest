import { observer } from "mobx-react-lite";
import { AppContext, Store } from "./store";
import TableF from "./components/TableF";

const App = observer(() => {
  return (
    <AppContext.Provider
      value={{
        posts: new Store(),
      }}
    >
      <div className="App">
        <h1 align="center">Welcome</h1>
        <TableF />
      </div>
    </AppContext.Provider>
  );
});

export default App;
