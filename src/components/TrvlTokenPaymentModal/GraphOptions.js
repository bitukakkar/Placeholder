export const options = {
  chart: {
    type: "areaspline",
    backgroundColor: null,
  },
  title: {
    text: null,
  },
  legend: { enabled: false },
  credits: {
    enabled: false,
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    visible: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
        symbol: "circle",
        states: {
          hover: {
            enabled: true,
          },
        },
      },
      label: {
        connectorAllowed: false,
        style: { textOutline: 0 },
      },
    },
  },
  series: [
    {
      name: "ETH",
      data: [0, 100, 400, 800, 1200],
    },
  ],
};
