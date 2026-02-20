import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RooyaLogo from './components/RooyaLogo.js';
import SampleComponent from './components/SampleComponent.js';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/rooyalogo' element={<RooyaLogo />} />
        <Route path='/samplecomponent' element={<SampleComponent />} />
      </Routes>
    </Router>
  );
}
