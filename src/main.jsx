import { createRoot } from 'react-dom/client'
import Welcoming from './Welcome.jsx'
import Greeting from './Greet.jsx'
import Presenting from './Present.jsx'
import Click from './Cllick.jsx'
import ClickParameter from './ClickParameter.jsx'
import Change from './Change.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('welcome')).render(<Welcoming />)
createRoot(document.getElementById('greet')).render(<Greeting name="Sarun" title="Web developer"/>)
createRoot(document.getElementById('presentation')).render(<Presenting name='Sarun1' title='front-end developer' />)
createRoot(document.getElementById('click')).render(<Click />)
createRoot(document.getElementById('click-parameter')).render(<ClickParameter />)
createRoot(document.getElementById('change')).render(<Change />)
