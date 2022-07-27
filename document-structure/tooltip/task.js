let hasTooltip = document.getElementsByClassName("has-tooltip");
hasTooltip = Array.from(hasTooltip);

hasTooltip.forEach((item) => {
  const tooltipDiv = document.createElement("div");
  tooltipDiv.innerText = `${item.title}`;
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let tooltipPlace = item.getBoundingClientRect();
    tooltipDiv.setAttribute("id", "idr");
    tooltipDiv.classList.add("tooltip");
    tooltipDiv.setAttribute(
      `style`,
      `left: ${tooltipPlace.left + 10}px; top: ${tooltipPlace.top + 22}px`
    );
    item.insertAdjacentElement("afterend", tooltipDiv);
    const tooltipActive = Array.from(
      document.querySelectorAll(".tooltip_active")
    );
    const findItemActive = tooltipActive.find((tooltipDiv) =>
      tooltipDiv.classList.contains("tooltip_active")
    );

    if (findItemActive === undefined) {
      tooltipDiv.classList.add("tooltip_active");
    } else {
      findItemActive.classList.remove("tooltip_active");
    }
  });
});

// hasTooltip.forEach(function (item) {
//   item.onclick = function () {
//     let tooltipPlace = item.getBoundingClientRect();
//     let tooltipDiv = document.querySelectorAll("div.tooltip");
//     tooltipDiv.forEach(function (element) {
//       if (element.classList.contains("tooltip_active")) {
//         element.classList.remove("tooltip_active");
//         return false;
//       }
//     });
//     if (
//       item.nextElementSibling == null ||
//       item.nextElementSibling.classList.contains("tooltip") == false
//     ) {
//       item.insertAdjacentHTML(
//         "afterend",
//         '<div class="tooltip" style="left: 0; top: 0"></div>'
//       );
//       let tooltip = item.nextElementSibling;
//       tooltip.textContent = item.getAttribute("title");
//       tooltip.classList.add("tooltip_active");
//       tooltip.style.top = String(tooltipPlace.bottom) + "px";
//       tooltip.style.left = String(tooltipPlace.left) + "px";
//       console.log(tooltip.style.left);
//       return false;
//     }
//   };
// });
