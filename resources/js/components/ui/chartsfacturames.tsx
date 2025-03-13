"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", cotizacion: 186, facturacion: 80 },
  { month: "February", cotizacion: 305, facturacion: 200 },
  { month: "March", cotizacion: 237, facturacion: 120 },
  { month: "April", cotizacion: 73, facturacion: 190 },
  { month: "May", cotizacion: 209, facturacion: 130 },
  { month: "June", cotizacion: 214, facturacion: 140 },
]

const chartConfig = {
  cotizacion: {
    label: "cotizacion",
    color: "hsl(var(--chart-1))",
  },
  facturacion: {
    label: "facturacion",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ComponentFacturaMes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafico Barrs</CardTitle>
        <CardDescription>Enero - Junio 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="cotizacion" fill="var(--chart-1)" radius={4} />
            <Bar dataKey="facturacion" fill="var(--chart-2)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none ">
        Comparacion de Cotizaciones con Facturacion <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-center">
          Se muestran por cada mes
        </div>
      </CardFooter>
    </Card>
  )
}
export default ComponentFacturaMes;