export type FlyersPosition = {
  place: string;
  points: string;
  maxPoints: string;
  goalsScored: string;
  goalsReceived: string;
  wins: string;
  overtimeWins: string;
  overtimeLosses: string;
  losses: string;
};

const TEAM_NAMES = ["Flyers Hockey team, z.s.", "HK Králův Dvůr"];

export function extractFlyersPosition(
  htmlContent: string
): FlyersPosition | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const rows = doc.querySelectorAll(
    "table.table-bordered.js-table-sort tbody tr"
  );
  let flyersData: FlyersPosition | null = null;

  rows.forEach((row) => {
    const teamNameCell =
      row.querySelector("td:nth-child(2)")?.textContent?.trim() ?? "";

    if (TEAM_NAMES.includes(teamNameCell)) {
      const place = getChildValue(row, 1);
      const points = getChildValue(row, 9);
      const gamesPlayed = getChildValue(row, 3);
      const wins = getChildValue(row, 4);
      const overtimeWins = getChildValue(row, 5);
      const overtimeLosses = getChildValue(row, 6);

      const losses = getChildValue(row, 7);
      const score = getChildValue(row, 8);

      const maxPoints = (parseInt(gamesPlayed) * 3).toString();

      const [goalsScored, goalsReceived] = score.split(":");

      flyersData = {
        place,
        points,
        maxPoints,
        goalsScored: goalsScored?.trim() ?? "",
        goalsReceived: goalsReceived?.trim() ?? "",
        wins,
        overtimeWins,
        overtimeLosses,
        losses,
      };
    }
  });

  return flyersData;
}

const getChildValue = (row: Element, childNumber: number) =>
  row.querySelector(`td:nth-child(${childNumber})`)?.textContent?.trim() ?? "";
