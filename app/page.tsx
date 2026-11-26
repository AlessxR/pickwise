import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

const addIcon = (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M12 5v14M5 12h14" />
    </svg>
);

const deleteIcon = (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" />
    </svg>
);

export default function Home() {
    return (
        <main className="flex flex-col gap-6 p-6">
            <div
                role="group"
                aria-label="Buttons"
                className="flex flex-wrap items-center gap-grid"
            >
                <Button variant="primary">Button</Button>
                <Button variant="primary">
                    {addIcon}
                    Create comparison
                </Button>
                <Button variant="secondary">Button</Button>
                <Button variant="ghost">Button</Button>
                <Button variant="destructive">Button</Button>
                <Button isLoading variant="primary">
                    Button
                </Button>
                <Button disabled>Disabled</Button>
            </div>
            <div
                role="group"
                aria-label="Icon buttons"
                className="flex flex-wrap items-center gap-grid"
            >
                <IconButton size="sm" aria-label="Create comparison">
                    {addIcon}
                </IconButton>
                <IconButton size="md" aria-label="Create comparison">
                    {addIcon}
                </IconButton>
                <IconButton size="lg" aria-label="Create comparison">
                    {addIcon}
                </IconButton>
                <IconButton variant="secondary" aria-label="Create comparison">
                    {addIcon}
                </IconButton>
                <IconButton variant="ghost" aria-label="Create comparison">
                    {addIcon}
                </IconButton>
                <IconButton
                    variant="destructive"
                    aria-label="Delete comparison"
                >
                    {deleteIcon}
                </IconButton>
                <IconButton isLoading aria-label="Creating comparison">
                    {addIcon}
                </IconButton>
                <IconButton disabled aria-label="Create comparison">
                    {addIcon}
                </IconButton>
            </div>
        </main>
    );
}
