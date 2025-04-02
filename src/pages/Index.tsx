
import { useState } from "react";
import { useRecommendations } from "@/contexts/RecommendationContext";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCcw } from "lucide-react";
import UserIntentCard from "@/components/dashboard/UserIntentCard";
import UserMoodCard from "@/components/dashboard/UserMoodCard";
import ContentCard from "@/components/dashboard/ContentCard";
import EngagementMetricsCard from "@/components/dashboard/EngagementMetricsCard";
import PlatformDistributionCard from "@/components/dashboard/PlatformDistributionCard";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { 
    recommendedContent, 
    loading, 
    refreshRecommendations,
    setUserIntent,
    setUserMood
  } = useRecommendations();

  const handleIntentChange = (intent: string, value: number) => {
    setUserIntent(intent, value);
  };
  
  const handleMoodChange = (mood: string) => {
    setUserMood(mood);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-6 md:py-8 lg:ml-64">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Real-time Context Recommendations</h1>
            <p className="text-muted-foreground">Personalized content based on intent, mood and engagement</p>
          </div>
          
          <Tabs defaultValue="recommendations">
            <TabsList>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recommendations" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <UserIntentCard onIntentChange={handleIntentChange} />
                <UserMoodCard onMoodChange={handleMoodChange} />
              </div>
              
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recommended Content</h2>
                <Button 
                  size="sm"
                  variant="outline" 
                  onClick={refreshRecommendations}
                  disabled={loading}
                  className="flex items-center gap-1"
                >
                  <RefreshCcw className="h-3.5 w-3.5" />
                  <span>Refresh</span>
                </Button>
              </div>
              
              {loading ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="rounded-lg border">
                      <Skeleton className="h-40 w-full rounded-t-lg" />
                      <div className="p-4 space-y-3">
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {recommendedContent.map((content) => (
                    <ContentCard key={content.id} content={content} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <EngagementMetricsCard />
                <PlatformDistributionCard />
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-lg font-medium">MCP Server Configuration</h3>
                <p className="mb-4 text-muted-foreground">
                  The Media Model Context Protocol (MCP) server is currently configured to provide context-aware recommendations
                  across multiple platforms. Visit <a href="https://modelcontextprotocol.io/introduction" className="text-primary underline" target="_blank" rel="noopener noreferrer">Model Context Protocol</a> for more information.
                </p>
                
                <div className="rounded-md bg-secondary p-4">
                  <pre className="text-xs overflow-auto">
                    {`{
  "server": {
    "version": "1.2.3",
    "status": "active",
    "modalities": ["text", "image", "video"],
    "languages": ["en", "es", "fr", "de", "zh"],
    "platforms": ["web", "mobile", "social"]
  },
  "context_features": {
    "intent_recognition": true,
    "mood_analysis": true,
    "engagement_tracking": true,
    "adaptive_learning": true
  }
}`}
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;
