import Card from "@/components/Card";
import { MdMarkEmailUnread } from "react-icons/md";

export default function page() {
  return (
    <Card>
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
    </Card>
  );
}
