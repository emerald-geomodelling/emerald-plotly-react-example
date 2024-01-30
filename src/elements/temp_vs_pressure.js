export const element_temp_vs_pressure = {
  title: (context, args) => args.dataset,
  fn: function (context, args) {
    const dataset = context[args.dataset];
    return [
      {
        type: "scattergl",
        x: dataset.temp,
        y: dataset.pressure,
      },
    ];
  },
  xaxis: "centigrades",
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
  }
};
