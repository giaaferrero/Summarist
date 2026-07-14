import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ForYou from "./pages/ForYou";
import BookDetails from "./pages/BookDetails";
import Player from "./pages/Player";
import Settings from "./pages/Settings";
import ChoosePlan from "./pages/ChoosePlan";
import Search from "./pages/Search";
import Library from "./pages/Library";

import AuthModal from "./components/AuthModal";

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
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
      </Routes>

      <AuthModal />
    </BrowserRouter>
  );
}

export default App;