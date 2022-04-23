import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import {DashboardRoutes} from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/login" element={
              <PublicRoutes>
                <LoginScreen/>
              </PublicRoutes>  
            } />
            <Route path="/*" element={ 
              <PrivateRoute>
                <DashboardRoutes/>
              </PrivateRoute>
            } />
            {/* <Route path="/*" element={ <DashboardRoutes/> } /> */}

        </Routes>
    </BrowserRouter>
  )
}
