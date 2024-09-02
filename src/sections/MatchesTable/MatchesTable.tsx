import { useEffect, useMemo, useState } from "react";
import { useGetMatchesQuery } from "../../api/stadiumApi";
import { SegmentControl } from "../../components/SegmentControl/SegmentControl";
import { MatchRow } from "./MatchRow";

const SEGMENT_VALUES = ["2024", "2023", "2022"];

type MatchesTableProps = { isCompressed: boolean };
export const MatchesTable = (props: MatchesTableProps) => {
  const [activeYear, setActiveYear] = useState<string>("2024");

  const { data: tableData, isLoading } = useGetMatchesQuery({
    year: activeYear,
  });

  const nextMatchIndex = useMemo(
    () => tableData?.findIndex((item) => item.state === "Připraveno") ?? 0,
    [tableData]
  );

  useEffect(() => {
    const pinnedMatchIndex = nextMatchIndex - 2 >= 0 ? nextMatchIndex - 2 : 0;
    const nextMatchDateTime = tableData?.[pinnedMatchIndex]?.dateTime;

    if (nextMatchDateTime === undefined) return;

    const scrollElement = document.getElementById("tableContainer");
    const nextMatchElementOffset =
      document.getElementById(nextMatchDateTime)?.offsetTop;

    if (scrollElement && nextMatchElementOffset)
      scrollElement.scrollTop = nextMatchElementOffset - 40;
  }, [nextMatchIndex, tableData]);

  return (
    <div className="w-full justify-end flex-col lg:flex ">
      <div className="flex flex-row-reverse justify-between items-center">
        <SegmentControl
          items={SEGMENT_VALUES}
          value={activeYear}
          setValue={setActiveYear}
        />

        <h2 className="text-primary text-center rounded-lg">Zápasy</h2>
      </div>

      <div
        className="relative overflow-x-auto rounded-lg bg-secondary h-[500px] table-fixed blue-scrollbar"
        id="tableContainer"
        style={{
          boxShadow:
            "inset 0 0px 8px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.04)",
        }}
      >
        <table className="w-full text-[12px] lg:text-sm text-left rtl:text-right text-gray-500 table-fixed">
          <thead className="text-xs text-primary uppercase text bg-[#e4e3e3] sticky top-0">
            <tr>
              {!props.isCompressed && (
                <th
                  scope="col"
                  className="lg:px-6 px-2 py-3 xl:w-[10%] w-[70px]"
                >
                  Den
                </th>
              )}
              <th
                scope="col"
                className="lg:px-6 px-2 py-3 xl:w-[25%] w-[130px]"
              >
                Datum
              </th>
              <th scope="col" className="lg:px-6 py-3 w-[170px]">
                Domácí
              </th>
              <th scope="col" className="lg:px-6 py-3 w-[170px] ">
                Hosté
              </th>
              <th
                scope="col"
                className="lg:px-6 py-3 xl:w-[15%] w-[80px] lg:text-[10px] text-xc"
              >
                Stav
              </th>
              <th scope="col" className="lg:px-6 py-3 w-[70px]"></th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item) => (
              <MatchRow
                match={item}
                key={item.dateTime}
                isCompressed={props.isCompressed}
              />
            ))}
          </tbody>
        </table>

        {isLoading && (
          <tr className="flex h-full justify-center items-center w-full">
            <td colSpan={1000} className="block">
              <h2 className="text-gray-500">Načítání...</h2>
            </td>
          </tr>
        )}
      </div>
    </div>
  );
};
