import { createFileRoute } from "@tanstack/react-router";
import { ComponentExample } from "@/components/component-example";

export const Route = createFileRoute("/_main-layout/")({ component: App });

function App() {
return (
  <ComponentExample />
);
}