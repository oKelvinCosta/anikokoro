// components/right-menu.tsx
import { StarRating } from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  BookmarkSimpleIcon,
  BookOpenIcon,
  CheckIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export function RightMenu({ children }: { children: React.ReactNode }) {
  const [showRate, setShowRate] = useState(true);
  const [isLogged, setIsLogged] = useState(true);

  function handleShowRate() {
    setShowRate(!showRate);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <SlidersHorizontalIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-[400px] sm:max-w-[660px] border-0 p-10 overflow-y-auto custom-scrollbar"
      >
        <Card>
          <CardContent>
            {/* Grid */}
            <div className="grid items-center gap-5 grid-cols-12 ">
              {/* Cover */}
              <div className="col-span-4 md:col-span-4">
                <Image
                  src="/assets/naruto-shipuden.png"
                  width={168}
                  height={237}
                  alt=""
                  className="rounded-sm object-cover w-full sm:max-w-full"
                />
              </div>
              {/* Info */}
              <div className="col-span-8 md:col-span-8 flex flex-col h-full justify-between gap-2">
                {/* Title */}
                <div>
                  <h4 className="-mb-1">NARUTO: Shippuuden</h4>
                  <span className="text-gray-400 text-sm">
                    Masashi kishimoto
                  </span>
                </div>

                <div>
                  {/* Badges */}
                  <div className="flex w-full overflow-hidden gap-2 mb-3">
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
                  <span
                    className="text-gray-400 -mt-1"
                    style={{ fontSize: "13px" }}
                  >
                    3 avaliações
                  </span>
                </div>
              </div>
            </div>
            {/* Grid End*/}
            <Separator className="mt-8 mb-5" />

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3">
                  <BookmarkSimpleIcon size={24} color="#7ed5ff" />
                  <div>
                    <span className="text-sm">Categoria</span>
                    <h4 className="capitalize">Empatia</h4>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                  <BookOpenIcon size={24} color="#7ed5ff" />
                  <div>
                    <span className="text-sm">Páginas</span>
                    <h4>3853</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid End*/}
          </CardContent>
        </Card>

        {/* Avaliações */}
        <div className="mt-3">
          <div className="flex justify-between items-end">
            <span className="text-sm">Avaliações</span>
            <Button variant="ghost" onClick={handleShowRate}>
              Avaliar
            </Button>
          </div>
          <div className="flex flex-col gap-6 mt-3">
            {/* Form Avaliações */}
            {isLogged && showRate && (
              <Card className="flex gap-0">
                <CardHeader className="">
                  {/* Grid */}
                  <div className="grid gap-6 grid-cols-12 items-center">
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
                      </div>
                    </div>
                    <div className="col-span-6 flex justify-end">
                      <StarRating
                        maxRating={5}
                        rating={3}
                        interactive
                        size="lg"
                      />
                    </div>
                  </div>
                  {/* Grid End*/}
                </CardHeader>
                <CardContent>
                  {/* Form */}
                  <Field data-disabled>
                    <Textarea
                      id="textarea-disabled"
                      placeholder="Escreva sua avaliação"
                      className="min-h-[160px] mt-3"
                      maxLength={500}
                    />
                    <div className="flex justify-end gap-3">
                      <Button variant="slate">
                        <XIcon
                          size={40}
                          className="text-secondary"
                          weight="bold"
                        />
                      </Button>
                      <Button variant="slate">
                        <CheckIcon
                          size={40}
                          className="text-primary"
                          weight="bold"
                        />
                      </Button>
                    </div>
                  </Field>
                </CardContent>
              </Card>
            )}
            {/* Avaliações dos usuários */}
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Card className="flex gap-0">
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
                    <div>
                      <p className="text-sm text-gray-300">
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero vulputate massa
                        velit nibh... <br />
                        <a href="">ver mais</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
