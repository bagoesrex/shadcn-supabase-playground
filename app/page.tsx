import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Button>
        <Link href="/alert">Alert</Link>
      </Button>
      <Button>
        <Link href="/alert-dialog">Alert Dialog</Link>
      </Button>
    </>
  );
}
