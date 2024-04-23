import LoginForm from "@/app/login/LoginForm/LoginForm";
import Link from "next/link";

export default function page() {
  return (
    <>
      <LoginForm />
      <p className="mt-3">
        New here?{" "}
        <Link href="/register" className="underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
