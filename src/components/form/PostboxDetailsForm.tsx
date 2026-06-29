"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  website?: string;
  comment: string;
  remember: boolean;
};

const fieldClass =
  "w-full rounded-xl border border-px-border dark:border-white/10 bg-white dark:bg-white/[0.06] px-4 py-3 text-[15px] text-px-black dark:text-white outline-none transition-colors placeholder:text-px-body/50 dark:placeholder:text-white/40 focus:border-px-primary";
const labelClass = "mb-2 block text-[13px] font-semibold text-px-black dark:text-white";
const errorClass = "mt-1.5 block text-[13px] text-px-red";

const PostboxDetailsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    toast.success("Comment submitted successfully!");
    reset();
  };

  return (
    <div className="rounded-[24px] border border-px-border dark:border-white/10 p-7 md:p-9">
      <h3 className="text-[1.8rem] font-bold tracking-tight text-px-black dark:text-white">Leave a Reply</h3>
      <p className="mt-2 text-[15px] text-px-body dark:text-white/65">
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {/* Name */}
          <div className="col-span-12 md:col-span-6">
            <label htmlFor="name" className={labelClass}>Name *</label>
            <input
              id="name"
              type="text"
              className={fieldClass}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className={errorClass}>{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className={labelClass}>Email *</label>
            <input
              id="email"
              type="email"
              className={fieldClass}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              })}
            />
            {errors.email && <span className={errorClass}>{errors.email.message}</span>}
          </div>

          {/* Website */}
          <div className="col-span-12">
            <label htmlFor="website" className={labelClass}>Website</label>
            <input id="website" type="text" className={fieldClass} {...register("website")} />
          </div>

          {/* Comment */}
          <div className="col-span-12">
            <label htmlFor="comment" className={labelClass}>Comment *</label>
            <textarea
              id="comment"
              rows={6}
              className={`${fieldClass} resize-none`}
              {...register("comment", {
                required: "Comment is required",
                minLength: { value: 10, message: "Minimum 10 characters required" },
              })}
            />
            {errors.comment && <span className={errorClass}>{errors.comment.message}</span>}
          </div>
        </div>

        {/* Remember */}
        <label htmlFor="remember" className="mt-6 flex cursor-pointer items-center gap-3 text-[14px] text-px-body dark:text-white/65">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 shrink-0 rounded border-px-border dark:border-white/10 text-px-primary accent-px-primary"
            {...register("remember")}
          />
          Save my name, email, and website in this browser for the next time I comment.
        </label>

        {/* Submit */}
        <button
          type="submit"
          aria-label="Post comment"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-px-black dark:bg-white px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.12em] text-white dark:text-px-black transition-colors hover:bg-px-primary dark:hover:bg-px-primary dark:hover:text-white"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default PostboxDetailsForm;
