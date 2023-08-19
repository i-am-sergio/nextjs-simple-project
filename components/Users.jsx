// "use client";
import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}{" "}
              </h5>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20"></img>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
