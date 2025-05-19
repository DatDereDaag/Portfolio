import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
