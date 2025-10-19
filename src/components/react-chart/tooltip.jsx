import React, { use } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Tooltipr = ({ promiseData }) => {
  const promiseAllData = use(promiseData);
  const data = promiseAllData.data;
  // procesing for chart
  const monthData = data.map((mem) => {
    const dataMonth = {
      mash: mem.month,
      members: mem.members,
      newMembers: mem.newMembers,
      revenue: mem.revenue,
    };
    return dataMonth;
  });
  console.log(monthData);
  return (
    <div>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "800px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        data={monthData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="mash" />
        <YAxis />

        <Legend />
        <Bar dataKey="members" barSize={20} fill="red" />
      </BarChart>
    </div>
  );
};

export default Tooltipr;
