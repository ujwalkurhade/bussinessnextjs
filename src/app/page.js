import Image from "next/image";
import Hero from "./component/Hero";
import Retangle from "./component/Retangle";
import Retangle2 from "./component/Retangle2";
import Rettangle3 from "./component/Rettangle3";
import Retangle4 from "./component/Retangle4";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      <Retangle />
      <Retangle2 />
      <Rettangle3 />
      <Retangle4 />
    </div>
  );
}
