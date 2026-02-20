import { FormExplore } from "@/components/form-explore";
import { StarRating } from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LoggedLayout } from "@/pages/layout/logged-layout";
import { BinocularsIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Explorar() {
  return (
    <LoggedLayout>
      <div className="flex items-center flex-wrap gap-2 mb-10 justify-between">
        <h1 className="m-0">
          <BinocularsIcon size={40} color="#7ed5ff" />
          Explorar
        </h1>

        <FormExplore />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 ">
        <main className="md:col-span-8">
          <div>
            <p className="text-sm text-gray-300">Há 2 dias</p>
            <div className="flex gap-4 flex-row">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Card className=" gap-3 basis-1/3">
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
          </div>
        </main>
      </div>
    </LoggedLayout>
  );
}
