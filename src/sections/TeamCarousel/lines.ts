import Brezina from "./assets/Brezina.jpg";
import Chladek from "./assets/Chladek.jpg";
import Curda from "./assets/Curda.jpg";
import Darsa from "./assets/Darsa.jpg";
import Frolik from "./assets/Frolik.jpg";
import Habrdla from "./assets/Habrdla.jpg";
import Hamada from "./assets/Hamada.jpg";
import Herna from "./assets/Herna.jpg";
import Janecek from "./assets/Janecek.jpg";
import Kalla from "./assets/Kalla.jpg";
import Keszi from "./assets/Keszi.jpg";
import Kratochvil from "./assets/Kratochvil.jpg";
import Machacek from "./assets/Machacek.jpg";
import Miska from "./assets/Miska.jpg";
import Patyk from "./assets/Patyk.jpg";
import Port from "./assets/Port.jpg";
import Potechin from "./assets/Potechin.jpg";
import Slaby from "./assets/Slaby.jpg";
import Vetrovec from "./assets/Vetrovec.jpg";
import Vysin from "./assets/Vysin.jpg";
import Zuska from "./assets/Zuska.jpg";
import Kadlec from "./assets/Kadlec.jpg";
import Kames from "./assets/Kames.jpg";

export type LinePosition = "Obránce" | "Útočník" | "Brankář" | "Trenér";
export type LineMembers = {
  name: string;
  number: number | null;
  position: LinePosition;
  imageSrc: string | null;
  dateOfBirth: string | null;
  nickName: string | null;
};
export type Line = {
  fowards: LineMembers[];
  defenders: LineMembers[];
  title: string;
};

