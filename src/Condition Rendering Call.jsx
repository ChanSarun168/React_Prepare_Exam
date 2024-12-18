import { createRoot } from "react-dom/client";
import './khmer.css';
import ColorForTheDay from './Condition Rendering';

createRoot(document.getElementById('color-container1')).render(<ColorForTheDay day="Sunday"/>)
createRoot(document.getElementById('color-container2')).render(<ColorForTheDay day="Monday"/>)
createRoot(document.getElementById('color-container3')).render(<ColorForTheDay day="Tuesday"/>)
createRoot(document.getElementById('color-container4')).render(<ColorForTheDay day="Wednesday"/>)
createRoot(document.getElementById('color-container5')).render(<ColorForTheDay day="Thursday"/>)
createRoot(document.getElementById('color-container6')).render(<ColorForTheDay day="Friday"/>)
createRoot(document.getElementById('color-container7')).render(<ColorForTheDay day="Saturday"/>)