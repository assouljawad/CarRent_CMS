import React from "react";
import Carcard from "@/components/Carcard";

export default function Cars({ data }) {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 pt-10">
        {data
          .map((item, key) => {
            return <Carcard item={item} key={key} />;
          })
          .slice(0, 9)}
      </div>
    </>
  );
}
