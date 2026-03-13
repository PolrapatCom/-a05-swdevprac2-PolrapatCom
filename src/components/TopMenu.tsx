import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">

      <div className="absolute top-0 right-0 flex items-center gap-3 p-4 pointer-events-auto">

        <TopMenuItem title="Booking" pageRef="/booking"/>

        <img
          src="/logo.png"
          alt="logo"
          className="h-6"
        />

      </div>

    </div>
  );
}