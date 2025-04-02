
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, MousePointer, Clock, Eye } from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { time: '10:00', clicks: 12, views: 45, duration: 25 },
  { time: '11:00', clicks: 19, views: 50, duration: 30 },
  { time: '12:00', clicks: 15, views: 42, duration: 22 },
  { time: '13:00', clicks: 27, views: 58, duration: 35 },
  { time: '14:00', clicks: 24, views: 55, duration: 40 },
  { time: '15:00', clicks: 32, views: 63, duration: 45 },
  { time: '16:00', clicks: 30, views: 60, duration: 42 },
];

export default function EngagementMetricsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Engagement Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col rounded-md border p-3">
            <div className="flex items-center gap-2">
              <MousePointer className="h-4 w-4 text-theme-blue" />
              <span className="text-xs font-medium">Clicks</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">128</div>
            <div className="text-xs text-green-500">+12% from last session</div>
          </div>
          
          <div className="flex flex-col rounded-md border p-3">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-theme-purple" />
              <span className="text-xs font-medium">Views</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">483</div>
            <div className="text-xs text-green-500">+8% from last session</div>
          </div>
          
          <div className="flex flex-col rounded-md border p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-theme-green" />
              <span className="text-xs font-medium">Avg. Time</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">3:42</div>
            <div className="text-xs text-green-500">+15% from last session</div>
          </div>
        </div>
        
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
              <XAxis 
                dataKey="time" 
                stroke="#6B7280" 
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#6B7280" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                iconSize={8}
                wrapperStyle={{
                  fontSize: '12px',
                  paddingTop: '10px',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="#3B82F6" 
                activeDot={{ r: 6 }} 
                strokeWidth={2} 
              />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#8B5CF6" 
                activeDot={{ r: 6 }} 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="duration" 
                stroke="#10B981" 
                activeDot={{ r: 6 }} 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
