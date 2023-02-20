import Login from './pages/login';
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    value: 2,
  });
  return (
    <div>
      <Login data={data} />
    </div>
  );
}

export default App;
