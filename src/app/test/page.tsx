// export const dynamic = "force-dynamic";
// import PersistentDrawerLeft from "@/components/muiNavComponent/Drawer";
// //import PersistentDrawerLeft from "@/components/muiNavComponent/Drawer";
// import React from "react";

// function Page() {
//   return (
//     <div>
//       <PersistentDrawerLeft />
//     </div>
//   );
// }

// export default Page;
export const dynamic = "force-dynamic";
import React from "react";
import nextDynamic from "next/dynamic";

// disable SSR for this component
const PersistentDrawerLeft = nextDynamic(
  () => import("@/components/muiNavComponent/Drawer"),
  { ssr: false }
);

function Page() {
  return (
    <div>
      <PersistentDrawerLeft />
    </div>
  );
}

export default Page;
