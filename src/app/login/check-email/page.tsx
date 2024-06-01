import { MdMarkEmailUnread } from "react-icons/md";

export default function page() {
  return (
    <div className="card card-bordered w-2/3 border-neutral">
      <div className="card-body">
        <div className="card-title mb-3 justify-center">
          <h2 className="font-zen text-4xl font-light text-blue-950">
            <MdMarkEmailUnread />
          </h2>
        </div>
        <p>
          We have sent a magic link to your email. Please check your inbox and
          click on the link to login.
        </p>
      </div>
    </div>
  );
}
