"use client";
import { handleSubmit } from "./actions";
import SubmitButton from "../../../components/SubmitButton";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function RegistrationForm() {
  const [state, formAction] = useFormState(handleSubmit, initialState);
  return (
    <div className="card card-bordered w-2/3 border-neutral">
      <div className="card-body">
        <div className="card-title mb-3 flex-col justify-center">
          <h2 className="font-zen text-4xl font-light text-blue-950">
            CREATE ACCOUNT
          </h2>
          <p className="text-sm">
            Looks like you don&apos;t have an account with us yet. Please create
            one here.
          </p>
        </div>
        <form action={formAction} className="flex flex-col justify-center">
          <input
            className="input input-bordered mb-3 w-full"
            placeholder="Email"
            name="email"
          />
          <input
            type="password"
            className="input input-bordered mb-3 w-full"
            placeholder="Password"
            name="password"
          />
          <input
            type="password"
            className="input input-bordered mb-3 w-full"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <SubmitButton className="btn btn-outline">Register</SubmitButton>
          <p aria-live="polite" className="mt-3 text-sm text-red-700">
            {state?.message}
          </p>
        </form>
      </div>
    </div>
  );
}
