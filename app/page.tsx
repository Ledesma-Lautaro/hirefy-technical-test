import Aside from "@/components/aside";
import Header from "@/components/header";
import Releases from "@/components/releases";

export default function Home() {
  return (
    <main className="bg-white-100">
      <Header/>
      <Releases/>
    </main>
  );
}
