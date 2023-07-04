import { Provider } from "react-redux/es/exports"
import { store } from "./store"
import { Player } from "././pages/Player"

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
