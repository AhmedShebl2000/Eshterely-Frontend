import { BarChartInteractive } from "../BarChartInteractive";
import BarChartMultiple from "../BarChartMultiple";
import { ChartAreaInteractive } from "../chart-area-interactive";
import { LineChartLabel } from "../LineChartLabel";
import PieChartDonutwithText from "../PieChartDonutwithText";
import { RadarChartGridFilled } from "../RadarChartGridFilled";
import { SectionCards } from "../section-cards";

function Analytics() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <BarChartMultiple />
            <PieChartDonutwithText />
            <RadarChartGridFilled />
            <LineChartLabel />
          </div>
          <div className="px-4 lg:px-6">
            <BarChartInteractive />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
