import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ValidateOTP from "./components/ValidateOTP";
import StartOTP from "./components/StartOTP";

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  const isVadlidateSuccess = true;
  console.log("token" + token );
  /* return (
    <Router>
      <Routes>
        <Route path="/start-otp" element={isLogin ? <StartOTP token={token} /> : <StartOTP />} />
        <Route path="/validate-otp" element={isVadlidateSuccess ? <ValidateOTP /> : <StartOTP />} />
      </Routes>
    </Router>
  ); */
  return isLogin ? <StartOTP token={token} /> : <StartOTP />;

}

export default App;
