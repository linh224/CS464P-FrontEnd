const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(137, 102,210,0.8)",
  "rgba(137, 124,180, 0.8)",
  "rgba(248, 244, 218,0.8)",
  "rgba(248, 159,56, 0.8)",
  "rgba(255, 120,60, 0.8)",
  "rgba(139, 185,100, 0.8)",
  "rgba(219, 193,255, 0.8)",
  "rgba(160, 200,255, 0.8)",
  "rgba(245, 99, 132, 0.8)",
  "rgba(169, 217, 255, 0.8)",
  "rgba(31, 40, 170, 0.8)",
  "rgba(229, 222, 187, 0.8)",
  "rgba(205, 41, 150, 0.8)",
  "rgba(31, 40, 70, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

// URL to Game of Thrones API to fetch all characters
const url = "https://thronesapi.com/api/v2/Characters";

const findOcc = (charactersArr) => {
  let familyArr = [];

  charactersArr.forEach((element) => {
    console.log(element);
    if (
      element.family === "" ||
      element.family === "None" ||
      element.family === "Unkown" ||
      element.family === "Unknown"
    ) {
      element.family = element.family.replace(element.family, "None House");
    }
    // Check if family already exists in familyArr
    if (
      familyArr.some((val) => {
        return val["family"].includes(`${element["family"]}`);
      })
    ) {
      // If family exists, increment occurrence count
      familyArr.forEach((key) => {
        if (
          key["family"].includes(`${element["family"]}`) &&
          element["family"] !== ""
        ) {
          key["occurrence"]++;
        }
      });
    } else {
      // If family doesn't exist, create a new entry in familyArr
      let countFamily = {};
      countFamily["family"] = element["family"];
      countFamily["occurrence"] = 1;
      familyArr.push(countFamily);
    }
  });

  return familyArr;
};

// Render the donut chart
const renderChart = (labelArr, dataArr) => {
  const donutChart = document.querySelector(".donut-chart");
  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: labelArr,
      datasets: [
        {
          label: "My First Dataset",
          data: dataArr,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let labelArr = [];
      let dataArr = [];
      familyArr = findOcc(data);
      familyArr.forEach((result) => {
        if (result.occurrence >= 1) {
          if (
            result.family.includes("House") == false &&
            result.family !== "None"
          ) {
            result.family = result.family.replace(
              result.family,
              `House ${result.family}`
            );
          }
          labelArr.push(result.family);
          dataArr.push(result.occurrence);
        }
      });

      renderChart(labelArr, dataArr);
    })
    .catch((error) => {
      console.log(error);
      let element = document.createElement("div");
      element.textContent = "An error occured. Please try again.";
      app.append(element);
    })

    .finally(() => {});
};
fetchData(url);
