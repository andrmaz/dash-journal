import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import { getNoteListItems } from "~/models/note.server";
import { json } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json<LoaderData>({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();

  return (
    <div>
      <header>
        <h1>
          <Link to=".">Notes</Link>
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button type="submit">Logout</button>
        </Form>
      </header>

      <main>
        <div>
          <Link to="new">+ New Note</Link>

          <hr />

          {data.noteListItems.length === 0 ? (
            <p>No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink className={({ isActive }) => ``} to={note.id}>
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
