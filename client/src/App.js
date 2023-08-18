import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom';
import Header from './components/header/header';
import { useState } from 'react';

import Login from './components/account/Login';

import Contact from './components/contact/Contact';

import About from './components/About/About';

import Post from './components/create/CreatePost';

import Home from './components/home/Home';

import { DataProvider } from './context/DataProvider';



import Update from './components/create/updatePost';



const PrivateRoute=({isAuthenticated,...props})=>{
        const token=localStorage.getItem('accessToken');

        return isAuthenticated && token ? (<div><Header /> <Outlet /></div>) : <Navigate replace to='/login' />
}



const App=()=>{
        const [isAuthenticated,isUserAuthenticated]=useState(false);

        return (
                <DataProvider>
                <BrowserRouter>
                <Routes>


                        <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

                        <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                                <Route path='/' element={<Home />}  />
                        
                        </Route>
                        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                                <Route path='/create' element={<Post />}  />
                        
                        </Route>
                        <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                                <Route path='/update/:id' element={<Update />}  />
                        
                        </Route>
                        <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                                <Route path='/about' element={<About />}  />
                        
                        </Route>
                        <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                                <Route path='/contact' element={<Contact />}  />
                        
                        </Route>
                </Routes>
                
                
                </BrowserRouter>
                
                
                </DataProvider>
        )
}



export default App;