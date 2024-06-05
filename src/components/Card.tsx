interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`card card-bordered w-full border-neutral md:min-w-fit md:max-w-screen-md ${className}`}
    >
      {children}
    </div>
  );
}
