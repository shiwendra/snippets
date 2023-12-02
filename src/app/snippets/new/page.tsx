'use client';
import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function CreateSnippetPage() {
  const [formState,action]= useFormState(actions.createSnippet, {message:''});
  return (
    <>
      <form action={action}>
        <h1 className="font-bold m-3">Create a Snippet</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="border round p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border round p-2 w-full"
              id="code"
            />
          </div>
          {formState.message? <div className="my-2 p-2 bg-red-200 border-red-rounded rounded">
            {formState.message}</div>:null}
          <button type="submit" className="round p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
