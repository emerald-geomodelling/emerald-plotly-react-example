export const element_temp = {
  title: (context, args) => args.dataset,
  fn: function (context, args) {
    const dataset = context[args.dataset];
    const r = dataset.radius !== undefined ? dataset.radius : dataset.x.map((x, idx) => Math.sqrt(x**2+dataset.y[idx]**2));
    return [
      {
        type: "scattergl",
        name: "temp",
        x: r,
        y: dataset.temp,
        mode: args.dataset === "model" ? "lines+markers" : "markers",
        marker: {
          color: dataset.pressure,
          coloraxis: "kPa",
        },
      },
    ];
  },
  xaxis: "dist",
  yaxis: "centigrades",
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
