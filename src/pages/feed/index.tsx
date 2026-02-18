import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LastRead } from "./last-read";
import { PopularAnimes } from "./popular-animes";
import { RecentRatings } from "./recent-ratings";

export default function Dashboard() {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "19rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </header>
          <div className="p-4 pt-0 max-w-[1024px] mx-auto">
            <h1>Início</h1>

            {/* Content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 ">
              <main className="md:col-span-8">
                <LastRead />
                <RecentRatings />
              </main>
              <aside className="md:col-span-4">
                <PopularAnimes />
              </aside>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
