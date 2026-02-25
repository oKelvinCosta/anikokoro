import { FormExplore } from "@/components/form-explore";
import { StarRating } from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoggedLayout } from "@/pages/layout/logged-layout";
import { BinocularsIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Explorar() {
  return (
    <LoggedLayout>
      <div className="flex items-center flex-wrap gap-2 mb-10 justify-between flex-col md:flex-row">
        <h1 className="m-0 flex items-center gap-2">
          <BinocularsIcon size={40} color="#7ed5ff" />
          Explorar
        </h1>
        <FormExplore className="min-w-auto w-full md:w-auto md:min-w-[430px]" />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-10">
        <Button variant="tag-selected">Tudo</Button>
        <Button variant="tag">Computação</Button>
        <Button variant="tag">Fantasia</Button>
      </div>

      {/* Content */}
      <div>
        <main>
          <div>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Card>
                    <CardContent>
                      {/* Grid */}
                      <div className="grid items-center gap-3 grid-cols-12 ">
                        {/* Cover */}
                        <div className="col-span-3 md:col-span-3">
                          <Image
                            src="/assets/naruto-shipuden.png"
                            width={64}
                            height={94}
                            alt=""
                            className="rounded-sm object-cover max-w-[90px] sm:max-w-full"
                          />
                        </div>
                        {/* Info */}
                        <div className="col-span-9 md:col-span-9 flex flex-col h-full justify-between gap-2">
                          {/* Title */}
                          <div>
                            <h4 className="-mb-2">NARUTO: Shippuuden</h4>
                            <span className="text-gray-400 text-sm">
                              Masashi kishimoto
                            </span>
                          </div>

                          {/* Badges */}
                          <div className="flex w-full overflow-hidden gap-2">
                            <Button variant="tag-1" size="xs">
                              Fantasia
                            </Button>
                            <Button variant="tag-2" size="xs">
                              Aventura
                            </Button>

                            <Button variant="tag" size="xs">
                              Computação
                            </Button>
                          </div>

                          {/* Star Rating */}
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
