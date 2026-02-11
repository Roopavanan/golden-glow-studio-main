import bridal1 from "@/assets/portfolio/bridal-1.jpg";
import bridal2 from "@/assets/portfolio/bridal-2.jpg";
import bridal3 from "@/assets/portfolio/bridal-3.jpg";
import bridal4 from "@/assets/portfolio/bridal-4.jpg";
import bridal5 from "@/assets/portfolio/bridal-5.jpg";
import bridal6 from "@/assets/portfolio/bridal-6.jpg";
import bridal7 from "@/assets/portfolio/bridal-7.jpg";
import bridal8 from "@/assets/portfolio/bridal-8.jpg";
import bridal9 from "@/assets/portfolio/bridal-9.jpg";
import bridal10 from "@/assets/portfolio/bridal-10.jpg";


import party1 from "@/assets/portfolio/party-1.jpg";

import editorial1 from "@/assets/portfolio/editorial-1.jpg";
import editorial2 from "@/assets/portfolio/editorial-2.jpg";
import editorial3 from "@/assets/portfolio/editorial-3.jpg";
import editorial4 from "@/assets/portfolio/editorial-4.png";

import photoshoot1 from "@/assets/portfolio/photoshoot-1.jpg";
import photoshoot2 from "@/assets/portfolio/photoshoot-2.jpg";
import photoshoot3 from "@/assets/portfolio/photoshoot-3.jpg";
import photoshoot4 from "@/assets/portfolio/photoshoot-4.jpg";
import photoshoot5 from "@/assets/portfolio/photoshoot-5.jpg";
import photoshoot6 from "@/assets/portfolio/photoshoot-6.jpg";
import photoshoot7 from "@/assets/portfolio/photoshoot-7.jpg";

export type Category = "all" | "bridal" | "party" | "editorial" | "photoshoot";

/* ------------------ Bridal ------------------ */
export const bridalItems = [
  { id: 1, src: bridal1, alt: "Bridal Makeup Look 1", category: "bridal" },
  { id: 2, src: bridal2, alt: "Bridal Makeup Look 2", category: "bridal" },
  { id: 3, src: bridal3, alt: "Bridal Makeup Look 3", category: "bridal" },
  { id: 4, src: bridal4, alt: "Bridal Makeup Look 4", category: "bridal" },
  { id: 5, src: bridal5, alt: "Bridal Makeup Look 5", category: "bridal" },
  { id: 6, src: bridal6, alt: "Bridal Makeup Look 6", category: "bridal" },
  { id: 7, src: bridal7, alt: "Bridal Makeup Look 7", category: "bridal" },
  { id: 8, src: bridal8, alt: "Bridal Makeup Look 8", category: "bridal" },
  { id: 9, src: bridal9, alt: "Bridal Makeup Look 9", category: "bridal" },
  { id: 10, src: bridal10, alt: "Bridal Makeup Look 10", category: "bridal" },
];

/* ------------------ Party ------------------ */
export const partyItems = [
  { id: 101, src: party1, alt: "Party Makeup Look 1", category: "party" },
];

/* ------------------ Editorial ------------------ */
export const editorialItems = [
  {
    id: 201,
    src: editorial1,
    alt: "Editorial Makeup Look 1",
    category: "editorial",
  },
  {
    id: 202,
    src: editorial2,
    alt: "Editorial Makeup Look 2",
    category: "editorial",
  },
  {
    id: 203,
    src: editorial3,
    alt: "Editorial Makeup Look 3",
    category: "editorial",
  },
  {
    id: 204,
    src: editorial4,
    alt: "Editorial Makeup Look 4",
    category: "editorial",
  },
];

export const photoshootItems = [
  {
    id: 301,  
    src: photoshoot1,
    alt: "Photoshoot Makeup Look 1",
    category: "photoshoot",
  },
  { id: 302, src: photoshoot2, alt: "Photoshoot Makeup Look 2", category: "photoshoot" },
  { id: 303, src: photoshoot3, alt: "Photoshoot Makeup Look 3", category: "photoshoot" },
  { id: 307, src: photoshoot7, alt: "Photoshoot Makeup Look 7", category: "photoshoot" },
  { id: 304, src: photoshoot4, alt: "Photoshoot Makeup Look 4", category: "photoshoot" },
  { id: 305, src: photoshoot5, alt: "Photoshoot Makeup Look 5", category: "photoshoot" },
  { id: 306, src: photoshoot6, alt: "Photoshoot Makeup Look 6", category: "photoshoot" },
];

/* ------------------ Combined Portfolio ------------------ */
export const portfolioItems = [
  ...bridalItems,
  ...partyItems,
  ...editorialItems,
  ...photoshootItems,
];
