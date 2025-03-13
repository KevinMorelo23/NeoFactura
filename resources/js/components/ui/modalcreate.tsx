import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import DatePickerDemo from "./datepickeronly"
import DialogDemoCliente from "./dialogcliente"

export function DialogDemo() {
  const [productos, setProductos] = useState([
    { id: 1, cantidad: 2, nombre: "Zapatos Nike", estado: "Disponible", precio: 150000 },
    { id: 2, cantidad: 1, nombre: "Adidas Superstar", estado: "Disponible", precio: 100000 }
  ])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Crear Factura</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Crear Factura</DialogTitle>
          <DialogDescription className="flex flex-row justify-between">
            <p>

            Agrega los datos para generar la factura
            </p>
            <DialogDemoCliente />
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {/* Sección de datos básicos */}
          <div className="flex flex-row items-center gap-4">
            <Label htmlFor="numFactura">Num Factura</Label>
            <Input id="numFactura" value="Q00045" readOnly />
            
            <Label htmlFor="fecha">Fecha</Label>
            <DatePickerDemo/>

            <Label htmlFor="cliente">Cliente</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccione el cliente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kevin">Kevin</SelectItem>
                <SelectItem value="jose">Jose</SelectItem>
                <SelectItem value="morelo">Morelo</SelectItem>
                <SelectItem value="negrette">Negrette</SelectItem>
                <SelectItem value="ana">Ana</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-row items-center gap-4">
            <Label htmlFor="estado">Estado</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccione el estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="pagado">Pagado</SelectItem>
                <SelectItem value="cancelado">Cancelado</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="direccion">Dirección</Label>
            <Input id="direccion" placeholder="Montería"  />
          </div>

          <Separator />

          {/* Sección de productos */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-row gap-2">
              <Input id="buscarProducto" placeholder="Buscar Producto" className="w-[200px]" />
              <Input id="cantidad" placeholder="Cantidad" className="w-[100px]" />
              <Button variant="secondary">Agregar Producto</Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Precio</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productos.map((producto) => (
                  <TableRow key={producto.id}>
                    <TableCell>{producto.id}</TableCell>
                    <TableCell>{producto.cantidad}</TableCell>
                    <TableCell>{producto.nombre}</TableCell>
                    <TableCell>{producto.estado}</TableCell>
                    <TableCell>${producto.precio.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Resumen de factura */}
            <div className="flex flex-col items-end justify-end gap-4 w-full text-sm">
              <p>Subtotal: ${productos.reduce((acc, p) => acc + p.precio, 0).toLocaleString()}</p>
              <p>IVA: 19%</p>
              <Separator />
              <p className="font-bold text-xl">Total: ${(productos.reduce((acc, p) => acc + p.precio, 0) * 1.19).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Guardar y enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
