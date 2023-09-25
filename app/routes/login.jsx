import { useState, useEffect } from "react";
import { json, redirect } from '@remix-run/node';
import { registerUser } from "../lib/account/login";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
export const meta = () => {
    return [
        { title: "Spicy Traders" },
        { name: "description", content: "Welcome to Spicy Traders!" },
    ];
};

export let action = async ({ request }) => {
    const formData = new URLSearchParams(await request.text());
    const username = formData.get('username');
    try {
        const user = await registerUser(username);
        return redirect('/mainPage');
    } catch (error) {
        return json({ message: 'Registration failed. Please try again.' }, { status: 400 });
    }
};

export default function login() {
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
}
