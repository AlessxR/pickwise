"use client";

import { useId, type ComponentProps } from "react";

type Props = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
    error?: string;
};

const Checkbox = ({
    label,
    error,
    id,
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
            <div className="flex items-center gap-grid">
                <input
                    {...inputProps}
                    id={fieldId}
                    type="checkbox"
                    aria-invalid={error ? true : inputProps["aria-invalid"]}
                    aria-describedby={describedBy}
                    className={`size-4 shrink-0 accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`}
                />
                {label && (
                    <label
                        className={`text-body ${error ? "text-error" : "text-ink"}`}
                        htmlFor={fieldId}
                    >
                        {label}
                    </label>
                )}
            </div>
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

export default Checkbox;
