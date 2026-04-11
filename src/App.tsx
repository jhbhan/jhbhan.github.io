import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MyPage } from "./MyPage";
import PlayGround from "./PlayGround";
import { SecretPage } from "./SecretPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="/playground/:type" element={<PlayGround />} />
        <Route path="/secret" element={<SecretPage />} />
        {/* wildcard route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;