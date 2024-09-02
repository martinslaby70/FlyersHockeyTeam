import { LazyLoadImage } from "react-lazy-load-image-component";
import stadion from "../assets/stadion.jpeg";
/*÷
Základní informace o klubu














*/
export const AboutUs = () => {
  return (
    <div className="mt-4 w-full p-4 text-primary" id="aboutUs">
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="2xl:w-1/3 lg:w-1/2 w-full flex-col">
          <h2>Základní informace o klubu</h2>

          <div className="pt-2">
            <span className="font-bold pr-1">Oficiální název subjektu:</span>
            <p>FLYERS Hockey team, z.s.</p>
          </div>

          <div className="pt-2">
            <span className="font-bold pr-1">Stadion:</span>
            <p>
              Kladno, ČEZ STADION Kladno Adresa: Hokejových legend 2531, 272 01
              Kladno 1
            </p>
          </div>

          <div className="pt-2">
            <span className="font-bold pr-1">Soutěž:</span>
            <p>Krajská liga mužů Středočeského kraje</p>
          </div>

          <div className="pt-2">
            <span className="font-bold pr-1">Klubové barvy:</span>
            <p>Modrá, Červená, Bílá</p>
          </div>

          <div className="pt-2">
            <span className="font-bold pr-1">Bankovní spojení:</span>
            <p>6027274359/0800 – účet příjemce Flyers Hockey team, z.s.</p>
          </div>

          <div className="pt-2">
            <span className="font-bold pr-1">Email:</span>
            <p>fht@flyershockeyteam.cz</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 2xl:w-2/3 ">
          <div className="2xl:pl-2">
            <LazyLoadImage
              src={stadion}
              width={970}
              className="rounded-3xl"
              visibleByDefault
            />
          </div>
        </div>
      </div>
    </div>
  );
};
