import ReactECharts from "echarts-for-react";

const Statistics = () => {
  const option = {
    title: {
      text: "Number of Cars",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 735, name: "Active" },
          { value: 580, name: "Passive" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <div>
      <ReactECharts className="max-w-sm" option={option} />
    </div>
  );
};

export default Statistics;
