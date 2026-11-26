"use client";

import { useId, type ComponentProps } from "react";

interface Options {
    id: string;
    name: string;
}

type Props = ComponentProps<"select"> & {
    options?: Options[];
    label?: string;
    error?: string;
};

const Select = ({
    options,
    label,
    error,
    id,
    children,
    className,
    "aria-describedby": ariaDescribedBy,
    ...selectProps
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
            <select
                {...selectProps}
                id={fieldId}
                aria-invalid={error ? true : selectProps["aria-invalid"]}
                aria-describedby={describedBy}
                className={`w-full min-w-0 rounded-ten border bg-white px-3 py-2 text-body text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:bg-main disabled:text-muted ${error ? "border-error" : "border-border"} ${className ?? ""}`}
            >
                {options
                    ? options.map((option) => (
                          <option key={option.id} value={option.id}>
                              {option.name}
                          </option>
                      ))
                    : children}
            </select>
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

export default Select;
