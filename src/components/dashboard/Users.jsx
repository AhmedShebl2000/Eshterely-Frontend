// src/components/dashboard/Users.jsx
import { DataUsers } from "../data-users";

const users = [
  {
    id: 1,
    name: "Youssef Yasser",
    email: "test@gmail.com",
    role: "Admin",
    status: "Active",
    initials: "YY",
    reviewer: "-",
  },
  {
    id: 2,
    name: "Ahmed Shebl",
    email: "bokashalaboka@gmail.com",
    role: "Customer",
    status: "Active",
    initials: "AS",
    reviewer: "-",
  },
  {
    id: 3,
    name: "Kareem Ehab",
    email: "kareem@gmail.com",
    role: "Admin",
    status: "Active",
    initials: "KE",
    reviewer: "-",
  },
  {
    id: 4,
    name: "Mahmoud Mandour",
    email: "mahmoudmandour200015@gmail.com",
    role: "Admin",
    status: "Active",
    initials: "MM",
    reviewer: "-",
  },
];

export default function Users() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataUsers data={users} />
        </div>
      </div>
    </div>
  );
}
