import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ValidateOTP from "./components/ValidateOTP";
import StartOTP from "./components/StartOTP";
import Wallet from "./components/Wallet";

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  const isVadlidateSuccess = true;
  console.log("token" + token );
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLogin ? <StartOTP token={token} /> : <StartOTP />} />
        <Route path="/validate-otp" element={isVadlidateSuccess ? <ValidateOTP /> : <StartOTP />} />
        <Route path="/wallet" element={<Wallet /> } />
      </Routes>
    </Router>
  );
  return isLogin ? <StartOTP token={token} /> : <StartOTP />;

}

export default App;
