import Link from "next/link";
import LoginForm from "../LoginForm/LoginForm";

export default function page() {
  return (
    <>
      <LoginForm />
      <p className="mt-3">
        <Link href={"/register"}>New here? Create an account</Link>
      </p>
    </>
  );
}
