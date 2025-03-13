import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Informes',
        href: '/informes',
    },
];

export default function Facturacion() {
    return (
        <AppLayout title="Informes" description="Generador de Informes" breadcrumbs={breadcrumbs}>
            <Head title="Informes" />
            <PlaceholderPattern />
        </AppLayout>
    );
}
