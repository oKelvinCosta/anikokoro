import { StarRating } from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

export function PopularAnimes() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-title">Livros populares</p>
        <Button variant={"ghost"} className="flex gap-1 items-center">
          Ver todas{" "}
          <CaretRightIcon
            size={32}
            color="#7DD4FF"
            className="mt-1"
            weight="bold"
          />
        </Button>{" "}
      </div>

      <div className="flex flex-col gap-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Card className="flex gap-3">
              <CardContent>
                {/* Grid */}
                <div className="grid items-center grid-cols-1 gap-3 md:grid-cols-12 ">
                  <div className="md:col-span-3">
                    <Image
                      src="/assets/naruto-shipuden.png"
                      width={64}
                      height={94}
                      alt=""
                      className="rounded-sm object-cover max-w-[90px] sm:max-w-full"
                    />
                  </div>
                  <div className="md:col-span-9 flex flex-col gap-2">
                    <div>
                      <h4 className="-mb-2">NARUTO: Shippuuden</h4>
                      <span className="text-gray-400 text-sm">
                        Masashi kishimoto
                      </span>
                    </div>

                    <div className="flex w-full overflow-hidden gap-2">
                      <Badge>Badge</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>

                    <StarRating rating={3} />
                  </div>
                </div>
                {/* Grid End*/}
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
