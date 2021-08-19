import Chart from "chart.js/auto";
import { useRef, useEffect, useState } from "react";

function ChartDisplay(props) {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [changeChartType, setChangeChartType] = useState(false);
  const backgroundColor = [
    "#FCD34D",
    "#818CF8",
    "#F472B6",
    "#60A5FA",
    "#34D399",
  ];
  const data = {
    labels: props.results.map((object) => {
      return object.factorname;
    }),
    datasets: [
      {
        data: props.results.map((object) => {
          return object.score;
        }),
        backgroundColor,
      },
    ],
  };

  function onBarClick(e) {
    /*
    const barClicked = chartInstance.getElementsAtEventForMode(
      e,
      "nearest",
      {
        intersect: true,
      },
      false
    );
    */

    console.log(chartInstance);
    if (chartInstance) {
      const barClicked = chartInstance.getElementsAtEventForMode(e, "nearest", {
        intersect: true,
      });
      console.log(barClicked[0]);
    }

    /*
    const barIndex = barClicked[0].index;
    console.log(barIndex);
    props.setScrollToFactorSummary(true);
    props.setWhichFactor(barIndex);
    */
  }

  let config = {
    type: "bar",
    data: data,
    options: {
      onClick: onBarClick,
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

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      setChartInstance(null);
      const myChart = new Chart(chartRef.current, config);
      setChartInstance(myChart);
      console.log(chartInstance);
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
            onClick: onBarClick,
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
            onClick: onBarClick,
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
      console.log("Destroyed chart in change chart type useeffect.");
      const myChart = new Chart(chartRef.current, config);
      setChartInstance(myChart);
    }
  }, [changeChartType]);

  function changeChart() {
    setChangeChartType(true);
  }

  return (
    <div className="flex flex-col my-5">
      <canvas id="1" ref={chartRef} />
    </div>
  );
}

export default ChartDisplay;
