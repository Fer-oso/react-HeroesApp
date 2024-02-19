import { AuthUserProvider } from "./context/AuthUserProvider";
import { AppRouter } from "./router/AppRouter";

function App() {

  return (
    <AuthUserProvider>
      <AppRouter/>
    </AuthUserProvider>
  )
}

export default App
