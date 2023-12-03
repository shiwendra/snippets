'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db"

export async function editSnippet(id:number,code:string) {
    await db.snippet.update({
        where:{id},
        data:{code}
    });
    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
    }
export async function deleteSnippet(id:number) {
      await db.snippet.delete({
        where:{id}
        });
        revalidatePath('/');
    redirect('/');}
export async function createSnippet(formState:{message:string},formData: FormData) {
    const title = formData.get("title");
    const code = formData.get("code");
    if(typeof title!=='string' || title.length<3){
      return {
        message:'Title must be longer than 2'
      }
    }
    if(typeof code!=='string' || code.length<10){
      return {
        message:'Code must be longer than 9'
      }
    }
    try {
      await db.snippet.create({
        data: {
          title,
          code,
        },
      });
    }
    catch(err:unknown){
      if(err instanceof Error){
        return{
          message: err.message
        }
      }
      else{
        return {
          message:'Something went wrong...'
        }
      }
    }
    revalidatePath('/');
    redirect("/");
  }