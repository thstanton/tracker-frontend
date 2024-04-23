"use client";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: React.ReactNode;
  className: string;
}

export default function SubmitButton({
  children,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button className={`${className} font-zen`} type="submit">
      {children}
      {pending && <span className="loading loading-spinner" />}
    </button>
  );
}
