import Chart from "chart.js/auto";
import { useRef, useEffect, useState } from "react";

function ChartDisplay(props) {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [changeChartType, setChangeChartType] = useState(false);
  const data = {
    labels: [
      "Extraversion",
      "Tillmötesgående",
      "Samvetsgrannhet",
      "Neuroticism",
      "Öppenhet",
    ],
    datasets: [
      {
        data: Object.values(props.results),
        backgroundColor: "#4ac232",
      },
    ],
  };

  useEffect(() => {
    let config = {
      type: "bar",
      data: data,
      options: {
        indexAxis: "x",
        plugins: {
          legend: {
            display: false,
          },
        },
        barPercentage: 0.5,
        scales: {
          y: {
            display: true,
            beginAtZero: true,
            max: 100,
            min: 0,
          },
        },
      },
    };
    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const myChart = new Chart(chartRef.current, config);
      setChartInstance(myChart);
    }
  }, [chartRef]);

  useEffect(() => {
    if (changeChartType) {
      let config;
      if (chartInstance.options.indexAxis === "x") {
        config = {
          type: "bar",
          data: data,
          options: {
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
            },
            barPercentage: 0.5,
            scales: {
              x: {
                display: true,
                beginAtZero: true,
                max: 100,
                min: 0,
              },
            },
          },
        };
      }
      if (chartInstance.options.indexAxis === "y") {
        config = {
          type: "bar",
          data: data,
          options: {
            indexAxis: "x",
            plugins: {
              legend: {
                display: false,
              },
            },
            barPercentage: 0.5,
            scales: {
              y: {
                display: true,
                beginAtZero: true,
                max: 100,
                min: 0,
              },
            },
          },
        };
      }
      setChangeChartType(false);
      chartInstance.destroy();
      const myChart = new Chart(chartRef.current, config);
      setChartInstance(myChart);
    }
  }, [changeChartType]);

  function changeChart() {
    setChangeChartType(true);
  }

  return (
    <div className="flex flex-col mt-10">
      <canvas id="1" ref={chartRef} />
      <button
        onClick={() => changeChart()}
        className="text-white my-5 mx-auto p-5 w-42 bg-blue-500"
      >
        Change chart type
      </button>
    </div>
  );
}

export default ChartDisplay;
