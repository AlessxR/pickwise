import { ComponentPropsWithoutRef } from "react";

type Props = {
    variant?: "primary" | "secondary" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    isIconOnly?: boolean;
};

const variantClasses = {
    primary: "bg-primary text-white enabled:hover:brightness-95",
    secondary: "bg-white text-ink border border-border enabled:hover:bg-main",
    ghost: "bg-transparent text-ink enabled:hover:bg-soft",
    destructive: "bg-error text-white enabled:hover:brightness-95",
};

const sizeClasses = {
    sm: "h-9 px-3 [&_svg]:size-4",
    md: "h-11 px-4 [&_svg]:size-4",
    lg: "h-13 px-6 [&_svg]:size-5",
};

const iconSizeClasses = {
    sm: "size-9 p-0 [&_svg]:size-4",
    md: "size-11 p-0 [&_svg]:size-4",
    lg: "size-13 p-0 [&_svg]:size-5",
};

const Button = ({
    children,
    type = "button",
    disabled,
    className,
    variant = "primary",
    isLoading,
    isIconOnly = false,
    size = "md",
    ...buttonProps
}: ComponentPropsWithoutRef<"button"> & Props) => {
    return (
        <button
            type={type}
            aria-busy={isLoading}
            disabled={disabled || isLoading}
            className={`inline-flex items-center justify-center gap-grid [&_svg]:shrink-0 rounded-ten transition-[background-color,filter,opacity] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isIconOnly ? iconSizeClasses[size] : sizeClasses[size]} ${variantClasses[variant]} ${className ?? ""}`}
            {...buttonProps}
        >
            {isLoading && (
                <span
                    aria-hidden="true"
                    className="size-4 shrink-0 rounded-full border-2 border-current border-t-transparent motion-safe:animate-spin"
                />
            )}
            {isLoading ? !isIconOnly && "loading..." : children}
        </button>
    );
};

export default Button;
