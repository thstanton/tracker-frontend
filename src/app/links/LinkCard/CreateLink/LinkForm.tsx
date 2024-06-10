"use client";
import { useRef } from "react";
import { Destination } from "../../../../../@types/tracker-types";
import SubmitButton from "../../../../components/SubmitButton";
import { handleCreateLink, handleUpdateLink } from "./actions";
import { useFormState } from "react-dom";
import { revalidatePath } from "next/cache";

interface LinkFormProps {
  link?: Destination;
}

export default function LinkForm({ link }: LinkFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(handleSubmit, {
    success: false,
    message: "",
  });

  async function handleSubmit(prevState: any, formData: FormData) {
    if (link) {
      const result = await handleUpdateLink(formData);
      if (result.success) {
        ref.current?.reset();
      }
      return result;
    } else {
      const result = await handleCreateLink(formData);
      if (result.success) {
        ref.current?.reset();
      }
      return result;
    }
  }

  return (
    <div className="card card-bordered mb-3 border-neutral text-neutral">
      <div className="card-body">
        <h2 className="card-title font-zen font-medium">
          {link ? "Update Link" : "Create Link"}
        </h2>
        <form action={formAction} ref={ref}>
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
          {link && (
            <input
              type="text"
              placeholder="Slug"
              className="input input-bordered input-ghost mb-3 w-full border-stone-400 bg-stone-200"
              name="slug"
              defaultValue={link?.slug}
              disabled
            />
          )}
          <div className="card-actions items-center justify-end">
            <p className="text-sm text-red-500">{state.message}</p>
            <SubmitButton className="btn btn-outline">
              {link ? "Update" : "Create"}
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
