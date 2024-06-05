"use client";
import { useFormState } from "react-dom";
import SubmitButton from "../../../components/SubmitButton";
import { handleSubmit } from "./actions";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import Card from "@/components/Card";

interface EmailFormProps {
  error?: string;
}

export default function EmailForm({ error }: EmailFormProps) {
  const [state, formAction] = useFormState(handleSubmit, {
    message:
      error === "true"
        ? "Your magic link has expired, please request a new one"
        : "",
  });

  return (
    <Card>
      <div className="card-body">
        <div className="card-title mb-3 flex-col justify-center">
          <h2 className="font-zen text-4xl font-light text-blue-950">
            WELCOME
          </h2>
          <p className="text-center font-sans text-sm font-normal">
            Please enter your email address to get started
          </p>
        </div>
        <form action={formAction} className="flex flex-col justify-center">
          <input
            type="text"
            className="input input-bordered mb-3 w-full"
            placeholder="Email Address"
            name="email"
            required
          />
          <SubmitButton className="btn btn-outline">
            <IoMailOutline />
            Send Magic Link
          </SubmitButton>
          <p className="mt-3 text-sm text-red-500">{state?.message}</p>
          <p className="text-center text-sm">
            <Link href={"/login/password"}>Log in with password instead</Link>
          </p>
        </form>
      </div>
    </Card>
  );
}
