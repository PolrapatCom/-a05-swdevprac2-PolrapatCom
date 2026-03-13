export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <a
      href={pageRef}
      className="px-4 py-2 text-white font-semibold hover:text-yellow-300 transition"
    >
      {title}
    </a>
  );
}