import {Routes, Route, Navigate} from "react-router"
import Landing from "./components/views/Landing/Landing"
import Home from "./components/views/Home/Home"
import Soldiers from "./components/views/Home/sections/Soldiers"
import Ships from "./components/views/Home/sections/Ships"
import Marketplace from "./components/views/Home/sections/Marketplace"
import Planets from "./components/views/Home/sections/Planets"


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="home" element={<Home />} >
          <Route index path="/home" element={<Navigate to="/home/soldiers" replace />} />
          <Route path="soldiers" element={<Soldiers />} />

          <Route path="/home/ships" element={<Ships />} />
          <Route path="/home/planets" element={<Planets />} />
          <Route path="/home/marketplace" element={<Marketplace />} />
        </Route>

      </Routes>
  );
}

export default App;
