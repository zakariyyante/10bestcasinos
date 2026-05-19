export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  tag?: string;
}

function toId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const rawBrands = [
  {
    name: "Karamba",
    logo: "/brands/karamba.svg",
    bonus: "100% UP TO £200 + 20 Free Spins",
    url: "https://www.karamba.com/?clickid=",
    isMobile: true,
    votes: 5640,
  },
];

export const brands: Brand[] = rawBrands.map((b, i) => ({
  ...b,
  id: toId(b.name),
  rating: parseFloat((10.0 - i * 0.2).toFixed(1)),
}));
