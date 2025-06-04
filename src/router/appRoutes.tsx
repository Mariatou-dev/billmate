import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";


export const AppRoutes: React.FC<unknown> = () => {
    const [user, setUser] = useState("");

    return (
        <Routes>
            <Route path="/" element={<Login updateLoginUser={setUser} />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}    