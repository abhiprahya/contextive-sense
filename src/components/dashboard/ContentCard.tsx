
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ThumbsUp, MessageSquare, Share2, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  content: {
    id: string;
    title: string;
    description: string;
    image?: string;
    source: string;
    time: string;
    category: string;
    platform: string;
    engagement: number;
    confidence: number;
  };
}

export default function ContentCard({ content }: ContentCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "news": return "bg-blue-600";
      case "sports": return "bg-green-600";
      case "technology": return "bg-purple-600";
      case "entertainment": return "bg-pink-600";
      case "finance": return "bg-amber-600";
      default: return "bg-slate-600";
    }
  };
  
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "web": return "🌐";
      case "mobile": return "📱";
      case "social": return "👥";
      default: return "📄";
    }
  };
  
  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-300 hover:shadow-md",
      content.confidence > 80 ? "border-l-4 border-l-theme-green" : 
      content.confidence > 60 ? "border-l-4 border-l-theme-blue" : ""
    )}>
      <CardContent className="p-0">
        {content.image && (
          <div className="relative h-40 w-full overflow-hidden">
            <img 
              src={content.image} 
              alt={content.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 m-2 flex items-center gap-1 rounded bg-black/50 px-2 py-1 text-xs text-white">
              <Clock className="h-3 w-3" />
              {content.time}
            </div>
          </div>
        )}
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <Badge className={cn("px-2 py-0.5", getCategoryColor(content.category))}>
              {content.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{getPlatformIcon(content.platform)}</span>
              <span>{content.platform}</span>
            </div>
          </div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium leading-tight">{content.title}</h3>
          <p className="mb-2 line-clamp-2 text-xs text-muted-foreground">{content.description}</p>
          <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
            <span>{content.source}</span>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              <span>Match: {content.confidence}%</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-card/80 p-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ThumbsUp className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bookmark className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
