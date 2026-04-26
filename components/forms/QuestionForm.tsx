"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  DefaultValues,
  FieldValue,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ROUTES from "@/constant/routes";
import { AskQuestionSchema } from "@/lib/validation";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      Tags: [],
    },
  });

  const handleCreateQuestion = () => {
    console.log();
  };

  return (
    <>
      <form
        id="form-rhf-input"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <FieldGroup className="flex w-full flex-col">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="form-rhf-input-username"
                  className="paragraph-semibold text-dark200_light800 "
                >
                  Question Title<span className="text-primary-500">*</span>
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-input-username"
                  aria-invalid={fieldState.invalid}
                  autoComplete={field.name}
                  className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription className="body-regular text-light-500 mt-2.5">
                  Be specific and imagine you're asking a question to another
                  person
                </FieldDescription>
              </Field>
            )}
          />
          <Controller
            name="content"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="form-rhf-input-username"
                  className="paragraph-semibold text-dark200_light800 "
                >
                  Detailed explaination of your problem
                  <span className="text-primary-500">*</span>
                </FieldLabel>
                Editor
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription className="body-regular text-light-500 mt-2.5">
                  Introduce the problem and expand on what you've put in your
                  title
                </FieldDescription>
              </Field>
            )}
          />
          <Controller
            name="Tags"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="form-rhf-input-username"
                  className="paragraph-semibold text-dark200_light800 "
                >
                  Tags<span className="text-primary-500">*</span>
                </FieldLabel>
                <div>
                  <Input
                    {...field}
                    id="form-rhf-input-username"
                    aria-invalid={fieldState.invalid}
                    autoComplete={field.name}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    placeholder="Add tags..."
                  />
                  tags
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription className="body-regular text-light-500 mt-2.5">
                Add upto 3 tags to describe what your question is about. You need to press enter to add a tag.
                </FieldDescription>
              </Field>
            )}
          />
        </FieldGroup>
      <div className=" flex justify-end mt-16">
          <Button
            type="submit"
            form="form-rhf-input"
            disabled={form.formState.isSubmitted}
            className="primary-gradient !text-light-900 w-fit px-5 py-1"
          >
            {" "}
            Ask a question
          </Button>
      </div>
      </form>
    </>
  );
};

export default QuestionForm;
