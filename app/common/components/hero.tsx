import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";

interface HeroProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  linkText?: string;
  linkTo?: string;
  variant?: "section" | "banner";
}

export function Hero({
  title,
  description,
  titleClassName,
  descriptionClassName,
  linkText,
  linkTo,
  variant = "section",
}: HeroProps) {
  if (variant === "banner") {
    return (
      <div className="flex flex-col py-20 justify-center items-center rounded-md bg-linear-to-t from-background to-primary/10">
        <h1 className={cn("text-5xl font-bold", titleClassName)}>{title}</h1>
        <p
          className={cn(
            "text-2xl font-light text-foreground",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2
        className={cn(
          "text-5xl font-bold leading-tight tracking-tight",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-xl font-light text-foreground",
          descriptionClassName,
        )}
      >
        {description}
      </p>
      {linkTo && linkText ? (
        <Button
          nativeButton={false}
          render={(props) => <Link {...props} to={linkTo} />}
          variant="link"
          className="p-0 text-xl text-destructive"
        >
          {linkText} &rarr;
        </Button>
      ) : null}
    </div>
  );
}
