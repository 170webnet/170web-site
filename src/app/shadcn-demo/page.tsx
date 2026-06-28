"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ShadcnDemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">shadcn/ui — demo</h1>
          <p className="text-muted-foreground">
            Verificação de renderização dos componentes shadcn convivendo com o Bootstrap/template.
          </p>
        </header>

        {/* Buttons */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium">Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Card + form controls */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>Com inputs e controles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="voce@exemplo.com" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms">Aceito os termos</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">Notificações</Label>
              </div>
              <Progress value={66} />
            </CardContent>
            <CardFooter className="gap-3">
              <Button>Salvar</Button>
              <Button variant="outline">Cancelar</Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                Componentes shadcn renderizando com os tokens de tema (oklch).
              </AlertDescription>
            </Alert>

            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>PX</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
            </div>

            <Tabs defaultValue="conta">
              <TabsList>
                <TabsTrigger value="conta">Conta</TabsTrigger>
                <TabsTrigger value="senha">Senha</TabsTrigger>
              </TabsList>
              <TabsContent value="conta" className="text-sm text-muted-foreground pt-2">
                Configurações da conta.
              </TabsContent>
              <TabsContent value="senha" className="text-sm text-muted-foreground pt-2">
                Alterar senha.
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Accordion */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium">Accordion</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>É acessível?</AccordionTrigger>
              <AccordionContent>Sim. Segue padrões WAI-ARIA.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>É estilizável?</AccordionTrigger>
              <AccordionContent>Sim, via Tailwind e os tokens de tema.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
