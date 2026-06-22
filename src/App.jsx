import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ForYou from "./pages/ForYou";
import BookDetails from "./pages/BookDetails";
import Player from "./pages/Player";
import Settings from "./pages/Settings";
import ChoosePlan from "./pages/ChoosePlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/for-you" element={<ForYou />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/choose-plan" element={<ChoosePlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;