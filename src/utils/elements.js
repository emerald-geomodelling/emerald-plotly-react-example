export const fake0 = {
  title: (context, args) => "fake1",
  fn: function (context, args) {
    return [
      {
        type: "scattergl",
        x: [0, 1, 2],
        y: [0, 2, 1],
      },
    ];
  },
  xaxis: "fake",
  yaxis: "fake",
  schema: (context) => {
    return {
      type: "object",
      required: [],
      properties: {},
      additionalProperties: false,
    };
  },
};

export const fake1 = {
  title: (context, args) => "fake1",
  fn: function (context, args) {
    return [
      {
        type: "scattergl",
        name: "fake1",
        x: [0, 1, 2],
        y: [1, 0.5, 0.2],
        mode: "markers",
        marker: {
          color: [1, 2, 0],
          coloraxis: "test",
        },
      },
    ];
  },
  xaxis: "fake",
  yaxis: "fake",
  schema: (context) => {
    return {
      type: "object",
      required: ["fruit"],
      properties: {
        fruit: {
          type: "string",
          enum: ["apple", "banana", "melon"],
        },
      },
      additionalProperties: false,
    };
  },
};

export const fake2 = {
  title: (context, args) => "fake2",
  fn: function (context, args) {
    return [
      {
        type: "scattergl",
        name: "fake2",
        x: [0, 1, 2],
        y: [0.5, 0, 1],
        mode: "markers",
        marker: {
          color: [2, 3, 4],
          coloraxis: "test",
        },
      },
    ];
  },
  xaxis: "fake",
  yaxis: "fake",
  schema: (context) => {
    return {
      type: "object",
      required: ["fruit", "veggie"],
      properties: {
        fruit: {
          type: "string",
          enum: ["apple", "banana", "melon"],
        },
        veggie: {
          type: "string",
          enum: ["potatoe", "carrot"],
        },
      },
      additionalProperties: false,
    };
  },
};

export const fake3 = {
  title: (context, args) => "fake2",
  fn: function (context, args) {
    return [
      {
        type: "scattergl",
        name: "fake3",
        x: [0, 1, 2],
        y: [0.2, 2, 1.5],
      },
    ];
  },
  xaxis: "fake",
  yaxis: "fake",
  schema: (context) => {
    return {
      type: "object",
      required: ["fruit", "veggie", "land"],
      properties: {
        fruit: {
          type: "string",
          enum: ["apple", "banana", "melon"],
        },
        veggie: {
          type: "string",
          enum: ["potatoe", "carrot"],
        },
        land: {
          type: "string",
          enum: ["norway", "sweden", "denmark"],
        },
      },
      additionalProperties: false,
    };
  },
};

export const fake4 = {
  title: (context, args) => "fake2",
  fn: function (context, args) {
    return [
      {
        type: "scattergl",
        name: "fake4",
        x: [0, 1, 2],
        y: [1.2, 1.2, 1.7],
      },
    ];
  },
  xaxis: "fake",
  yaxis: "fake",
  schema: (context) => {
    return {
      type: "object",
      required: ["fruit", "veggie", "land", "color"],
      properties: {
        fruit: {
          type: "string",
          enum: ["apple", "banana", "melon"],
        },
        veggie: {
          type: "string",
          enum: ["potatoe", "carrot"],
        },
        land: {
          type: "string",
          enum: ["norway", "sweden", "denmark"],
        },
        color: {
          type: "string",
          enum: ["red", "green", "blue"],
        },
      },
      additionalProperties: false,
    };
  },
};

export default fake0;

const axisTitleColor = "rgb(107 114 128)";
const axisTitleSize = 12;

export const elements = {
  traces: { fake1: fake1, fake2: fake2, fake3: fake3 },
  xaxis: {
    xdist: {
      title: {
        text: "xdist (m)",
        font: {
          size: axisTitleSize,
          color: axisTitleColor,
        },
      },
      onClick: function (ev, context) {
        if (ev.event.button !== 0) return;
        if (ev.event.altKey || ev.event.ctrlKey || ev.event.shiftKey) return;
      },
    },
    fake: {
      title: {
        text: "fake",
      },
    },
  },
  yaxis: {
    fake: {
      title: {
        text: "fake",
      },
    },
  },
  coloraxis: {
    log10_ohmm: {
      colorscale: "Portland",
      cmin: 0,
      cmax: 4,
      colorbar: {
        title: {
          text: "Res (Ωm)",
          longtext: "Resistivity (Ωm)",
          font: {
            size: axisTitleSize,
            color: axisTitleColor,
          },
        },
        thickness: 30,
        len: 1,
        x: 1.05,
        outlinewidth: 0,
        tickmode: "array",
        tickvals: [0, 1, 2, 3, 4],
        ticktext: ["1", "10", "100", "1000", "10000"],
        logspace: true,
      },
    },
    ohmm: {
      colorscale: "Portland",
      cmin: 1,
      cmax: 10000,
      colorbar: {
        title: {
          text: "Res (Ωm)",
          longtext: "Linear resistivity (Ωm)",
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
        logspace: false,
      },
    },
    test: {
      colorbar: {
        x: 1.1,
        title: {
          text: "test",
        },
        thickness: 30,
        len: 0.4,
        outlinewidth: 0,
        tickmode: "array",
        tickvals: [1, 2, 3, 4],
        ticktext: ["1", "2", "3", "4"],
      },
    },
  },
};
