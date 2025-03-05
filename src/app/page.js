

import { ThreeDCardDemo } from "@/components/Contact/Contact";
import Landing from "@/components/Landing/Landing";
import MERNStackCourse from "@/components/Mern/Mern";
import { TimelineComp } from "@/components/Outline/Time";

export default function Home() {
  return (
    <div>
      <Landing />
      <MERNStackCourse/>
      <TimelineComp />
      <ThreeDCardDemo />
    </div>
  );
}
