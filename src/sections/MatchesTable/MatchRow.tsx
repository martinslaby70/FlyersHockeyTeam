import { MatchDetail } from "../../api/utils/extractFlyersMatches";
import { motion } from "framer-motion";

interface MatchRowProps {
  match: MatchDetail;
  isCompressed: boolean;
}

export const MatchRow = ({ match, isCompressed }: MatchRowProps) => {
  const [homeScoreStr, awayScoreStr] = match.state.split(":");
  const homeScore = parseInt(homeScoreStr);
  const awayScore = parseInt(awayScoreStr);

  const getMatchStateColor = () => {
    if (Number.isNaN(homeScore) || Number.isNaN(awayScore)) {
      return "";
    }

    const didFlyersWon =
      match.home === "Flyers Hockey team, z.s."
        ? homeScore > awayScore
        : awayScore > homeScore;

    return didFlyersWon ? "text-green-600" : "text-red-400";
  };

  return (
    <tr
      className="bg-secondary bg-opacity-50"
      key={match.dateTime}
      id={match.dateTime}
    >
      {!isCompressed && (
        <th
          scope="row"
          className="lg:px-6 px-2 py-4 font-medium text-gray-900 whitespace-nowrap text-start"
        >
          {match.day}
        </th>
      )}
      <td className="lg:px-6 px-2 py-4">{match.dateTime}</td>
      <td
        className={`lg:px-6 py-4 ${
          match.home === "Flyers Hockey team, z.s." && "text-primary"
        }`}
      >
        {match.home}
      </td>
      <td
        className={`lg:px-6 py-4 ${
          match.away === "Flyers Hockey team, z.s." && "text-primary"
        }`}
      >
        {match.away}
      </td>
      <td className={`lg:px-6 py-4 ${getMatchStateColor()}`}>{match.state}</td>
      <td>
        <motion.button
          whileHover={{
            color: "#f0efef",
            backgroundColor: "#201F59",
            borderColor: "#201F59",
          }}
          style={{ color: "#201F59" }}
          className="p-2 rounded-lg border-[#e5e7eb] border-2"
          onClick={() => window.open(match.detail, "_blank")}
        >
          Detail
        </motion.button>
      </td>
    </tr>
  );
};
