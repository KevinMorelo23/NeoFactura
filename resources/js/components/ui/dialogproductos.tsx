import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import exp from "constants"

export function DialogDemoProductos() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Crear Producto</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crear Producto</DialogTitle>
                    <DialogDescription>
                        Agrega los datos para agregar un Producto
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2 py-4">
                    <div className="flex flex-col items-start  gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col items-start gap-2">
                                <Label htmlFor="nombre" >
                                    Nombre
                                </Label>
                                <Input id="name" placeholder="Nike Air Max" />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Label htmlFor="telefono" >
                                    Precio
                                </Label>
                                <Input id="telefono" placeholder="$ 420,000" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full items-start gap-2 mt-4">
                            <Label htmlFor="apellido" >
                                Descripción
                            </Label>
                            <Input id="identificacion" placeholder="Zapato  de alta calidad" />
                        </div>




                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit">Guardar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogDemoProductos;