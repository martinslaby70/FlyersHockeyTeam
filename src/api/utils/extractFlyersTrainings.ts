import { parse } from "date-fns";

export type ErrorMessage = string;
export type Training = {
  date: string;
  startTime: string;
  endTime: string;
  plocha: string;
  startDateTime: Date;
};

export function extractFlyersTrainings(
  htmlString: string
): Training[] | string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const trainings: Training[] = [];

  // Select all 'a.event' elements where the training title is "Flyers"
  const allTrainings = doc.querySelectorAll("a.event");

  allTrainings.forEach((element) => {
    const titleElement = element.querySelector("b");
    if (titleElement && titleElement.textContent?.trim() === "Flyers") {
      const timeElement = element.querySelector("small");
      const modalBodyId = element.getAttribute("data-target");
      const modalBody = modalBodyId ? doc.querySelector(modalBodyId) : null;

      const dateElement = modalBody?.querySelector(".modal-body p");
      const plochaElement = element
        .closest("tr")
        ?.querySelector(".place-name span");

      if (dateElement && timeElement && plochaElement) {
        const [date, timeRange] = dateElement.innerHTML.trim().split("<br>");
        const [startTime, endTime] = timeRange.split(" - ");

        const startDateTime = parse(
          `${date.trim()} ${startTime.trim()}`,
          "dd. MM. yyyy HH:mm",
          new Date()
        );

        trainings.push({
          date: date.trim(),
          startTime: startTime.trim(),
          endTime: endTime.trim(),
          plocha: plochaElement.textContent?.trim() || "",
          startDateTime,
        });
      }
    }
  });

  if (allTrainings.length === 0 || !allTrainings)
    return "Rozpis na tento týden není k dispozici";
  if (trainings.length === 0 && allTrainings.length > 0)
    return "Tento týden nejsou žádné tréninky Flyers";

  return trainings;
}
