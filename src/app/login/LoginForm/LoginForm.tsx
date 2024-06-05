"use client";
import { useFormState } from "react-dom";
import SubmitButton from "../../../components/SubmitButton";
import { handleSubmit } from "./actions";
import Link from "next/link";
import Card from "@/components/Card";

export default function LoginForm() {
  const [state, formAction] = useFormState(handleSubmit, {
    message: "",
  });

  return (
    <Card>
      <div className="card-body">
        <div className="card-title mb-3 justify-center">
          <h2 className="font-zen text-4xl font-light text-blue-950">
            WELCOME
          </h2>
        </div>
        <form action={formAction} className="flex flex-col justify-center">
          <input
            type="text"
            className="input input-bordered mb-3 w-full"
            placeholder="Email Address"
            name="email"
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
          <p className="mt-3 text-sm text-red-500">{state.message}</p>
          <p className="text-center text-sm">
            <Link href={"/login"}>
              Forgot password? Log in with magic link instead
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
}
