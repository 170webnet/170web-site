"use client";

import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


type FormValues = {
  search: string;
};

const BlogStandardSearchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (!data.search.trim()) {
      toast.error("Search field is required");
      return;
    }

    toast.success(`Searching for: ${data.search}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full border border-px-border dark:border-white/10 bg-white dark:bg-white/[0.06] py-3.5 pl-5 pr-14 text-[15px] text-px-black dark:text-white outline-none transition-colors placeholder:text-px-body/50 dark:placeholder:text-white/40 focus:border-px-primary"
          {...register("search", {
            required: "Search field is required",
            minLength: {
              value: 2,
              message: "Minimum 2 characters required",
            },
          })}
        />

        <button
          type="submit"
          aria-label="Search blog posts"
          className="absolute right-1.5 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-px-black text-white transition-colors hover:bg-px-primary dark:bg-white dark:text-px-black dark:hover:bg-px-primary dark:hover:text-white"
        >
          <Search size={17} />
        </button>
      </div>

      {/* validation error */}
      {errors.search && (
        <p className="mt-1.5 text-[13px] text-px-red">{errors.search.message}</p>
      )}
    </form>
  );
};

export default BlogStandardSearchForm;