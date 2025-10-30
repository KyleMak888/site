import { Card } from "@/components/ui";
import type { StatItem } from "@/types";

type StatsHighlightProps = {
  stats: StatItem[];
};

export function StatsHighlight({ stats }: StatsHighlightProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.id}
          className="bg-gradient-to-br from-gray-50 to-white p-8 text-center shadow-lg hover:shadow-xl"
        >
          <div className="mb-4 text-5xl font-bold text-primary">{stat.metric}</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">{stat.title}</h3>
          {stat.description && <p className="text-gray-600">{stat.description}</p>}
        </Card>
      ))}
    </div>
  );
}
