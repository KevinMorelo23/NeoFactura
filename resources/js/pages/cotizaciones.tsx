import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Cotizaciones',
        href: '/cotizaciones',
    },
];

export default function Facturacion() {
    return (
        <AppLayout title="Cotizaciones" description="Cotizaciones" breadcrumbs={breadcrumbs}>
            <Head title="Cotizaciones" />
            <PlaceholderPattern />
        </AppLayout>
    );
}
