import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const hourlyData = [
  { time: "00:00", congestion: 15, volume: 200 },
  { time: "02:00", congestion: 8, volume: 120 },
  { time: "04:00", congestion: 5, volume: 80 },
  { time: "06:00", congestion: 35, volume: 450 },
  { time: "08:00", congestion: 85, volume: 1200 },
  { time: "09:00", congestion: 92, volume: 1400 },
  { time: "10:00", congestion: 70, volume: 980 },
  { time: "12:00", congestion: 65, volume: 900 },
  { time: "14:00", congestion: 55, volume: 750 },
  { time: "16:00", congestion: 60, volume: 850 },
  { time: "17:00", congestion: 88, volume: 1350 },
  { time: "18:00", congestion: 95, volume: 1500 },
  { time: "19:00", congestion: 75, volume: 1000 },
  { time: "20:00", congestion: 45, volume: 600 },
  { time: "22:00", congestion: 25, volume: 350 },
];

const zoneData = [
  { zone: "Zone A", level: 85 },
  { zone: "Zone B", level: 62 },
  { zone: "Zone C", level: 94 },
  { zone: "Zone D", level: 41 },
  { zone: "Zone E", level: 73 },
  { zone: "Zone F", level: 28 },
];

const getBarColor = (level: number) => {
  if (level >= 80) return "hsl(0, 72%, 51%)";
  if (level >= 60) return "hsl(35, 90%, 55%)";
  return "hsl(150, 70%, 45%)";
};

const DashboardSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-12 bg-accent" />
          <span className="font-mono text-sm text-accent tracking-widest uppercase">Live Dashboard</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Congestion Analytics</h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Real-time monitoring and prediction of traffic congestion across city zones.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main chart */}
          <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">24-Hour Congestion Pattern</h3>
                <p className="text-xs text-muted-foreground font-mono">Predicted vs Historical</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-destructive/20 rounded text-xs font-mono text-destructive">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                Peak Hours
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={hourlyData}>
                <defs>
                  <linearGradient id="congestionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(185, 80%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(185, 80%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                <XAxis dataKey="time" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} />
                <YAxis tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 20%, 10%)",
                    border: "1px solid hsl(220, 15%, 18%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area type="monotone" dataKey="congestion" stroke="hsl(185, 80%, 50%)" fill="url(#congestionGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Zone levels */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-1">Zone Congestion</h3>
            <p className="text-xs text-muted-foreground font-mono mb-6">Current Levels</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={zoneData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} />
                <YAxis dataKey="zone" type="category" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} width={55} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 20%, 10%)",
                    border: "1px solid hsl(220, 15%, 18%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="level"
                  radius={[0, 4, 4, 0]}
                  fill="hsl(185, 80%, 50%)"
                  // @ts-ignore
                  shape={(props: any) => {
                    const { x, y, width, height, payload } = props;
                    return (
                      <rect x={x} y={y} width={width} height={height} rx={4} fill={getBarColor(payload.level)} />
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Avg Speed", value: "32 km/h", change: "-8%", negative: true },
            { label: "Active Sensors", value: "12,847", change: "+99.2%", negative: false },
            { label: "Incidents Today", value: "23", change: "-15%", negative: false },
            { label: "Prediction Score", value: "94.7%", change: "+2.1%", negative: false },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl font-bold font-mono text-foreground">{stat.value}</p>
              <p className={`text-xs font-mono mt-1 ${stat.negative ? "text-destructive" : "text-success"}`}>
                {stat.change} vs last week
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
