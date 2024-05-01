import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/login");
  }

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const supabase = createClient();

    if (password !== confirmPassword) {
      return redirect("/signup?message=Passwords do not match");
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/signup?message=Could not authenticate user");
    }

    return redirect(
      `/confirm?message=Check email(${email}) to continue sign in process`
    );
  };

  return (
    <div>
      <div className="mx-auto mt-4 w-full px-8 sm:max-w-md">
        <form
          className="mb-4 flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in"
          action={signUp}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="mb-2 rounded-md bg-indigo-700 px-4 py-2 text-foreground">
            Sign up
          </button>

          {searchParams?.message && (
            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/signup"
          className="rounded-md text-sm text-foreground no-underline"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}
