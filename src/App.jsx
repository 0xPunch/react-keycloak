import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import StartOTP from "./components/StartOTP";
import ValidateOTP from "./components/ValidateOTP";
import Wallet from "./components/Wallet";
import InitPayment from "./components/InitPayment";
import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  const isVadlidateSuccess = true;

  let element = useRoutes([
    { path: "/welcome", element: <Welcome /> },
    {
      path: "/start-opt",
      element: isLogin ? <StartOTP token={token} /> : <StartOTP />,
      children: [
        {
          path: "validate-otp",
          element: isVadlidateSuccess ? <ValidateOTP /> : <StartOTP />,
        },
        { path: "wallet", element: <Wallet /> },
        { path: "init-payment", element: <InitPayment /> },
      ],
    },
  ]);

  return element;

  /* (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome /> } />
        <PrivateRoute path="/" element={isLogin ? <StartOTP token={token} /> : <StartOTP />} />
        <PrivateRoute path="/validate-otp" element={isVadlidateSuccess ? <ValidateOTP /> : <StartOTP />} />
        <PrivateRoute path="/wallet" element={<Wallet /> } />
        <PrivateRoute path="/init-payment" element={<InitPayment /> } />
      </Routes>
    </Router>
  ); */
}

export default App;
