import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Welcome from "./components/Welcome";
import StartOTP from "./components/StartOTP";
import ValidateOTP from "./components/ValidateOTP";
import Wallet from "./components/Wallet";
import InitPayment from "./components/InitPayment";
import SuccessRecived from "./components/SuccessRecived";
import SuccessSent from "./components/SuccessSent";
/* import PrivateRoute from "./components/PrivateRoute"; */

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  const isVadlidateSuccess = true;
  console.log("token" + token );
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Welcome /> } /> */}
        <Route path="/" element={isLogin ? <StartOTP token={token} /> : <StartOTP />} />
        <Route path="/validate-otp" element={isVadlidateSuccess ? <ValidateOTP /> : <StartOTP />} />
        <Route path="/wallet" element={<Wallet /> } />
        <Route path="/init-payment" element={<InitPayment /> } />
        <Route path="/success-recived" element={<SuccessRecived /> } />
        <Route path="/success-sent" element={<SuccessSent /> } />
      </Routes>
    </Router>
  );
}

export default App;
