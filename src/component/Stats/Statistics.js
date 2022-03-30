import React from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Select from "react-select";

class Statistics extends React.Component {
  state = {
    averageMarks: [
      "1",
      "2",
      "3",
      "4",
      "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
      // "1",
      // "2",
      // "3",
      // "4",
      // "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
      // "1",
      // "2",
      // "3",
      // "4",
      // "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
      // "1",
      // "2",
      // "3",
      // "4",
      // "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
    ],
    studentNames: [
      "1",
      "2",
      "3",
      "4",
      "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
      // "1",
      // "2",
      // "3",
      // "4",
      // "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
      // "1",
      // "2",
      // "3",
      // "4",
      // "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
      // "1",
      // "2",
      // "3",
      // "4",
      // "5",
      // "6",
      // "7",
      // "8",
      // "9",
      // "10",
    ],
    passes: [],
    groupsId: 0,
  };
  componentDidMount() {
    (async () => {
      this.props.getGeneralStatisticsThunk();
      this.props.getGroupsThunk();
    })();
    this.averageMark();
  }
  getGroups = (e) => {
    this.setState({
      groupsId: e,
    });
  };
  // **/node_modules
  averageMark = () => {
    return this.props.generalStatistics.map((statistic, i) => {
      this.state.averageMarks.push(statistic.studentPerformanceDTO.overallGPA);
      this.state.studentNames.push(
        statistic.studentPerformanceDTO.studentDTO.surname +
          " " +
          statistic.studentPerformanceDTO.studentDTO.name
      );
      this.state.passes.push(statistic.totalNumberPasses);
    });
  };
  render() {
    const { getGroups } = this;
    const { generalStatistics } = this.props;
    const { isLoading } = this.props;
    return isLoading ? (
      <div>LOADING...</div>
    ) : (
      <div>
        {console.log(JSON.stringify(this.props.groups))}
        {console.log(this.props.generalStatistics.length)}
        {console.log(this.state.groupsId)}
        <div>
          <div className="group-name">Группа</div>
          <div className="group-select-statistic">
            <Select
              onChange={(e) => getGroups(e.value)}
              options={this.props.groups.map((m) => ({
                value: m.id,
                label: m.name,
              }))}
            />
          </div>
        </div>

        <div>
          <Bar
            className="graph"
            data={{
              labels: this.props.generalStatistics.map((statistic, i) => {
                return (
                  statistic.studentPerformanceDTO.studentDTO.surname +
                  " " +
                  statistic.studentPerformanceDTO.studentDTO.name
                );
              }),
              // labels: this.state.averageMarks,

              datasets: [
                {
                  // type: "bar",
                  // axis: "y",
                  label: "Общий средний балл",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.studentPerformanceDTO.overallGPA;
                  }),
                  // data: this.state.studentNames,
                  maxBarThickness: 30,
                  // fill: false,
                  backgroundColor: ["#1C2742"],
                },
                {
                  // type: "bar",
                  // axis: "y",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  // data: this.state.studentNames,
                  maxBarThickness: 30,

                  // fill: false,
                  backgroundColor: ["#3A405C"],
                },
                {
                  // type: "bar",
                  // axis: "y",
                  label: "Опоздания",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberLates;
                  }),
                  // data: this.state.studentNames,
                  maxBarThickness: 30,
                  // fill: false,
                  backgroundColor: ["#6F6B94"],
                },
              ],
            }}
            height={(generalStatistics.length / 5) * 600}
            // width={2000}
            plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              plugins: {
                datalabels: {
                  color: "white",
                  align: "right",
                  anchor: "start",
                  padding: "25",
                  font: {
                    size: 16,
                    family: "san-serif",
                  },
                },
              },

              indexAxis: "y",
              scales: {
                x: {
                  type: "linear",
                  min: 0,
                },
                // yAxes: [
                //   {
                //     ticks: {
                //       // beginAtZero: true,
                //       min: -1,
                //     },
                //   },
                // ],
              },
            }}
          />
        </div>
        <hr></hr>
        <div className="">
          <Bar
            data={{
              labels: this.props.generalStatistics.map((statistic, i) => {
                return (
                  statistic.studentPerformanceDTO.studentDTO.surname +
                  " " +
                  statistic.studentPerformanceDTO.studentDTO.name
                );
              }),
              datasets: [
                {
                  type: "bar",
                  axis: "x",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  fill: false,
                  backgroundColor: [
                    "#0C293B",
                    "#015AA2",
                    "#2D6082",
                    "#4F9BD0",
                    "#3A405C",
                    "#6F6B94",
                  ],

                  borderWidth: 3,
                },
                {
                  type: "line",
                  axis: "x",
                  label: "Колличество пропусков",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberPasses;
                  }),
                  fill: false,
                  backgroundColor: [
                    "#0C293B",
                    "#015AA2",
                    "#2D6082",
                    "#4F9BD0",
                    "#3A405C",
                    "#6F6B94",
                  ],

                  borderWidth: 3,
                },
              ],
            }}
            height={1200}
            width={2000}
            // plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              indexAxis: "x",
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <hr></hr>
        <div className="">
          <Radar
            data={{
              labels: this.props.generalStatistics.map((statistic, i) => {
                return (
                  statistic.studentPerformanceDTO.studentDTO.surname +
                  " " +
                  statistic.studentPerformanceDTO.studentDTO.name
                );
              }),
              datasets: [
                {
                  label: "Опоздания",
                  data: this.props.generalStatistics.map((statistic, i) => {
                    return statistic.totalNumberLates;
                  }),
                  fill: true,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgb(255, 99, 132)",
                  pointBackgroundColor: "rgb(255, 99, 132)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgb(255, 99, 132)",
                },
              ],
            }}
            height={1200}
            width={2000}
            plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              indexAxis: "x",
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Statistics;
