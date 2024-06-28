
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
   <div style ={{background:"red",color:"yellow",fontSize:"30px "}}>{children}</div>
  );
}
