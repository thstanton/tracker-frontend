"use client";
import { useFormState } from "react-dom";
import SubmitButton from "../../../components/SubmitButton";
import { handleSubmit } from "./actions";

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
    <div className="card card-bordered w-2/3 border-neutral">
      <div className="card-body">
        <div className="card-title mb-3 flex-col justify-center">
          <h2 className="font-zen text-4xl font-light text-blue-950">
            WELCOME
          </h2>
          <p className="text-sm">
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
          <SubmitButton className="btn btn-outline">Next</SubmitButton>
          <p className="mt-3 text-sm text-red-500">{state?.message}</p>
        </form>
      </div>
    </div>
  );
}
