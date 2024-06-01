import EmailForm from "./EmailForm/EmailForm";

interface LoginPageProps {
  searchParams?: {
    error?: string;
  };
}

export default function page({ searchParams }: LoginPageProps) {
  return (
    <>
      <EmailForm error={searchParams?.error} />
    </>
  );
}
