import React, { useState } from "react";
import { BasePlot } from "emerald-plotly-react";
import layout from "../utils/layout";
import data from "../utils/data";
import { elements } from "../elements";

const extraMenuItems = [
  {
    icon: <ion-icon name="heart-outline"></ion-icon>,
    label: "Custom Item 1",
    onClick: () => console.log("Custom Item 1 clicked"),
  },
];

const PlotContainer = () => {
  const [plotLayout, setPlotLayout] = useState(layout);
  
  return (
    <div className="w-full h-full rounded-lg border border-gray-200 p-3 bg-white shadow-sm relative">
      <div style={{ width: "100%", height: "100%" }}>
        <BasePlot
          context={data}
          plot={structuredClone(plotLayout)}
          setPlot={setPlotLayout}
          elements={elements}
          additionalMenuItems={extraMenuItems}
        />
      </div>
    </div>
  );
};

export default PlotContainer;
