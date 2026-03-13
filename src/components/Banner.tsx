export default function Banner() {
  return (
    <div className="relative w-full h-[350px]">

      <img
        src="/banner.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">

        <h1 className="text-4xl font-bold mb-3">
          where every event finds its venue
        </h1>

        <p className="max-w-xl text-lg">
          Discover the perfect venue for weddings,
          corporate events and special celebrations.
        </p>

      </div>

    </div>
  );
}