export const lines: Line[] = [
  {
    title: "Bankáři a trenéři",
    fowards: [
      {
        name: "Vladimír Kameš",
        number: null,
        position: "Trenér",
        imageSrc: Kames,
        dateOfBirth: "28. 9. 1964",
        nickName: "Čavar",
      },
      {
        name: "Drahomír Kadlec",
        number: null,
        position: "Trenér",
        imageSrc: Kadlec,
        dateOfBirth: "29. 11. 1965",
        nickName: "Drahoš",
      },
      {
        name: "Jiří Novotný",
        number: null,
        position: "Trenér",
        imageSrc: null,
        dateOfBirth: "24. 7. 1977",
        nickName: "Novotňák",
      },
    ],
    defenders: [
      {
        name: "Martin Frolík",
        number: 42,
        position: "Brankář",
        imageSrc: Frolik,
        dateOfBirth: "1. 2. 1986",
        nickName: "Frolda",
      },
      {
        name: "Tadeáš Port",
        number: 99,
        position: "Brankář",
        imageSrc: Port,
        dateOfBirth: "1. 10. 2004",
        nickName: "Portík",
      },
    ],
  },
  {
    title: "1. Lajna",
    fowards: [
      {
        name: "Petr Janeček",
        number: 25,
        position: "Útočník",
        imageSrc: Janecek,
        dateOfBirth: null,
        nickName: null,
      },
      {
        name: "Petr Patyk",
        number: 11,
        position: "Útočník",
        imageSrc: Patyk,
        dateOfBirth: "25.11.1997",
        nickName: "Patýno",
      },

      {
        name: "Vincent Keszi",
        number: 22,
        position: "Útočník",
        imageSrc: Keszi,
        dateOfBirth: null,
        nickName: "Keszi",
      },
    ],
    defenders: [
      {
        name: "Michail Potechin",
        number: 7,
        position: "Obránce",
        imageSrc: Potechin,
        dateOfBirth: "07.06.1995",
        nickName: "Potěch",
      },
      {
        name: "David Chládek",
        number: 26,
        position: "Obránce",
        imageSrc: Chladek,
        dateOfBirth: "19.06.1997",
        nickName: "Chláďa",
      },
    ],
  },
  {
    title: "2. Lajna",
    fowards: [
      {
        name: "Jiří Kratochvíl",
        number: 27,
        position: "Útočník",
        imageSrc: Kratochvil,
        dateOfBirth: "14.04.1995",
        nickName: "Kráťa",
      },

      {
        name: "Jaroslav Kalla",
        number: 18,
        position: "Útočník",
        imageSrc: Kalla,
        dateOfBirth: "07.12.1979",
        nickName: "Kalič",
      },
      {
        name: "Jiří Nekvinda",
        number: 23,
        position: "Útočník",
        imageSrc: null,
        dateOfBirth: "09.03.1998",
        nickName: "Nekvi",
      },
    ],
    defenders: [
      {
        name: "Martin Slabý",
        number: 29,
        position: "Obránce",
        imageSrc: Slaby,
        dateOfBirth: "02.09.2000",
        nickName: "Slaboch",
      },
      {
        name: "Matouš Větrovec",
        number: 3,
        position: "Obránce",
        imageSrc: Vetrovec,
        dateOfBirth: "07.09.1994",
        nickName: "Větrák",
      },
    ],
  },
  {
    title: "3. Lajna",
    fowards: [
      {
        name: "Dominik Habrdla",
        number: null,
        position: "Útočník",
        imageSrc: Habrdla,
        dateOfBirth: null,
        nickName: null,
      },

      {
        name: "Vladimír Macháček",
        number: 16,
        position: "Útočník",
        imageSrc: Machacek,
        dateOfBirth: "27.01.1995",
        nickName: "Machy",
      },
      {
        name: "Tomáš Březina",
        number: 73,
        position: "Útočník",
        imageSrc: Brezina,
        dateOfBirth: "16.06.1999",
        nickName: "Břízka",
      },
    ],
    defenders: [
      {
        name: "Marek Herna",
        number: 17,
        position: "Obránce",
        imageSrc: Herna,
        dateOfBirth: null,
        nickName: null,
      },
      {
        name: "Pavel Zuska",
        number: 21,
        position: "Obránce",
        imageSrc: Zuska,
        dateOfBirth: "28.07.1990",
        nickName: "Pavlík",
      },
    ],
  },
  {
    title: "4. Lajna",
    fowards: [
      {
        name: "Martin Čurda",
        number: 28,
        position: "Útočník",
        imageSrc: Curda,
        dateOfBirth: "08.04.1991",
        nickName: "Čuri",
      },
      {
        name: "Jiří Pokorný",
        number: 22,
        position: "Útočník",
        imageSrc: null,
        dateOfBirth: "22.08.2000",
        nickName: "Poky",
      },

      {
        name: "Tomáš Hlaváč",
        number: 81,
        position: "Útočník",
        imageSrc: null,
        dateOfBirth: "23.08.1991",
        nickName: "Hlavi",
      },
    ],
    defenders: [
      {
        name: "Jaroslav Miška",
        number: 20,
        position: "Obránce",
        imageSrc: Miska,
        dateOfBirth: "19.02.2001",
        nickName: "Jarda",
      },
      {
        name: "Martin Hamada",
        number: 14,
        position: "Útočník",
        imageSrc: Hamada,
        dateOfBirth: "03.08.1974",
        nickName: "Hamič",
      },
    ],
  },
  {
    title: "Útočníci",
    fowards: [
      {
        name: "Petr Benda",
        number: 97,
        position: "Útočník",
        imageSrc: null,
        dateOfBirth: "27.08.1999",
        nickName: "Bendič",
      },
      {
        name: "Petr Hanzlík",
        number: 8,
        position: "Útočník",
        imageSrc: null,
        dateOfBirth: null,
        nickName: null,
      },
      {
        name: "Lukáš Vyšín",
        number: 74,
        position: "Útočník",
        imageSrc: Vysin,
        dateOfBirth: null,
        nickName: null,
      },
    ],
    defenders: [
      {
        name: "Marek Darsa",
        number: null,
        position: "Útočník",
        imageSrc: Darsa,
        dateOfBirth: null,
        nickName: "Darsič",
      },
    ],
  },
];
