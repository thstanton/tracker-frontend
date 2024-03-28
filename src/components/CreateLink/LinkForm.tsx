"use client";
import { useRef } from "react";
import { Destination } from "../../../@types/tracker-types";
import SubmitButton from "../SubmitButton";
import { handleCreateLink, handleUpdateLink } from "./actions";

interface LinkFormProps {
  link?: Destination;
}

export default function LinkForm({ link }: LinkFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="card card-bordered mb-3 border-neutral text-neutral">
      <div className="card-body">
        <h2 className="font-zen card-title font-medium">
          {link ? "Update Link" : "Create Link"}
        </h2>
        <form
          action={
            link
              ? async (formData) => {
                  await handleUpdateLink(formData);
                  ref.current?.reset();
                }
              : async (formData) => {
                  await handleCreateLink(formData);
                  ref.current?.reset();
                }
          }
          ref={ref}
        >
          <input type="hidden" name="id" defaultValue={link?.id} />
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-ghost mb-3 w-full border-stone-400 bg-stone-200"
            name="name"
            defaultValue={link?.name}
          />
          <input
            type="text"
            placeholder="URL"
            className="input input-bordered input-ghost mb-3 w-full border-stone-400 bg-stone-200"
            name="url"
            defaultValue={link?.url}
          />
          <input
            type="text"
            placeholder="Slug"
            className="input input-bordered input-ghost mb-3 w-full border-stone-400 bg-stone-200"
            name="slug"
            defaultValue={link?.slug}
          />
          <div className="card-actions justify-end">
            <SubmitButton className="btn btn-outline">
              {link ? "Update" : "Create"}
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
