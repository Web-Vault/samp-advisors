import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground max-w-2xl",
          align === "center" ? "mx-auto" : "mx-0"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
