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


const axisTitleColor = "rgb(107 114 128)";
const axisTitleSize = 12;

export const elements = {
  traces: { "Temperature": element_temp, "Pressure": element_pressure, "Temperature vs pressure": element_temp_vs_pressure },
  xaxis: {
    dist: {
      title: {
        text: "distance (m)",
        font: {
          size: axisTitleSize,
          color: axisTitleColor,
        },
      }
    },
    centigrades: {
      title: {
        text: "Temperature (°C)",
        font: {
          size: axisTitleSize,
          color: axisTitleColor,
        },
      },
    },
    kPa: {
      title: {
        text: "Pressure (kPa)",
        font: {
          size: axisTitleSize,
          color: axisTitleColor,
        },
      },
    },    
  },
  yaxis: {
    centigrades: {
      title: {
        text: "Temperature (°C)",
        font: {
          size: axisTitleSize,
          color: axisTitleColor,
        },
      },
    },
    kPa: {
      title: {
        text: "Pressure (kPa)",
        font: {
          size: axisTitleSize,
          color: axisTitleColor,
        },
      },
    }
  },
  coloraxis: {
    kPa: {
      colorscale: "Portland",
      cmin: 1,
      cmax: 10,
      colorbar: {
        title: {
          text: "kPa",
          longtext: "Pressure (kPa)",
          font: {
            size: axisTitleSize,
            color: axisTitleColor,
          },
        },
        thickness: 30,
        len: 1,
        x: 1.15,
        outlinewidth: 0,
        tickmode: "auto",
        nticks: 10,
      },
    },
    centigrades: {
      cmin: 1,
      cmax: 40,
      colorbar: {
        x: 1.1,
        title: {
          text: "test",
        },
        thickness: 30,
        len: 0.4,
        outlinewidth: 0,
        tickmode: "auto",
      },
    },
  },
};
