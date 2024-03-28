import { login } from "@/lib/auth/auth.service";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
    return login(username, password);
  }
  return (
    <div className="card card-bordered border-neutral w-2/3">
      <div className="card-body">
        <div className="card-title mb-3 justify-center">
          <h2 className="text-4xl text-blue-950 font-zen font-light">WELCOME</h2>
        </div>
        <form action={handleSubmit} className="flex flex-col justify-center">
          <input
            type="text"
            className="input input-bordered mb-3 w-full"
            placeholder="Username"
            name="username"
            required
          />
          <input
            type="password"
            className="input input-bordered mb-3 w-full"
            placeholder="Password"
            name="password"
            required
          />
          <SubmitButton className="btn btn-outline">Login</SubmitButton>
        </form>
      </div>
    </div>
  );
}
