import { DialogDemoCliente } from '@/components/ui/dialogcliente';
import { Input } from '@/components/ui/input';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clientes',
        href: '/clientes',
    },
];

const clientes = [
    {
        id: 1,
        nombre: 'Ana Pérez',
        identificacion: '1023345678',
        correo: 'ana@gmail.com',
        direccion: 'Bogotá',
        telefono: '3012345678',
    },
];

export default function Clientes() {
    return (
        <AppLayout title="Clientes" description="Gestion de Clientes" breadcrumbs={breadcrumbs}>
            <Head title="Clientes" />
            <div className="m-4 flex flex-row gap-4">
                <DialogDemoCliente />
                <Input className="w-[200px]" placeholder="Buscar Cliente" />
            </div>
            <Table className="w-full p-4">
                <TableCaption>Lista de los clientes recientes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Idenficación</TableHead>
                        <TableHead>Correo</TableHead>
                        <TableHead>Dirección</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Saldo</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {clientes.map((clientes) => (
                        <TableRow key={clientes.id}>
                            <TableCell>{clientes.id}</TableCell>
                            <TableCell>{clientes.nombre}</TableCell>
                            <TableCell>{clientes.identificacion}</TableCell>
                            <TableCell>{clientes.correo}</TableCell>
                            <TableCell>{clientes.direccion}</TableCell>
                            <TableCell>{clientes.telefono}</TableCell>
                            <TableCell>
                                {' '}
                                <span>$ </span> 250000
                            </TableCell>
                            <TableCell>
                                <Select>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Acción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="editar">Editar</SelectItem>
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
            <PlaceholderPattern />
        </AppLayout>
    );
}
