import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";

import "./styles/components/app.sass";

export function App() {
  return (
    <div id="portfolio">
      <h1>Felipe Miranda</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}
