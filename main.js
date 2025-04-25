
document.addEventListener("DOMContentLoaded", () => {
  const area = document.getElementById("heatmap-area");
  const exportBtn = document.getElementById("export-btn");
  const startTime = Date.now();
  let scrollLog = [];

  area.addEventListener("click", (e) => {
    const rect = area.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dot = document.createElement("div");
    dot.className = "heat";
    dot.style.left = (x - 30) + "px";
    dot.style.top = (y - 30) + "px";
    area.appendChild(dot);

    const clickData = {
      type: "click",
      x: Math.round(x),
      y: Math.round(y),
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    };

    saveLog(clickData);
  });

  window.addEventListener("scroll", () => {
    const scrollData = {
      type: "scroll",
      scrollY: window.scrollY,
      timestamp: new Date().toISOString()
    };
    scrollLog.push(scrollData);
  });

  exportBtn.addEventListener("click", () => {
    const endTime = Date.now();
    const sessionDuration = Math.round((endTime - startTime) / 1000);

    const baseLog = JSON.parse(localStorage.getItem("clicklog") || "[]");
    const fullLog = [
      ...baseLog,
      ...scrollLog,
      {
        type: "session",
        duration_seconds: sessionDuration,
        ended: new Date().toISOString()
      }
    ];

    const blob = new Blob([JSON.stringify(fullLog, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "interaction-log.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  function saveLog(entry) {
    let log = JSON.parse(localStorage.getItem("clicklog") || "[]");
    log.push(entry);
    localStorage.setItem("clicklog", JSON.stringify(log));
  }
});
