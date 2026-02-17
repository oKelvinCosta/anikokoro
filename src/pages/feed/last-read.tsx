import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function LastRead() {
  return (
    <div id="last-read" className="mb-10">
      <div className="flex justify-between items-center">
        <p className="font-title">Sua última leitura</p>
        <Button variant={"ghost"} className="flex gap-1 items-center">
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
                    Semper et sapien proin vitae nisi. Feugiat neque integer
                    donec et aenean posuere vulputate massa velit nibh...{" "}
                    <a href="">ver mais</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Grid End*/}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
