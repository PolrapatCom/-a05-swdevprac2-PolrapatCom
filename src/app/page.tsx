import Banner from "../components/Banner";
import Card from "../components/Card";
import TopMenu from "../components/TopMenu";

export default function Home() {
  return (
    <main className="w-full">

      <TopMenu />

      <Banner />

      <div className="flex justify-center gap-10 mt-10">
        <Card venueName="Bloom" imgSrc="/bloom.jpg"/>
        <Card venueName="SparkSpace" imgSrc="/sparkspace.jpg"/>
        <Card venueName="GrandTable" imgSrc="/grandtable.jpg"/>
      </div>

    </main>
  );
}