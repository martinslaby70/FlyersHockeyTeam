import useWindowDimensions from "../hooks/useWindowDimensions";
import { AboutUs } from "../sections/AboutUs";
import { CurrentPlace } from "../sections/CurrentPlace";
// import { CompressedMatchesTable } from "../sections/MatchesTable/CompressedMatchesTable";
import { MatchesTable } from "../sections/MatchesTable/MatchesTable";
import { SocialIcons } from "../sections/SocialIcons";
import { CompressedTeamCarousel } from "../sections/TeamCarousel/CompressedTeamCarousel/CompressedTeamCarousel";
import { TeamCarousel } from "../sections/TeamCarousel/TeamCarousel";
import { TrainingsTable } from "../sections/TrainingsTable/TrainingsTable";

export const LandingPage: React.FC = () => {
  const { width } = useWindowDimensions();
  const isCompressed = width < 1024;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto pt-[65vh]">
        <div className="relative lg:container bg-white w-full rounded-3xl z-10">
          <div className="border-shadow"></div>
          <div className="relative bg-white w-full rounded-3xl z-10">
            <section className="sm:p-4 p-1 w-full 2xl:flex-row flex-col flex">
              <div
                className="2xl:w-1/4 w-full lg:px-4 pt-4 2xl:pb-4"
                id="matches"
              >
                <CurrentPlace />
              </div>
              <div className="2xl:w-3/4 w-full lg:px-4 2xl:py-4" id="table">
                <MatchesTable isCompressed={isCompressed} />
              </div>
            </section>
          </div>

          <div className="absolute top-[-100px] w-1/4 left-1/2 -translate-x-1/2 h-[100px]">
            <div className="border-shadow" />
          </div>
          <div className="absolute top-[-99px] lg:w-1/4 md:w-1/2 w-2/3 left-1/2 -translate-x-1/2 h-[100px] bg-white rounded-t-3xl z-10">
            <div
              className="absolute right-[-25px] bottom-0 w-[25px] h-[25px] rounded-full -z-10"
              style={{ boxShadow: "-10px 10px 0px white" }}
            />
            <div
              className="absolute left-[-25px] bottom-0 w-[25px] h-[25px] rounded-full -z-10"
              style={{ boxShadow: "10px 10px 0px white" }}
            />

            <SocialIcons />
          </div>
        </div>

        <div className="mt-5 block max-w-full" id="gallery">
          {isCompressed ? <CompressedTeamCarousel /> : <TeamCarousel />}
        </div>

        <div className="relative lg:container  bg-white w-full rounded-3xl z-10 my-10">
          <div className="border-shadow" />
          <div className="relative bg-white w-full rounded-3xl z-10 p-4">
            <TrainingsTable />

            <AboutUs />
          </div>
        </div>
      </div>

      <footer className="bg-secondary rounded-lg shadow mt-4">
        <div className="w-full mx-auto max-w-screen-2xl p-4 gap-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-primary w-full md:text-start text-center">
            © 2023 Flyers Hockey Team. All Rights Reserved.
          </p>

          <div className="w-auto">
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  );
};
