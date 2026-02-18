import { StarRating } from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function RecentRatings() {
  return (
    <div id="recent-ratings">
      <p className="font-title">Avaliações mais recentes</p>

      <div className="flex flex-col gap-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Card className="flex gap-3">
              <CardHeader className="">
                {/* Grid */}
                <div className="grid gap-6 grid-cols-12 ">
                  <div className="col-span-6 flex gap-2 items-center">
                    <Image
                      src="/assets/Kelvin_Knight.png"
                      alt="avatar"
                      width={40}
                      height={40}
                      className="rounded-full aspect-square object-cover  border-gray-950 border"
                    />
                    <div>
                      <CardTitle className="-mb-0.5">Jaxson Dias</CardTitle>
                      <span className="text-gray-400 text-sm">Hoje</span>
                    </div>
                  </div>
                  <div className="col-span-6 flex justify-end">
                    <StarRating rating={3} />
                  </div>
                </div>
                {/* Grid End*/}
              </CardHeader>
              <CardContent>
                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <Image
                      src="/assets/naruto-shipuden.png"
                      width={175}
                      height={246}
                      alt=""
                      className="rounded-sm object-cover max-w-[90px] sm:max-w-full"
                    />
                  </div>
                  <div className="md:col-span-9">
                    <div>
                      <h4 className="-mb-2">NARUTO: Shippuuden</h4>
                      <span className="text-gray-400 text-sm">
                        Masashi kishimoto
                      </span>
                    </div>

                    <div className="flex w-full flex-wrap gap-2">
                      <Badge>Badge</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>

                    <div>
                      <p className="text-primary">
                        O que esse anime me ensinou?
                      </p>
                      <p className="text-sm text-gray-300">
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero vulputate massa
                        velit nibh... <a href="">ver mais</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Grid End*/}
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
