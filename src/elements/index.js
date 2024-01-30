import { element_temp_vs_pressure } from "./temp_vs_pressure";
import { element_temp } from "./temp";
import { element_pressure } from "./pressure";

const axisTitleColor = "rgb(107 114 128)";
const axisTitleSize = 12;

export const elements = {
  traces: { "Temperature": element_temp,
            "Pressure": element_pressure,
            "Temperature vs pressure": element_temp_vs_pressure },
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
