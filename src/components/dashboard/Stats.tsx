import { KpiCard } from "./KpiCard";
import { IChartDatum } from "../../interfaces";
import { GetListResponse } from "@refinedev/core";

type TStats = {
  dailyRevenue?: GetListResponse<IChartDatum>;
  dailyOrders?: GetListResponse<IChartDatum>;
  newCustomers?: GetListResponse<IChartDatum>;
  conversionRate?: GetListResponse<IChartDatum>;
  
  

};

const Stats = ({ dailyRevenue, dailyOrders, newCustomers ,conversionRate}: TStats) => {
  return (
    <div className="w-full mx-auto mb-4 flex flex-col justify-center items-stretch md:flex-row md:justify-between drop-shadow-md">
      <div className="w-full mx-auto md:flex-1 md:mr-2">
        <KpiCard
          title="Online Store Session"  
          data={dailyRevenue}
          formatTotal={(value: number | string) => ` ${value}`}
          // icon={<CurrencyDollarIcon className="h-32 w-32" />}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      </div>
      <div className="w-full mx-auto md:flex-1">
        <KpiCard
          title="Net return value"
          data={dailyOrders}
          // icon={<ShoppingCartIcon className="h-32 w-32" />}
          colors={{
            stroke: "rgb(255, 159, 64)",
            fill: "rgba(255, 159, 64, 0.2)",
          }}
        />
      </div>
      <div className="w-full mx-auto md:flex-1 md:ml-2">
        <KpiCard
          title="Total orders"
          data={newCustomers}
          // icon={<UserGroupIcon className="h-32 w-32" />}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(76, 175, 80, 0.2)",
          }}
        />
      </div>
      <div className="w-full mx-auto md:flex-1 md:ml-2">
        <KpiCard
          title="Conversion rate"
          data={newCustomers}
          // icon={<UserGroupIcon className="h-32 w-32" />}
          colors={{
            stroke: "rgb(12, 67, 00)",
            fill: "rgba(34, 17, 20, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default Stats;
