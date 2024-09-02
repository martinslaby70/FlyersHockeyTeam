import { motion } from "framer-motion";
import { useGetCurrentPlaceQuery } from "../api/stadiumApi";
import { FlyersPosition } from "../api/utils/extractFlyersCurrentPlace";

const defaultData: FlyersPosition = {
  place: "Nezahájeno",
  points: "0",
  maxPoints: "0",
  goalsScored: "0",
  goalsReceived: "0",
  wins: "0",
  overtimeWins: "0",
  overtimeLosses: "0",
  losses: "0",
};

const isSeasonReady = true;

export const CurrentPlace = () => {
  const { data, refetch } = useGetCurrentPlaceQuery({
    year: "2024",
  });

  const currentPosition = isSeasonReady ? data : defaultData;

  return (
    <div className="h-full relative">
      <div className="lg:sticky top-16">
        <h2 className="text-primary">Aktuální umístění</h2>
        <div
          className="bg-secondary rounded-3xl w-full h-[400px] p-4 mb-4"
          style={{
            boxShadow:
              "inset 0 0px 8px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.04)",
          }}
        >
          <div
            className="flex flex-col w-full h-full text-gray-500"
            onClick={() => refetch()}
          >
            <p>Místo ve skupině:</p>
            {parseInt(currentPosition?.place ?? "") ? (
              <div className="flex-col flex-grow flex justify-center items-center">
                <motion.h3 className="text-primary text-[10em]">
                  {currentPosition?.place}.
                </motion.h3>
                <motion.a
                  href="https://stredocesky.ceskyhokej.cz/tabulky"
                  target="_blank"
                  className="text-primary -mt-12"
                  whileHover={{ textDecoration: "underline" }}
                >
                  Detailní tabulka
                </motion.a>
              </div>
            ) : (
              <div className="flex-col flex-grow flex justify-center items-center">
                <motion.h3 className="text-primary  flex justify-center items-center">
                  nezahájeno
                </motion.h3>
                <motion.a
                  href="https://stredocesky.ceskyhokej.cz/tabulky"
                  target="_blank"
                  className="text-primary"
                  whileHover={{ textDecoration: "underline" }}
                >
                  Detailní tabulka
                </motion.a>
              </div>
            )}

            <div className="flex justify-between text-gray-500">
              <p>
                Body: {currentPosition?.points} z {currentPosition?.maxPoints}
              </p>
              <p>
                Skóre: {currentPosition?.goalsScored}:
                {currentPosition?.goalsReceived}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
