// import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

// export default async function User() {
//   const supabase = createClient();

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const signOut = async () => {
//     "use server";

//     const supabase = createClient();
//     await supabase.auth.signOut();
//     return redirect("/login");
//   };

//   return (
//     session && (
//       <div className="mb-5 flex items-center gap-4 rounded-md bg-blue p-10 text-[1.5rem] text-white">
//         Hey, Admin!
//         <form action={signOut}>
//           <button className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline">
//             Logout
//           </button>
//         </form>
//       </div>
//     )
//   );
// }
