import React from "react";
import Plot from "react-plotly.js";

interface ChartProps {
  x: number[];
  y: number[];
}

const Chart = (props: ChartProps) => {
  return (
    <Plot
      data={[
        {
          x: props.x,
          y: props.y,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 640, height: 480 }}
    />
  );
};

export interface ChemChartProps {
  useDemoChromatogram: boolean;
}

const ChemChart = (props: ChemChartProps) => {
  if (props.useDemoChromatogram) {
    const chartProps: ChartProps = {
      x: [1, 2, 3, 4, 5],
      y: [10, 20, 30, 30, 10],
    };
    return <Chart {...chartProps} />;
  }
  return <div> no data </div>;
};

export default ChemChart;
