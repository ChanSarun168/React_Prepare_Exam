import { createRoot } from "react-dom/client";
import './khmer.css'
import Clock from "./Component Life Cycle.jsx";

createRoot(document.getElementById('clock-container')).render(<Clock/>);