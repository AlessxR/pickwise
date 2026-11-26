import type { ComponentProps, ReactElement } from "react";
import Button from "./Button";

type Props = Omit<
    ComponentProps<typeof Button>,
    "isIconOnly" | "children" | "aria-label"
> & {
    "aria-label": string;
    children: ReactElement;
};

const IconButton = ({ children, ...buttonProps }: Props) => {
    return (
        <Button {...buttonProps} isIconOnly>
            <span
                aria-hidden="true"
                className="inline-flex items-center justify-center"
            >
                {children}
            </span>
        </Button>
    );
};

export default IconButton;
