import Link from "next/link";

export function LinkCard(props: {
  link: string;
  title: string;
  sub: string;
}) {
  const { link, title, sub } = props;
  return (
    <Link href={link} passHref>
        <a className="box-border p-2 bg-gray-200 dark:text-gray-200 dark:bg-gray-600 hover:bg-gray-100 hover:text-indigo-500 dark:hover:bg-gray-500 dark:hover:text-indigo-400 rounded-md drop-shadow-lg hover:drop-shadow-2xl">
            <h2 className="px-4">{title} &rarr;</h2>
            <p className="px-4">{sub}</p>
        </a>
    </Link>
  );
}