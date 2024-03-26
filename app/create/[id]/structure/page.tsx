import { SelectedCategory } from "@/app/components/SelectedCategory";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructureRoute() {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your home
        </h2>
      </div>

      <form>
        <SelectedCategory></SelectedCategory>

        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
          <div className="flex container items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Button variant="secondary" size="lg">
              <Link href="/">Cancel</Link>
            </Button>
            <Button size="lg">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
}
