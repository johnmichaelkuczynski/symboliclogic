import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import 'katex/dist/katex.min.css';

createRoot(document.getElementById("root")!).render(<App />);
