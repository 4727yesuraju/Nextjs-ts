import User from "@/components/User";
import Image from "next/image";

export default function Home() {
  return (
    <section>
       <User name="yesu" age={20} />
    </section>
  );
}
