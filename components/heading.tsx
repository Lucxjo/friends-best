
export function Heading({children}: {children: React.ReactNode}) {
  return (
    <h2 className="dark:text-gray-300 md:text-2xl text-lg pt-4 mx-4">{children}</h2>
  );
}