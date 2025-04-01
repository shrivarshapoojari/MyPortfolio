 
import { useEffect, useState, useRef } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";

const LeetCode = () => {
  const [data, setData] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/shrivarsha/calendar/")
      .then((res) => res.json())
      .then((json) => {
        const parsedData = JSON.parse(json.submissionCalendar);
        const formattedData = Object.keys(parsedData).map((timestamp) => ({
          date: moment.unix(timestamp).format("YYYY-MM-DD"),
          count: parsedData[timestamp],
        }));

        const total = formattedData.reduce((sum, item) => sum + item.count, 0);
        setTotalContributions(total);
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleMouseOver = (event, value) => {
    if (!value || !containerRef.current) return;
    const rect = event.target.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const date = moment(value.date).format("MMM D, YYYY");
    const count = value.count || 0;
    const content = `${date}: ${count} ${count === 1 ? "solve" : "solves"}`;

    setTooltip({
      show: true,
      content,
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, show: false });
  };

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor: "#0d0d1a", padding: "24px", borderRadius: "8px", color: "white" }}
    >
       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        LeetCode <strong className="purple">Solves</strong>
      </h1>

      <div style={{ marginBottom: "24px", position: "relative" }}>
        <CalendarHeatmap
          startDate={moment().subtract(1, "year").toDate()}
          endDate={moment().toDate()}
          values={data}
          classForValue={(value) => (value ? `color-scale-${Math.min(value.count, 4)}` : "color-empty")}
          gutterSize={4}
          showWeekdayLabels={false}
          transformDayElement={(rect, value) => (
            <g onMouseOver={(event) => handleMouseOver(event, value)} onMouseLeave={handleMouseLeave}>
              {rect}
            </g>
          )}
        />

        {tooltip.show && (
          <div
            style={{
              position: "absolute",
              backgroundColor: "#1f2937",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              zIndex: 10,
              transform: "translate(-50%, -100%)",
              left: `${tooltip.x}px`,
              top: `${tooltip.y - 8}px`,
              pointerEvents: "none",
            }}
          >
            {tooltip.content}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
          <div style={{ fontSize: "20px" , marginTop: "10px"}}>{totalContributions} submissions last year</div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px" ,marginTop: "2px"}}>
            <span style={{marginTop:"5px" ,marginRight:"2px"}}>Less</span>
            {[ "#0e4429", "#006d32", "#26a641", "#39d353"].map((color, index) => (
              <div key={index} style={{ width: "12px", height: "12px", backgroundColor: color, borderRadius: "2px" ,marginTop: "8px"}}></div>
            ))}
              <span style={{marginTop:"9px" ,marginLeft:"4px"}}>More</span>
          </div>
        </div>
      </div>

      <style>{`
        .react-calendar-heatmap {
          width: 100%;
        }
        .react-calendar-heatmap .color-empty {
          fill: #1e2937;
        }
        .react-calendar-heatmap .color-scale-1 {
          fill: #0e4429;
        }
        .react-calendar-heatmap .color-scale-2 {
          fill: #006d32;
        }
        .react-calendar-heatmap .color-scale-3 {
          fill: #26a641;
        }
        .react-calendar-heatmap .color-scale-4 {
          fill: #39d353;
        }
        .react-calendar-heatmap rect {
          rx: 2;
          ry: 2;
          pointer-events: auto;
        }
        .react-calendar-heatmap text {
          fill: #8b949e;
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default LeetCode;
