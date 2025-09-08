fetch("../Logs/crowd_log.csv")
  .then(res => res.text())
  .then(data => {
    let rows = data.split("\n").slice(1);
    let labels = [], counts = [];
    rows.forEach(row => {
      let cols = row.split(",");
      if (cols.length >= 2) {
        labels.push(cols[0]);
        counts.push(parseInt(cols[1]));
      }
    });

    new Chart(document.getElementById("crowdChart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "People Count per Hour",
          data: counts
        }]
      }
    });
  });
