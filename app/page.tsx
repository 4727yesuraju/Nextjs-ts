import User from "@/components/1/User";
import ChildrenTypes from "@/components/2/ChildrenTypes";
import Image from "next/image";

export default function Home() {
  return (
    <section>
       <User name="yesu" age={20} />
      {/*  <ChildrenTypes >
         <p>This p tag is a children to ChildTypes Element</p>
         <p>Wow! we can pass multiple element's using children</p>
       </ChildrenTypes> */}
    </section>
  );
}
