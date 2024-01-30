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
        mode: args.mode,
        marker: {
          color: dataset.pressure,
          coloraxis: "kPa",
          size: args.markersize
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
        mode: {
          type: "string",
          enum: ["lines", "lines+markers", "markers"],
        },
        markersize: {
          type: "int",
          default: 1
        }
      },
      additionalProperties: false,
    };
  },
};
