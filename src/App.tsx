import { Provider } from "react-redux/es/exports"
import { Player } from "./components/Player"
import { store } from "./store"
import './styles/global.css'

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
