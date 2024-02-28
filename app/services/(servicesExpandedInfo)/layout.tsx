import LeftSideInfo from "../LeftSideInfo";


export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <div style={{ color: "#000", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <LeftSideInfo />

      <div style={{ flex: "5 1 600px" }}>
        {children}
      </div>
    </div>
  );
}
