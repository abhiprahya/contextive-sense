
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, 
  LayoutDashboard, 
  Settings, 
  User, 
  LineChart, 
  PieChart, 
  Smile, 
  Target,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isOpen, setIsOpen]);

  // Effect to handle body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [isMobile, isOpen]);

  return (
    <>
      {/* Overlay when sidebar is open on mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />
      )}
      
      <aside
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r bg-card transition-transform duration-300 ease-in-out",
          isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0",
          "flex flex-col"
        )}
      >
        <ScrollArea className="flex-1 py-6">
          <nav className="grid gap-2 px-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Navigation</h2>
            
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link to="/">
                <Home className="h-5 w-5" />
                Overview
              </Link>
            </Button>
            
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link to="/dashboard">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            </Button>

            <h2 className="mt-6 mb-2 px-4 text-lg font-semibold tracking-tight">Context</h2>
            
            <Button variant="ghost" className="justify-start gap-2">
              <Smile className="h-5 w-5 text-theme-green" />
              Mood Analysis
            </Button>
            
            <Button variant="ghost" className="justify-start gap-2">
              <Target className="h-5 w-5 text-theme-blue" />
              User Intent
            </Button>

            <Button variant="ghost" className="justify-start gap-2">
              <LineChart className="h-5 w-5 text-theme-purple" />
              Engagement Metrics
            </Button>

            <h2 className="mt-6 mb-2 px-4 text-lg font-semibold tracking-tight">User</h2>
            
            <Button variant="ghost" className="justify-start gap-2">
              <User className="h-5 w-5" />
              Profile
            </Button>
            
            <Button variant="ghost" className="justify-start gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </Button>
            
            <Button variant="ghost" className="justify-start gap-2">
              <HelpCircle className="h-5 w-5" />
              Help
            </Button>
          </nav>
        </ScrollArea>
        
        <div className="mt-auto border-t p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Context API</p>
              <p className="text-xs text-muted-foreground">Status: Active</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </aside>
    </>
  );
}
