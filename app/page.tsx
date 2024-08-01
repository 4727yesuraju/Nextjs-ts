"use client";
import User from "@/components/1componentsProps/User";
import ChildrenTypes from "@/components/2children/ChildrenTypes";
import AdminInfo from "@/components/3ReusableTypes/AdminInfo";
import UserInfo from "@/components/3ReusableTypes/UserInfo";
//import Counter from "@/components/4useState/Counter";
import ElementWrapper from "@/components/5ElementWrapper/ElementWrapper";
import Form from "@/components/5forms/Form";
import Button, { primaryButtonProps, secondaryButtonProps } from "@/components/6TypePredicate/button";
import MyComponent from "@/components/7context/MyComponent2";
import { MyProvider } from "@/components/7context/MyContext2";
import Image from "next/image";
import Counter1 from "@/components/8useReducer/counter";



export default function Home() {
  return (
    <section>
       {/* <User name="yesu" age={20} /> */}
      {/*  <ChildrenTypes >
         <p>This p tag is a children to ChildTypes Element</p>
         <p>Wow! we can pass multiple element's using children</p>
       </ChildrenTypes> */}
       {/* <UserInfo username = "yesu" email="yesu@gmail.com" age={20} location={['ind','ap']}/>
       <AdminInfo username="raju" email="raju@gmail.com" age={22} location={['usa','newYork']} isAdmin={true}/>  */}
       {/* <Counter /> */}
       {/* <Form /> */}
       {/* <ElementWrapper elementType="div" className={"box"} onClick={()=>alert("U clicked")}>
            <p>This a element with className box</p>
       </ElementWrapper> */}
        {/* <Button {...primaryButtonProps}/>
        <Button {...secondaryButtonProps}/> */}

      {/*   <MyProvider>
          <MyComponent />
        </MyProvider> */}

        <Counter1 />
       </section>
  );
}
 