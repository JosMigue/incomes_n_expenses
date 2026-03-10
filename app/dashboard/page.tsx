'use server'
import { auth, signOut } from "../lib/db/auth";

export default async function Page() {

  const session = await auth();

  return (
    <>
      {session?.user?.name ? (
        <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6 gap-6">

          <h1 className="text-3xl text-white">
            Welcome, {session.user.name}!
          </h1>

          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/auth/login" })
            }}
          >
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Out
            </button>
          </form>

        </div>
      ) : (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-6">
          <h1 className="text-3xl text-white">You are not logged in.</h1>
        </div>
      )}
    </>
  );
}