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

export function DialogDemoCliente() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Crear Cliente</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Crear Cliente</DialogTitle>
                    <DialogDescription>
                        Agrega los datos para agregar un cliente
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2 py-4">
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="nombre" >
                                Nombre
                            </Label>
                            <Input id="name" placeholder="Pedro Duarte" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="apellido" >
                                Identificación
                            </Label>
                            <Input id="identificacion" placeholder="1023345678" />
                        </div>
                    

                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="telefono" >
                            Teléfono
                        </Label>
                        <Input id="telefono" placeholder="3012345678" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="email" >
                            Email
                        </Label>
                        <Input id="email" placeholder="pedro@gmail.com" />
                    </div>
                    
                    </div>
                    <div className="flex flex-col items-start gap-2 mt-2">
                        <Label htmlFor="direccion" >
                            Dirección
                        </Label>
                        <Input id="direccion" placeholder="Montería" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Guardar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogDemoCliente;