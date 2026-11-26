"use client";

import { useId, type ComponentProps } from "react";

type Props = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
    error?: string;
};

const Slider = ({
    label,
    error,
    id,
    min = 0,
    max = 100,
    step = 1,
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
                    className={`text-body font-medium ${error ? "text-error" : "text-ink"}`}
                    htmlFor={fieldId}
                >
                    {label}
                </label>
            )}
            <input
                {...inputProps}
                id={fieldId}
                type="range"
                min={min}
                max={max}
                step={step}
                aria-invalid={error ? true : inputProps["aria-invalid"]}
                aria-describedby={describedBy}
                className={`w-full min-w-0 cursor-pointer accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`}
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

export default Slider;
