
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface UserIntentCardProps {
  onIntentChange: (intent: string, value: number) => void;
}

export default function UserIntentCard({ onIntentChange }: UserIntentCardProps) {
  const [activeIntent, setActiveIntent] = useState("informational");
  const [intentValue, setIntentValue] = useState(70);
  
  const handleIntentClick = (intent: string) => {
    setActiveIntent(intent);
    onIntentChange(intent, intentValue);
  };
  
  const handleSliderChange = (value: number[]) => {
    setIntentValue(value[0]);
    onIntentChange(activeIntent, value[0]);
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">User Intent</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-4">
          <Badge 
            onClick={() => handleIntentClick("informational")}
            className={`cursor-pointer px-3 py-1 ${activeIntent === "informational" ? "bg-blue-600" : "bg-secondary hover:bg-blue-600/40"}`}
          >
            Informational
          </Badge>
          <Badge 
            onClick={() => handleIntentClick("entertainment")}
            className={`cursor-pointer px-3 py-1 ${activeIntent === "entertainment" ? "bg-purple-600" : "bg-secondary hover:bg-purple-600/40"}`}
          >
            Entertainment
          </Badge>
          <Badge 
            onClick={() => handleIntentClick("transactional")} 
            className={`cursor-pointer px-3 py-1 ${activeIntent === "transactional" ? "bg-green-600" : "bg-secondary hover:bg-green-600/40"}`}
          >
            Transactional
          </Badge>
          <Badge 
            onClick={() => handleIntentClick("navigational")}
            className={`cursor-pointer px-3 py-1 ${activeIntent === "navigational" ? "bg-orange-600" : "bg-secondary hover:bg-orange-600/40"}`}
          >
            Navigational
          </Badge>
        </div>
        
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-xs">
            <span>Intent Confidence</span>
            <span className="font-semibold">{intentValue}%</span>
          </div>
          <Slider
            defaultValue={[70]}
            max={100}
            step={1}
            value={[intentValue]}
            onValueChange={handleSliderChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}
