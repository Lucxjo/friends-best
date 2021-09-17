
export function Title({ children, ...props }: { children: React.ReactNode }) {
    return (
        <h1 className="dark:text-gray-300 font-bold text-center md:text-6xl text-3xl pt-4 font-body">{children}</h1>
    );
}