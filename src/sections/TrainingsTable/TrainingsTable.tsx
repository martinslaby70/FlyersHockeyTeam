import { addDays, format, subDays, subHours } from "date-fns";
import { motion } from "framer-motion";
import { useState } from "react";
import { useGetTrainingsQuery } from "../../api/stadiumApi";
import "./trainingsTable.css";

export const TrainingsTable = () => {
  const [day, setDay] = useState(new Date());
  const { data: trainings, isFetching } = useGetTrainingsQuery({
    day: format(day, "yyyy-MM-dd"),
  });

  const renderTableBody = () => {
    if (isFetching || !Array.isArray(trainings)) return null;

    return trainings.map((item) => (
      <tr
        className="bg-secondary bg-opacity-50 border-b"
        key={item.startDateTime.toISOString()}
      >
        <td className="px-6 py-4">{item.date}</td>
        <td className={`px-6 py-4 text-primary`}>
          {format(subHours(item.startDateTime, 0.75), "HH:mm")}
        </td>
        <td className={`px-6 py-4`}>{item.startTime}</td>
        <td className={`px-6 py-4`}>{item.endTime}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {item.plocha}
        </th>
      </tr>
    ));
  };

  return (
    <div className="w-full p-4 flex flex-col" id="trainings">
      <h2 className="text-primary">Tréninky</h2>

      <div
        className="relative overflow-x-auto rounded-lg bg-secondary blue-scrollbar"
        style={{
          boxShadow:
            "inset 0 0px 8px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.04)",
        }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed">
          <thead className="text-xs text-primary uppercase text bg-[#e4e3e38c]">
            <tr>
              <th scope="col" className="px-6 py-3 w-[150px]">
                Datum
              </th>

              <th scope="col" className="px-6 py-3 w-[150px]">
                Sraz
              </th>
              <th scope="col" className="px-6 py-3 w-[150px]">
                Start ledu
              </th>
              <th scope="col" className="px-6 py-3 w-[150px]">
                Konec ledu
              </th>
              <th scope="col" className="px-6 py-3 w-[150px]">
                Plocha
              </th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>

        {isFetching && (
          <tr className="flex h-[105px] justify-center items-center w-full">
            <td colSpan={1000} className="block">
              <h2 className="text-gray-500">Načítání...</h2>
            </td>
          </tr>
        )}

        {!isFetching && !Array.isArray(trainings) && (
          <tr className="flex h-[105px] justify-center items-center w-full">
            <td colSpan={1000} className="block">
              <h3 className="text-red-400">
                Na tento týden nejsou vypsané tréninky
              </h3>
            </td>
          </tr>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <motion.button
          whileHover={{
            color: "#f0efef",
            backgroundColor: "#201F59",
            borderColor: "#201F59",
          }}
          style={{ color: "#201F59" }}
          className="p-2 rounded-lg border-[#e5e7eb] border-2"
          onClick={() => setDay(subDays(day, 7))}
        >
          Předchozí týden
        </motion.button>
        <motion.button
          whileHover={{
            color: "#f0efef",
            backgroundColor: "#201F59",
            borderColor: "#201F59",
          }}
          style={{ color: "#201F59" }}
          className="p-2 rounded-lg border-[#e5e7eb] border-2"
          onClick={() => setDay(addDays(day, 7))}
        >
          Následující týden
        </motion.button>
      </div>
    </div>
  );
};
