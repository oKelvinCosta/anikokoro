import { LoggedLayout } from "../layout/logged-layout";
import { LastRead } from "./last-read";
import { PopularAnimes } from "./popular-animes";
import { RecentRatings } from "./recent-ratings";

export default function Dashboard() {
  return (
    <>
      <LoggedLayout>
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
      </LoggedLayout>
    </>
  );
}
