import { Route, Routes } from 'react-router-dom';
import { FirebaseAuthContext } from './contexts/FirebaseAuthContext';
import { Account } from './pages/Account';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ProtectedRoute } from './Components/ProtectedRoute';
import './Styling/Main.scss';

export const App = () => {
  return (
    <>
      <h3 className='text-center mb-0'>
        Firebase Authentication
      </h3>
      <div className="underline mx-auto bg-warning"></div>

      <FirebaseAuthContext>
        <Routes>
          <Route
            path='/'
            element={<SignIn/>}
            />
          <Route
            path='/signup'
            element={<SignUp/>}
            />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </FirebaseAuthContext>
    </>
  )
}