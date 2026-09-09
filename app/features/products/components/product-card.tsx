import { Link } from "react-router";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  votesCount: number;
}

export function ProductCard({
  id,
  name,
  description,
  commentsCount,
  viewsCount,
  votesCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block w-full">
      <Card className="flex min-h-28 w-full flex-row items-stretch justify-between bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="min-w-0 flex-1 content-center justify-items-start text-left">
          <CardTitle className="w-full text-left text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{commentsCount}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <div className="flex shrink-0 items-center justify-center px-5">
          <div className="flex min-w-12 flex-col items-center justify-center gap-1 rounded-lg border border-border px-3 py-2 font-medium">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{votesCount}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
