"use client";
import { createPost } from "@/actions/createPost";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useServerActionMutation } from "@/lib/zsa.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(5, "Le titre doit contenir au moins 5 caractères"),
  content: z
    .string()
    .min(10, "Le contenu doit contenir au moins 10 caractères"),
});

type PostFormData = z.infer<typeof postSchema>;

const CreatePostForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const { isPending, mutate } = useServerActionMutation(createPost, {
    onSuccess: () => {
      toast.success("Post créé avec succès");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      reset();
    },
    onError: (err) => {
      toast.error("Une erreur est survenue");
      console.error(err.message);
    },
  });

  const onSubmit = async (data: PostFormData) => {
    await mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Titre
        </label>
        <Input id="title" {...register("title")} disabled={isPending} />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Contenu
        </label>
        <textarea
          id="content"
          {...register("content")}
          disabled={isPending}
          className="focus:ring-opacity/50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
          rows={4}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Création..." : "Créer"}
      </Button>
    </form>
  );
};

export default CreatePostForm;
