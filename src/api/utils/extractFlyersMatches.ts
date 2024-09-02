import { parse, format, isSameMonth, differenceInDays } from "date-fns";

export type MatchDetail = {
  day: string;
  dateTime: string;
  home: string;
  away: string;
  state: string;
  detail: string;
};

export function extractFlyersMatches(htmlContent: string): MatchDetail[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const rows = doc.querySelectorAll("table.custom-table tbody tr");
  const matches: MatchDetail[] = [];

  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");

    if (columns.length > 0) {
      const day = columns[1]?.textContent?.trim() ?? "";
      const dateText = columns[2]?.textContent?.trim() ?? "";
      const time = columns[3]?.textContent?.trim() ?? "";
      const home = columns[8]?.textContent?.trim() ?? "";
      const away = columns[9]?.textContent?.trim() ?? "";
      const stateText = columns[10]?.textContent?.trim() ?? "";

      const detailLinkElement = columns[13]?.querySelector("a");
      const detailLink = detailLinkElement
        ? detailLinkElement.getAttribute("href") ?? ""
        : "";

      const formattedDateTime = formatDateTime(dateText, time);
      const state = stateText === "Nový" ? "-" : stateText;

      matches.push({
        day,
        dateTime: formattedDateTime,
        home,
        away,
        state,
        detail: `https://zapasy.ceskyhokej.cz${detailLink}`,
      });
    }
  });

  return matches;
}

function formatDateTime(dateText: string, time: string): string {
  // Split the date range into individual dates
  const dateRange = dateText.split(" - ");

  if (dateRange.length === 1) {
    // Single date case
    const parsedDate = parse(dateRange[0].trim(), "d.M.yyyy", new Date());
    return `${format(parsedDate, "d. M. yyyy")} ${time}`;
  }

  // Parse both dates
  const startDate = parse(dateRange[0].trim(), "d.M.yyyy", new Date());
  const endDate = parse(dateRange[1].trim(), "d.M.yyyy", new Date());

  if (
    isSameMonth(startDate, endDate) &&
    differenceInDays(endDate, startDate) === 1
  ) {
    // Format for same month and consecutive days
    const formattedDate = `(${format(startDate, "d.")}/${format(
      endDate,
      "d."
    )}) ${format(startDate, "M. yyyy")}`;
    return `${formattedDate} ${time}`;
  } else {
    // Format for different months or non-consecutive days
    const formattedDate = `(${format(startDate, "d. M.")}/${format(
      endDate,
      "d. M."
    )}) ${format(endDate, "yyyy")}`;
    return `${formattedDate} ${time}`;
  }
}
