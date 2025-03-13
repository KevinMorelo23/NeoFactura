import { Button } from '@/components/ui/button';
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
        title: 'Productos',
        href: '/productos',
    },
];

const productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripcion del producto 1',
        precio: 100000,
        stock: 10,
        creado: '2023-01-01',
        actualizado: '2023-01-01',
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripcion del producto 2',
        precio: 200000,
        stock: 20,
        creado: '2023-01-02',
        actualizado: '2023-01-02',
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Descripcion del producto 3',
        precio: 30000,
        stock: 30,
        creado: '2023-01-03',
        actualizado: '2023-01-03',
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripcion: 'Descripcion del producto 4',
        precio: 4000,
        stock: 40,
        creado: '2023-01-04',
        actualizado: '2023-01-04',
    },
];

export default function Productos() {
    return (
        <AppLayout title="Productos" description="Gestion de Productos" breadcrumbs={breadcrumbs}>
            <Head title="Productos" />
            <div className="m-4 flex flex-row gap-4">
                <Button variant="secondary">Crear Producto</Button>
                <Input className="w-[200px]" placeholder="Buscar Producto" />
            </div>
            <Table className="w-full p-4">
                <TableCaption>Lista de los productos</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Descripcion</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Creado</TableHead>
                        <TableHead>Actualizado</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productos.map((productos) => (
                        <TableRow key={productos.id}>
                            <TableCell>{productos.id}</TableCell>
                            <TableCell>{productos.nombre}</TableCell>
                            <TableCell>{productos.descripcion}</TableCell>
                            <TableCell>
                                <span>$ </span> {productos.precio}
                            </TableCell>
                            <TableCell>{productos.stock}</TableCell>
                            <TableCell>{productos.creado}</TableCell>
                            <TableCell>{productos.actualizado}</TableCell>
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
