"use client";

import { useId, type ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
    label?: string;
    error?: string;
};

const Input = ({
    label,
    error,
    id,
    type = "text",
    className,
    "aria-describedby": ariaDescribedBy,
    ...inputProps
}: Props) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const errorId = fieldId + "-error";
    const describedBy =
        [ariaDescribedBy, error ? errorId : undefined]
            .filter(Boolean)
            .join(" ") || undefined;

    return (
        <div className="flex min-w-0 flex-col gap-grid">
            {label && (
                <label
                    className="text-body font-medium text-ink"
                    htmlFor={fieldId}
                >
                    {label}
                </label>
            )}
            <input
                {...inputProps}
                id={fieldId}
                type={type}
                aria-invalid={error ? true : inputProps["aria-invalid"]}
                aria-describedby={describedBy}
                className={`h-11 w-full min-w-0 rounded-ten border bg-white px-3 text-body text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:bg-main disabled:text-muted ${error ? "border-error" : "border-border"} ${className ?? ""}`}
            />
            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className="text-caption text-error"
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
