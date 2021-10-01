import React from "react";
import Plot from "react-plotly.js";

const ChemChart = () => {
  return (
    <div>
      hello
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [1, 2, 3],
            type: "scatter",
          },
        ]}
        layout={{ width: 320, height: 240, title: "Plot" }}
      />
    </div>
  );
};

export default ChemChart;
