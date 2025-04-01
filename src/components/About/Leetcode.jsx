import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";

const LeetCode = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/shrivarsha/calendar")
      .then((res) => res.json())
      .then((json) => {
        const parsedData = JSON.parse(json.submissionCalendar);
        const formattedData = Object.keys(parsedData).map((timestamp) => ({
          date: moment.unix(timestamp).format("YYYY-MM-DD"),
          count: parsedData[timestamp],
        }));
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>LeetCode Contribution Heatmap</h2>
      <CalendarHeatmap
        startDate={moment().subtract(1, "year").toDate()}
        endDate={moment().toDate()}
        values={data}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
      />
      <style>
        {`
          .color-empty { fill: #ebedf0; }
          .color-scale-1 { fill: #c6e48b; }
          .color-scale-2 { fill: #7bc96f; }
          .color-scale-3 { fill: #239a3b; }
          .color-scale-4 { fill: #196127; }
        `}
      </style>
    </div>
  );
};

export default LeetCode;
