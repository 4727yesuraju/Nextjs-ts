import User from "@/components/1componentsProps/User";
import ChildrenTypes from "@/components/2children/ChildrenTypes";
import AdminInfo from "@/components/3ReusableTypes/AdminInfo";
import UserInfo from "@/components/3ReusableTypes/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <section>
       {/* <User name="yesu" age={20} /> */}
      {/*  <ChildrenTypes >
         <p>This p tag is a children to ChildTypes Element</p>
         <p>Wow! we can pass multiple element's using children</p>
       </ChildrenTypes> */}
       <UserInfo username = "yesu" email="yesu@gmail.com" age={20} location={['ind','ap']}/>
       <AdminInfo username="raju" email="raju@gmail.com" age={22} location={['usa','newYork']} isAdmin={true}/> 
    </section>
  );
}
