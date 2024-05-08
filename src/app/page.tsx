import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return <div className="align-content: center"><Button asChild><Link href="/admin/">Admin</Link></Button></div>
}