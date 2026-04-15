import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MyPage } from "./MyPage";
import PlayGround from "./PlayGround";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="/playground/:type" element={<PlayGround />} />
        {/* wildcard route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;