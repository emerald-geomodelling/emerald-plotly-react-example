export const element_pressure = {
  title: (context, args) => args.dataset,
  fn: function (context, args) {
    const dataset = context[args.dataset];
    const r = dataset.radius !== undefined ? dataset.radius : dataset.x.map((x, idx) => Math.sqrt(x**2+dataset.y[idx]**2));
    return [
      {
        type: "scattergl",
        name: "pressure",
        x: r,
        y: dataset.pressure,
        mode: args.dataset === "model" ? "lines+markers" : "markers",
        marker: {
          color: dataset.temp,
          coloraxis: "centigrades",
        },
      },
    ];
  },
  xaxis: "dist",
  yaxis: "kPa",
  schema: (context) => {
    return {
      type: "object",
      required: ["dataset"],
      properties: {
        dataset: {
          type: "string",
          enum: ["model", "measurement"],
        },
      },
      additionalProperties: false,
    };
  },
};
