
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip 
} from "recharts";

const data = [
  { name: "Web", value: 45, color: "#3B82F6" },
  { name: "Mobile", value: 30, color: "#8B5CF6" },
  { name: "Social", value: 25, color: "#EC4899" },
];

export default function PlatformDistributionCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Platform Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-48 items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Content Distribution']}
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                iconType="circle"
                iconSize={8}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-md border p-2">
            <Badge className="bg-blue-600 px-3 py-0.5">Web</Badge>
            <span className="mt-1 text-lg font-semibold">45%</span>
          </div>
          <div className="flex flex-col items-center rounded-md border p-2">
            <Badge className="bg-purple-600 px-3 py-0.5">Mobile</Badge>
            <span className="mt-1 text-lg font-semibold">30%</span>
          </div>
          <div className="flex flex-col items-center rounded-md border p-2">
            <Badge className="bg-pink-600 px-3 py-0.5">Social</Badge>
            <span className="mt-1 text-lg font-semibold">25%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
