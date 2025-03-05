"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  const teamMembers = [
    {
      id: 1,
      role: "Advisor",
      name: "Dr. Imran Mahmud",
      designation: "Professor & Head of the Department",
      department: "Department of Software Engineering",
      image: "/imran.png",
      email: "imranmahmud@daffodilvarsity.edu.bd",
      phone: "01847140117, 01711370502",
    },

    {
      id: 2,
      role: "Advisor-SEC",
      name: "Mr. Rajib Hossain",
      designation: "Lecturer (Senior Scale)",
      department: "Department of Software Engineering",
      image: "/rajib.png",
      email: "rajib.swe@diu.edu.bd",
      phone: "01796679434",
    },
    {
      id: 3,
      role: "Course Instructor",
      name: "Md Arif Ahammed Reza",
      designation: "MERN Stack Developer & Instructor",
      department: "Software Engineering Club",
      image: "/reza.png",
      email: "reza35-951@diu.edu.bd",
      phone: "01729318001",
    },
  ];

  return (
    <div id="Contact"  className="">
      <div className="flex flex-col items-center justify-center gap-4">
        {" "}
        <h1 className="text-4xl font-bold mt-20">Contact</h1>
        <p className="text-lg font-semibold text-gray-600 max-w-xl text-center">
        For any inquiries or assistance, feel free to reach out to us. We're here to help and provide clarity on any questions you may have. Don’t hesitate to get in touch with our team for support or further information.{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center font-semibold">
        {teamMembers.map((member) => (
          <CardContainer className="inter-var" key={member.id}>
            <CardBody className=" relative group/card shadow-sm shadow-cyan-300 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  w-[30rem] rounded-xl p-6 border-2  gap-6 justify-center">
              <CardItem translateZ="10" className="text-xl font-bold  ">
                {member.role}
              </CardItem>
              <CardItem
                translateZ="20"
                className="w-full mt-4 flex justify-center items-center "
              >
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-20 hover:-z-10"></div>
                <Image
                  src={member.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-60 object-cover rounded-full group-hover/card:shadow-xl border-4 border-cyan-400 hover:z-10 bg-white"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="10"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Name: {member.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="10"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Designation: {member.designation}
              </CardItem>
              <CardItem
                as="p"
                translateZ="10"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Department: {member.department}
              </CardItem>
              <CardItem
                as="p"
                translateZ="10"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Email: {member.email}
              </CardItem>
              <CardItem
                as="p"
                translateZ="10"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Phone: {member.phone}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
