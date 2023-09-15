import React from 'react';
import './chart.scss'; 
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const reportingData = [
  { name: "January", Reports: 20 },
  { name: "February", Reports: 15 },
  { name: "March", Reports: 10 },
  { name: "April", Reports: 25 },
  { name: "May", Reports: 18 },
  { name: "June", Reports: 30 },
];

const ReportingChart = ({ aspect, title }) => {
  return (
    <div className="reporting-chart">
      <div className="chart-title">Reports</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={reportingData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="reports" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#33a3ffab" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#33a3ffab" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Reports"
            stroke="#33a3ffab"
            fillOpacity={1}
            fill="url(#reports)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportingChart;
