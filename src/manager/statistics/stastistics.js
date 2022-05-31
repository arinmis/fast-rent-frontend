import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    axios.get("statistics/").then((response) => {
      setStatistics(response.data);
      console.log(response.data);
    });
  }, []);
  console.log(statistics);

  const reservationStatOption = {
    title: {
      text: "Reservations",
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
          {
            value: statistics?.reservations_active,
            name: "Active",
          },
          {
            value: statistics?.reservations_passive,
            name: "Passive",
          },
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

  const carStatOption = {
    title: {
      text: "Cars",
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
          { value: statistics?.reserved_cars, name: "In Use" },
          { value: statistics?.not_reserved_cars, name: "In Garage" },
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
  window.innerWidth = 1200;
  window.innerHeight = 800;
  if (Object.keys(statistics).length === 0) return <>loading...</>;
  return (
    <div className="grid grid-cols sm:grid-cols-2 mt-5  justify-items-center gap-5 ">
      <ReactECharts className="max-w-sm" option={carStatOption} />
      <ReactECharts className="max-w-sm" option={reservationStatOption} />
    </div>
  );
};

export default Statistics;
