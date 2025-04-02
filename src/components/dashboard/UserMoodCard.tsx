
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Smile, Frown, Meh } from "lucide-react";
import { useState } from "react";

interface UserMoodCardProps {
  onMoodChange: (mood: string) => void;
}

export default function UserMoodCard({ onMoodChange }: UserMoodCardProps) {
  const [moodIntensity, setMoodIntensity] = useState<Record<string, number>>({
    happiness: 70,
    interest: 65,
    contemplative: 45,
    bored: 20,
    frustrated: 10
  });
  
  const handleMoodChange = (mood: string) => {
    onMoodChange(mood);
  };
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">User Mood</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="trend">Trend</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="mt-4 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div 
                className="flex cursor-pointer flex-col items-center rounded-md border bg-card p-2 transition-colors hover:bg-accent"
                onClick={() => handleMoodChange("positive")}
              >
                <Smile className="h-8 w-8 text-theme-green" />
                <span className="mt-1 text-xs">Positive</span>
              </div>
              <div 
                className="flex cursor-pointer flex-col items-center rounded-md border bg-card p-2 transition-colors hover:bg-accent"
                onClick={() => handleMoodChange("neutral")}
              >
                <Meh className="h-8 w-8 text-theme-blue" />
                <span className="mt-1 text-xs">Neutral</span>
              </div>
              <div 
                className="flex cursor-pointer flex-col items-center rounded-md border bg-card p-2 transition-colors hover:bg-accent"
                onClick={() => handleMoodChange("negative")}
              >
                <Frown className="h-8 w-8 text-theme-orange" />
                <span className="mt-1 text-xs">Negative</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {Object.entries(moodIntensity).map(([mood, value]) => (
                <div key={mood} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="capitalize">{mood}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-secondary">
                    <div 
                      className={`h-full rounded-full ${
                        mood === "happiness" ? "bg-theme-green" :
                        mood === "interest" ? "bg-theme-blue" :
                        mood === "contemplative" ? "bg-theme-purple" :
                        mood === "bored" ? "bg-theme-pink" : "bg-theme-orange"
                      }`} 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trend">
            <div className="flex h-36 items-center justify-center">
              <div className="flex flex-col items-center text-muted-foreground">
                <BarChart className="h-10 w-10" />
                <p className="mt-2 text-center text-sm">Mood history trends will appear here</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
