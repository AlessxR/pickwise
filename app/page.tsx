import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import IconButton from "@/components/ui/IconButton";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Slider from "@/components/ui/Slider";
import Textarea from "@/components/ui/Textarea";

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
            <section
                aria-label="Form controls"
                className="grid w-full max-w-2xl min-w-0 gap-6 sm:grid-cols-2"
            >
                <Input
                    id="name"
                    name="name"
                    placeholder="Type your name"
                    label="Name"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Type your email"
                    label="Email"
                />
                <Textarea
                    name="description"
                    label="Description"
                    placeholder="Add comparison details"
                    rows={4}
                />
                <Select
                    name="workspace"
                    label="Workspace"
                    defaultValue="personal"
                    options={[
                        { id: "personal", name: "Personal" },
                        { id: "work", name: "Work" },
                    ]}
                />
                <Checkbox
                    name="includeArchived"
                    label="Include archived comparisons"
                    defaultChecked
                />
                <Slider
                    name="weight"
                    label="Criterion weight"
                    min={0}
                    max={100}
                    step={5}
                    defaultValue={50}
                />
                <Input
                    name="invalidName"
                    label="Comparison name"
                    error="Enter a comparison name."
                    required
                />
                <Input
                    name="disabledField"
                    label="Disabled field"
                    defaultValue="Read-only example"
                    disabled
                />
            </section>
        </main>
    );
}
