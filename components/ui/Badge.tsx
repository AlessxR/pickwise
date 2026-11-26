import { ComponentProps } from "react";

type Props = {
    text: string;
    variant: "neutral" | "success" | "warning" | "error";
};

const variantClasses = {
    neutral: "bg-border/50 text-ink",
    success: "bg-green-bg text-success",
    warning: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error",
};

const Badge = ({
    text,
    variant = "neutral",
    className,
    ...badgeProps
}: Props & ComponentProps<"div">) => {
    return (
        <div
            className={`${variantClasses[variant]} inline-flex w-fit items-center rounded-full px-2 py-0.5 text-caption font-medium ${className ?? ""}`}
            {...badgeProps}
        >
            {text}
        </div>
    );
};

export default Badge;
