import { AppSidebar } from "@/components/app-sidebar";
import { StarRating } from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

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
                {/* Last Read */}
                <div id="last-read" className="mb-10">
                  <div className="flex justify-between items-center">
                    <p className="font-title">Sua última leitura</p>
                    <Button
                      variant={"ghost"}
                      className="flex gap-1 items-center"
                    >
                      Ver todas{" "}
                      <CaretRightIcon
                        size={32}
                        color="#7DD4FF"
                        className="mt-1"
                        weight="bold"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Card>
                      <CardContent>
                        {/* Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                          <div className="sm:col-span-3">
                            <Image
                              src="/assets/naruto-shipuden.png"
                              width={175}
                              height={246}
                              alt=""
                              className="rounded-sm object-cover max-w-[90px] sm:max-w-full"
                            />
                          </div>
                          <div className="sm:col-span-9">
                            <div>
                              <h4 className="-mb-2">NARUTO: Shippuuden</h4>
                              <span className="text-gray-400 text-sm">
                                Masashi kishimoto
                              </span>

                              <p className="text-primary -mb-2">
                                O que esse anime me ensinou?
                              </p>
                              <p className="text-sm text-gray-300">
                                Semper et sapien proin vitae nisi. Feugiat neque
                                integer donec et aenean posuere vulputate massa
                                velit nibh... <a href="">ver mais</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Grid End*/}
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Recent Ratings */}
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
                                  <CardTitle className="-mb-0.5">
                                    Jaxson Dias
                                  </CardTitle>
                                  <span className="text-gray-400 text-sm">
                                    Hoje
                                  </span>
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
                                  <Badge variant="destructive">
                                    Destructive
                                  </Badge>
                                  <Badge variant="outline">Outline</Badge>
                                </div>

                                <div>
                                  <p className="text-primary">
                                    O que esse anime me ensinou?
                                  </p>
                                  <p className="text-sm text-gray-300">
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero vulputate massa velit
                                    nibh... <a href="">ver mais</a>
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
              </main>
              <aside className="md:col-span-4">
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
              </aside>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
