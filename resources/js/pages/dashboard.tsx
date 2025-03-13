import ComponentRelation from '@/components/ui/chartrelationfacturacotizacion';
import ComponentFacturaMes from '@/components/ui/chartsfacturames';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-row gap-10 p-4">
                <ComponentRelation />
                <ComponentFacturaMes />
            </div>
        </AppLayout>
    );
}
