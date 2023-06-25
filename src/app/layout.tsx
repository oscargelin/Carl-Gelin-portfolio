export const metadata = {
  title: "Carl Gelin Portfolio",
  description: "A portfolio site for Carl Gelin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
