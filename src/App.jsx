import Protected from "./components/Protected";
import StartOTP from "./components/StartOTP";

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  console.log("token" + token );
  return isLogin ? <StartOTP token={token} /> : <StartOTP />;

}

export default App;
