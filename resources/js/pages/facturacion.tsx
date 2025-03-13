import { Badge } from '@/components/ui/badge';
import { DatePickerWithRange } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { DialogDemo } from '@/components/ui/modalcreate';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { BadgeCheckIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Facturación',
        href: '/facturacion',
    },
];

const facturas = [
    {
        id: 1,
        numeroFactura: 'INV001',
        fechaEmision: 'Mar-13-2025',
        nombreCliente: 'Kevin Morelo Negrette',
        identificacion: '1003069860',
        direccion: 'Montería',
        telefono: '3114079342',
        estado: 'pagado',
        enviado: true,
        subtotal: 6500,
    },
    {
        id: 2,
        numeroFactura: 'INV002',
        fechaEmision: 'Mar-14-2025',
        nombreCliente: 'Ana Pérez',
        identificacion: '1023345678',
        direccion: 'Bogotá',
        telefono: '3012345678',
        estado: 'pendiente',
        enviado: false,
        subtotal: 12500,
    },
    {
        id: 3,
        numeroFactura: 'INV003',
        fechaEmision: 'Mar-15-2025',
        nombreCliente: 'Juan Pérez',
        identificacion: '1023345678',
        direccion: 'Bogotá',
        telefono: '3012345678',
        estado: 'pagado',
        enviado: true,
        subtotal: 12500,
    },
    {
        id: 4,
        numeroFactura: 'INV004',
        fechaEmision: 'Mar-16-2025',
        nombreCliente: 'Carlos Pérez',
        identificacion: '1023345678',
        direccion: 'Bogotá',
        telefono: '3012345678',
        estado: 'pendiente',
        enviado: false,
        subtotal: 12500,
    },
];

export default function Facturacion() {
    return (
        <AppLayout title="Facturación" description="Facturación de productos"  breadcrumbs={breadcrumbs}>
            <Head title="Facturación" />
            
            <div className="mt-4 mb-4 flex flex-row gap-4">
                <DialogDemo />

                <Input className="w-[200px]" placeholder="Buscar Factura" />
                <Select>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Periodo de Tiempo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="editar">Hoy</SelectItem>
                        <SelectItem value="editar">Ultimos 7 días</SelectItem>
                        <SelectItem value="pdf">Ultimos 30 días</SelectItem>
                        <SelectItem value="imprimir">Ultimos 6 meses</SelectItem>
                        <SelectItem value="email">Ultimo año</SelectItem>
                    </SelectContent>
                </Select>
                <DatePickerWithRange />
            </div>
            <Table className="w-full p-4">
                <TableCaption>Lista de las facturas recientes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Num Factura</TableHead>
                        <TableHead>Fecha Emisión</TableHead>
                        <TableHead>Nombre Cliente</TableHead>
                        <TableHead>Identificación</TableHead>
                        <TableHead>Dirección</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Enviado</TableHead>
                        <TableHead>Subtotal</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {facturas.map((factura) => (
                        <TableRow key={factura.id}>
                            <TableCell>{factura.numeroFactura}</TableCell>
                            <TableCell>{factura.fechaEmision}</TableCell>
                            <TableCell>{factura.nombreCliente}</TableCell>
                            <TableCell>{factura.identificacion}</TableCell>
                            <TableCell>{factura.direccion}</TableCell>
                            <TableCell>{factura.telefono}</TableCell>
                            <TableCell>
                                <Badge className={factura.estado === 'pagado' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}>
                                    {factura.estado}
                                </Badge>
                            </TableCell>
                            <TableCell>{factura.enviado ? <BadgeCheckIcon className="h-5 w-5 text-green-500" /> : '❌'}</TableCell>
                            <TableCell className="font-bold">
                                <span>$</span> {factura.subtotal}
                            </TableCell>
                            <TableCell>
                                <Select>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Acción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="editar">Editar</SelectItem>
                                        <SelectItem value="editar">Cambiar estado</SelectItem>
                                        <SelectItem value="pdf">Descargar PDF</SelectItem>
                                        <SelectItem value="imprimir">Imprimir</SelectItem>
                                        <SelectItem value="email">Enviar por email</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination className="mt-4 justify-end">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </AppLayout>
    );
}
