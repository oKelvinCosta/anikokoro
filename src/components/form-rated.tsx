import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function FormRated() {
  return (
    <form>
      <Field>
        <ButtonGroup>
          <Input
            id="input-button-group"
            className="h-12"
            placeholder="Buscar livro avaliado"
          />
          <Button variant="outline" className="h-12 w-12">
            <MagnifyingGlassIcon size={40} color="#303f73" weight="bold" />
          </Button>
        </ButtonGroup>
      </Field>
    </form>
  );
}
