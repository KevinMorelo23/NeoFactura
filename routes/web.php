<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('facturacion', function () {
        return Inertia::render('facturacion');
    })->name('facturacion');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('cotizaciones', function () {
        return Inertia::render('cotizaciones');
    })->name('cotizaciones');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('clientes', function () {
        return Inertia::render('clientes');
    })->name('clientes');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('informes', function () {
        return Inertia::render('informes');
    })->name('informes');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('productos', function () {
        return Inertia::render('productos');
    })->name('productos');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
