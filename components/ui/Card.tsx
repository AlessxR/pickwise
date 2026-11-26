import { ComponentProps, ReactNode } from "react";

type Props = {
    title?: string;
    variant?: "bg-main" | "bg-soft";
    children: ReactNode;
};

const Card = ({
    title,
    variant = "bg-main",
    children,
    className,
    ...cardProps
}: Props & ComponentProps<"div">) => {
    return (
        <div
            className={`flex flex-col border border-border rounded-fourteen p-6 gap-4 ${variant} ${className ?? ""}`}
            {...cardProps}
        >
            <h2 className="text-ink">{title}</h2>
            <div className="text-muted">{children}</div>
        </div>
    );
};

export default Card;
