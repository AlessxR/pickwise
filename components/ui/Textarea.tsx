"use client";

import { useId, type ComponentProps } from "react";

type Props = ComponentProps<"textarea"> & {
    label?: string;
    error?: string;
};

const Textarea = ({
    label,
    error,
    id,
    rows = 3,
    className,
    "aria-describedby": ariaDescribedBy,
    ...textareaProps
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
            <textarea
                {...textareaProps}
                id={fieldId}
                rows={rows}
                aria-invalid={error ? true : textareaProps["aria-invalid"]}
                aria-describedby={describedBy}
                className={`w-full min-w-0 resize-y rounded-ten border bg-white px-3 py-2 text-body text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:bg-main disabled:text-muted ${error ? "border-error" : "border-border"} ${className ?? ""}`}
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

export default Textarea;
