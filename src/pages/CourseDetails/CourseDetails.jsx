import { lazy } from "react";
import { Comments, Materials, Topics } from "./components";

const Video = lazy(() => import("../../components/VideoControl"));

export default function CourseDetails() {
  return (
    <div className="container mx-auto px-5 py-4 grid grid-cols-1 lg:grid-cols-[64%_auto] gap-[70px] auto-rows-auto">
      <section>
        <Video />

        <Materials />

        <Comments />
      </section>

      <Topics />
    </div>
  );
}
