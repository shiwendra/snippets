import { Ruthie } from "next/font/google";
import { redirect } from "next/navigation";
import { db } from "@/db";

export default function CreateSnippetPage() {
  async function CreateSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    redirect("/");
  }
  return (
    <>
      <form action={CreateSnippet}>
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
          <button type="submit" className="round p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
