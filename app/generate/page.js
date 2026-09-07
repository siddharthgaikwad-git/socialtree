import { Suspense } from "react";
import Generate from "./Generate";

export default function GeneratePage() {
  return (
    <Suspense fallback={null}>
      <Generate />
    </Suspense>
  );
}