import { useState } from "react";

export default function Dashboard() {
    const token = localStorage.getItem('token');

    return(
        <>
        <h1>Dashboard</h1>
        <h2>Welcome</h2>
        <table>
            <thead>
                <tr>
                    <th>Your Urls</th>
                </tr>
                
            </thead>
            <tbody>
            <tr>
                <th></th>
            </tr>
            </tbody>
            
        </table>
        </>
    )
}