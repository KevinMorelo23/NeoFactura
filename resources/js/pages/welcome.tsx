import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Foto1 from '../../../public/Invoice.svg';
import Foto2 from '../../../public/Invoice2.svg';
import Foto3 from '../../../public/Invoice3.svg';
export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="fixed top-5 mb-6 w-full max-w-[335px] rounded-sm px-4 py-2 text-sm backdrop-blur-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-between gap-4">
                        <div>
                            <h1 className="text-xl font-bold text-[#EDEDEC]">NeoFactura</h1>
                        </div>
                        <div>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-white px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#fff] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Registrate Gratis
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>
                <div className="mt-20 flex h-screen w-full items-start justify-center">
                    <main className="flex w-full flex-col-reverse lg:max-w-4xl lg:flex-col">
                        <section className="mb-10 items-center justify-items-center text-center">
                            <h1 className="text-6xl font-bold text-white">Simplifica tu Facturación con Nuestra Plataforma</h1>
                            <p className="mt-4 text-white/70">
                                Genera, envía y gestiona tus facturas de manera rápida y segura. Automatiza tu negocio con facturas en PDF, envío por
                                correo y SMS, cotizaciones e informes detallados.
                            </p>
                            <img src={Foto1} alt="" className="mt-10 w-sm rounded-lg" />
                        </section>

                        <section className="mt-10 flex flex-col items-start justify-center gap-20">
                            <div className="flex flex-row items-start justify-center gap-10">
                                <div className="w-3/4">
                                    <img src={Foto3} alt="" className="w-full" />
                                </div>
                                <div className="mt-4 items-start">
                                    <h2 className="text-5xl font-semibold text-white">Facturación en Segundos</h2>
                                    <p className="mt-4 text-base/7 text-white/70">
                                        Olvídate de procesos tediosos. Genera y envía tus facturas en solo unos clics, sin complicaciones ni demoras.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row-reverse items-start justify-center gap-10">
                                <div className="w-3/4">
                                    <img src={Foto2} alt="" className="w-sm" />
                                </div>
                                <div className="mt-4 items-start">
                                    <h2 className="text-5xl font-semibold text-white">Gestión Eficiente, Resultados Óptimos</h2>
                                    <p className="relaxed mt-4 text-base/7 text-white/70">
                                        Automatiza tu facturación, organiza tus clientes y obtén informes detallados para tomar mejores decisiones en
                                        tu negocio.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
