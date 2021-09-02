import Link from "next/link";

export default function LinkCard(props: {
  link: string;
  title: string;
  sub: string;
}) {
  const { link, title, sub } = props;
  return (
    <Link href={link} passHref>
        <a className="box-border p-2 bg-gray-50 dark:bg-gray-500 hover:bg-gray-100 hover:text-indigo-500 dark:hover:bg-gray-600 dark:hover:text-indigo-300 rounded-md">
            <h2 className="px-4">{title} &rarr;</h2>
            <p className="px-4">{sub}</p>
        </a>
    </Link>
  );
}