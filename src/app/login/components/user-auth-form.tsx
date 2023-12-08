"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/input";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-y-[24px]">
          <div className="grid gap-[16px]">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="user"
              placeholder="Nombre de usuario"
              type="text"
              autoCapitalize="none"
              disabled={isLoading}
            />
            <Input
              id="user"
              placeholder="Contraseña"
              type="password"
              autoCapitalize="none"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Iniciar sesión
          </Button>
        </div>
      </form>
    </div>
  );
}
