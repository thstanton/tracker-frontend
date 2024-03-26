import SubmitButton from "../SubmitButton";
import { handleCreateLink } from "./actions";

export default function CreateLinkForm() {
  
  return (
    <div className="card card-bordered mb-3 border-neutral text-neutral">
      <div className="card-body">
        <h2 className="card-title">Create Link</h2>
        <form action={handleCreateLink}>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered mb-3 w-full"
            name="name"
          />
          <input
            type="text"
            placeholder="URL"
            className="input input-bordered mb-3 w-full"
            name="url"
          />
          <input
            type="text"
            placeholder="Slug"
            className="input input-bordered mb-3 w-full"
            name="slug"
          />
          <div className="card-actions justify-end">
            <SubmitButton className="btn btn-outline">Create</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
