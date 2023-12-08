import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserAuthForm } from "./components/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900 bg-login-image bg-cover bg-no-repeat" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href={"/"}>
              <Image src={"/assets/logo.png"} width={100} height={100} alt="" />
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                © Copyright LOCMEX. Todos los derechos reservados.
              </p>
              <footer className="text-sm">Luthor Solutions</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 flex items-center justify-center m-auto h-full">
          <div className="m-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Iniciar sesión
              </h1>
              <p className="text-sm text-muted-foreground">
                Ingresa tu usuario y contraseña para iniciar sesión
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Al dar click en Continuar, estás aceptando nuestros{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terminos y Condiciones
              </Link>{" "}
              y{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
