import { Provider } from "react-redux/es/exports"
import { Player } from "./components/Player"
import { store } from "./store"

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Player/>
      </Provider>
        
    </>
  )
}

export default App
