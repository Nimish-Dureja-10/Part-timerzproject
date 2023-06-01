import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About/About';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payment/PaymentFail';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import Subscibe from './components/Payment/Subscibe';
import ChangePassword from './components/Profile/ChangePassword';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import Request from './components/Request/Request';
import toast,{Toaster} from "react-hot-toast"
import { loadUser } from './redux/actions/user';
import {ProtectedRoute} from "protected-route-react"
import Job from './components/Job/Job';
import GetJob from './components/Job/GetJob';
import JobPage from './components/Jobpage/JobPage';

function App() {

  const {isAuthenticated,user,error,message} = useSelector(state=>state.user)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }
  },[dispatch,error,message])

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return (
    <Router>
    <Header isAuthenticated={isAuthenticated} user={user} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getjobs" element={<GetJob />} />
        <Route path="/postjob" element={<Job/>} />
        <Route path="/getjobs/:id" element={<JobPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><Login /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><Register /></ProtectedRoute>} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path='/subscribe' element={<Subscibe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />
        <Route path='/profile' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile user={user} />
        </ProtectedRoute>} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
