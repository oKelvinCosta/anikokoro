import { FormRated } from "@/components/form-rated";
import { StarRating } from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LoggedLayout } from "@/pages/layout/logged-layout";
import {
  BookmarkSimpleIcon,
  BookOpenIcon,
  BooksIcon,
  UserIcon,
  UserListIcon,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function Perfil() {
  return (
    <>
      <LoggedLayout>
        <h1 className="flex items-center gap-2 mb-10">
          <UserIcon size={40} color="#7ed5ff" />
          Perfil
        </h1>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 ">
          <main className="md:col-span-8">
            <FormRated />
            <div id="my-ratings" className="mt-10">
              <p className="text-sm text-gray-300">Há 2 dias</p>
              <div className="flex flex-col gap-4">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <Card className="flex gap-3">
                      <CardContent>
                        {/* Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                          <div className="md:col-span-2">
                            <Image
                              src="/assets/naruto-shipuden.png"
                              width={98}
                              height={134}
                              alt=""
                              className="rounded-sm object-cover max-w-[90px] sm:max-w-full"
                            />
                          </div>
                          <div className="md:col-span-10">
                            <div>
                              <h4 className="-mb-2">NARUTO: Shippuuden</h4>
                              <span className="text-gray-400 text-sm">
                                Masashi kishimoto
                              </span>
                            </div>

                            <div className="flex w-full flex-wrap gap-2 mt-1">
                              <Badge>Badge</Badge>
                              <Badge variant="secondary">Secondary</Badge>
                              <Badge variant="destructive">Destructive</Badge>
                              <Badge variant="outline">Outline</Badge>
                            </div>

                            <div className="col-span-6 flex mt-6">
                              <StarRating rating={3} />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-primary">
                            O que esse anime me ensinou?
                          </p>
                          <p className="text-sm text-gray-300">
                            Semper et sapien proin vitae nisi. Feugiat neque
                            integer donec et aenean posuere amet ultrices. Cras
                            fermentum id pulvinar varius leo a in. Amet libero
                            vulputate massa velit nibh...{" "}
                          </p>
                        </div>
                        {/* Grid End*/}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </main>
          <aside className="md:col-span-4 px-6 flex flex-col items-center">
            {/* User Bio*/}
            <div className="text-center">
              <Image
                src="/assets/Kelvin_Knight.png"
                alt="avatar"
                width={70}
                height={70}
                className="rounded-full aspect-square object-cover mx-auto   border-gray-950 border"
              />
              <h2 className="mb-0 mt-4 normal-case">Cristofer Rosser</h2>
              <span className="text-gray-400">membro desde 2019</span>
            </div>

            {/* Divider */}
            <div className="w-[30px] h-[3px] bg-secondary mx-auto my-8"></div>

            {/* User Stats */}
            <div className="flex flex-col gap-6 [&_.item]:flex [&_.item]:gap-2 [&_.item]:items-center mx-auto">
              <div className="item ">
                <BookOpenIcon size={32} color="#7ed5ff" />
                <div>
                  <h4>3853</h4>
                  <span className="text-sm">Páginas lidas</span>
                </div>
              </div>
              <div className="item ">
                <BooksIcon size={32} color="#7ed5ff" />
                <div>
                  <h4>10</h4>
                  <span className="text-sm">Livros avaliados</span>
                </div>
              </div>
              <div className="item ">
                <UserListIcon size={32} color="#7ed5ff" />
                <div>
                  <h4>8</h4>
                  <span className="text-sm">Autores lidos</span>
                </div>
              </div>
              <div className="item ">
                <BookmarkSimpleIcon size={32} color="#7ed5ff" />
                <div>
                  <h4>Empatia</h4>
                  <span className="text-sm">Categoria mais lida</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </LoggedLayout>
    </>
  );
}
