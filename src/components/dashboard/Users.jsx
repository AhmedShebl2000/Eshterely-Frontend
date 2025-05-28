import { useLoaderData } from "react-router";
import { DataUsers } from "../data-users";
import { getToken } from "@/utils/authHelpers";
import { useState } from "react";

export default function Users() {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  async function deleteUser(userId) {
    const token = getToken();
    const baseURL = import.meta.env.VITE_RAILWAY_PUBLIC_DOMAIN;

    try {
      const res = await fetch(`${baseURL}/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Delete failed: ${errorText}`);
      }

      await res.json();
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      console.error("Delete user error:", err);
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataUsers data={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const baseURL = import.meta.env.VITE_RAILWAY_PUBLIC_DOMAIN;
  const res = await fetch(`${baseURL}/users`, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": getToken(),
    },
  });

  const data = await res.json();

  const users = data.map((user) => ({
    id: user._id,
    name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    role: user.isAdmin ? "Admin" : "Customer",
    status: "Active",
    reviewer: "-",
  }));

  return users;
}
