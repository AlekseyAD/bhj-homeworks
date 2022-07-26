let hasTooltip = document.getElementsByClassName("has-tooltip");
hasTooltip = Array.from(hasTooltip);

hasTooltip.forEach(function (item) {
  item.onclick = function () {
    let tooltipPlace = item.getBoundingClientRect();

    let tooltipDiv = document.querySelectorAll("div.tooltip");

    tooltipDiv.forEach(function (element) {
      if (element.classList.contains("tooltip_active")) {
        element.classList.remove("tooltip_active");
        return false;
      }
    });

    if (
      item.nextElementSibling == null ||
      item.nextElementSibling.classList.contains("tooltip") == false
    ) {
      item.insertAdjacentHTML(
        "afterend",
        '<div class="tooltip" style="left: 0; top: 0"></div>'
      );

      let tooltip = item.nextElementSibling;

      tooltip.textContent = item.getAttribute("title");

      tooltip.classList.add("tooltip_active");

      tooltip.style.top = String(tooltipPlace.bottom) + "px";
      tooltip.style.left = String(tooltipPlace.left) + "px";
      console.log(tooltip.style.left);

      return false;
    }
  };
});
