import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home'
import Kelas from './page/kelas'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Preview from './page/kelas-preview'
import Login from './page/Login';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("missing published key")
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <Welcome />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <Navbar />

        <div className="p-4 sm:mx-28">
          <div className="p-4 mt-14">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/kelas' element={<Kelas />}></Route>
              <Route path="/preview/:id" element={<Preview />} />
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </div>
        </div>
      </ClerkProvider>
    </>
  )
}
function Welcome() {
  return <div>Hello you are signed in</div>;
}

export default App;
