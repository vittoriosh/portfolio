import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career road map | Vittorio",
  description: "How Vittorio went from a first insurance-tech job into contracts, personal products, and a game — while still in that first corporate role.",
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
