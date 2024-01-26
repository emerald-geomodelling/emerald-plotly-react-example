import React, { useState } from "react";
import { BasePlot } from "emerald-plotly-react";
import layout from "../utils/layout";
import { elements } from "../utils/elements";

const PlotContainer = () => {
  const [plotLayout, setPlotLayout] = useState(layout);

  let plot = plotLayout ? JSON.parse(JSON.stringify(plotLayout)) : null;
  let context = plotLayout;

  const setPlot = (plot) => {
    setPlotLayout(plot);
  };

  const extraMenuItems = [
    {
      icon: <ion-icon name="heart-outline"></ion-icon>,
      label: "Custom Item 1",
      onClick: () => console.log("Custom Item 1 clicked"),
    },
  ];

  return (
    <div className="w-full h-full rounded-lg border border-gray-200 p-3 bg-white shadow-sm relative">
      <div style={{ width: "100%", height: "100%" }}>
        <BasePlot
          context={context}
          plot={plot}
          setPlot={setPlot}
          elements={elements}
          additionalMenuItems={extraMenuItems}
        />
      </div>
    </div>
  );
};

export default PlotContainer;
