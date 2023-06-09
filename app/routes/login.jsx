import { useState, useEffect } from "react";
import { json, redirect } from '@remix-run/data';
import { registerUser } from "../lib/account/login";

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
        const user = await registerUser(password);
        return redirect('/mainPage');
    } catch (error) {
        console.error('User registration failed:', error);
        return json({ message: 'Registration failed. Please try again.' }, { status: 400 });
    }
};

export default function Index() {
    const [user, setUser] = useState('');
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <form method="post" action="/signup">
                <p>Create a new Corporation</p>
                <input name="username" required maxLength={15} type='text' onChange={e => setUser(e.target.value)} />
                <button type="submit">Register</button>
            </form>

        </div>
    );
}
