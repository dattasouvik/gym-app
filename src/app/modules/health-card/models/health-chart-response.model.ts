import { Pager } from "src/app/models/pager.model";
import { HealthChartDetails }
from "src/app/modules/health-card/models/health-chart-details.model";

export interface HealthChartResponse {
  rows:HealthChartDetails[];
  pager: Pager;
}
