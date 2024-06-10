import { IoLinkOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="font-zen text-9xl font-bold text-stone-300">404</h1>
      <h1 className="font-sans text-4xl font-semibold text-stone-600">
        Well this is embarassing...
      </h1>
      <p className="max-w-screen-md text-center font-sans text-lg text-neutral">
        We cannot find the page you are looking for. The link may have been
        deleted or moved from its original location.
      </p>
      <p className="font-sans text-lg text-neutral"></p>
      <div className="card card-bordered w-96 border-[1px] border-solid border-stone-400 bg-gradient-to-b from-stone-200 to-stone-300">
        <div className="card-body">
          <div className="card-title">
            <span className="text-3xl">
              <IoLinkOutline />
            </span>
            <h1 className="">What&apos;s Cliki?</h1>
          </div>
          <p>
            Cliki is an app which makes it easy to share links with shortened
            URLs and QR Codes, as well as to collect analytics when your links
            are visited.
          </p>
        </div>
      </div>
    </div>
  );
}
