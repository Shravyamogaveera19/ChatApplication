import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/dashboardPage/Dashboard';
import Homepage from './routes/homepage/Homepage';
import ChatPage from './routes/chatPage/ChatPage';
import RootLayout from './Layouts/rootLayout/RootLayout';
import DashBoardLayout from './Layouts/dashboardLayout/DashBoardLayout';
import SignIn from './routes/signinPage/SignIn';
import SignUpPage from './routes/signUpPage/SignUpPage';
import authService from './services/auth.service';
import { useEffect } from 'react';
import api from './api';

function App() {

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user && user.token) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path='signin' element = {<SignIn/>}/>
          <Route path='signup' element = {<SignUpPage/>}/>
          <Route path='dashboard' element={<DashBoardLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="chats/:id" element={<ChatPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
