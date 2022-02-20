import React from 'react'
import { Routes, Route, Navigate as Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
//Routes = Switch
//Navigate = Redirect


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route exact path="/links" element={<LinksPage />} />
                <Route exact path="/create" element={<CreatePage />} />
                <Route exact path="/detail/:id" element={<DetailPage />} />
                <Route path='*' element={<Redirect to="/create" />} />
            </Routes>

        )
    }
    return (
        <Routes>
            <Route exact path="/" element={<AuthPage />} />
            <Route path='*' element={<Redirect to="/" />} />
        </Routes>

    )
}