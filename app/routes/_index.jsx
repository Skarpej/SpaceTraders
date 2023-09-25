import { useState } from "react";

export const meta = () => {
  return [
      { title: "Spicy Traders" },
      { name: "description", content: "Welcome to Spicy Traders!" },
  ];
};

export default function Index() {
  const [user, setUser] = useState('');
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <p>Main Page</p>
    </div>
  );
}
