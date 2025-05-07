# AdminDashboard

Este proyecto es una plataforma administrativa construida con Angular, utilizando una arquitectura standalone y buenas prácticas modernas. Incluye autenticación, rutas protegidas, visualización de datos, gráficos, un perfil de usuario y un diseño moderno con Angular Material.

## ✨ Características principales

- Login y registro con validaciones visuales.
- Gestión de sesión con `BehaviorSubject`.
- Dashboard con tarjetas KPI, tabla de usuarios y gráfico estadístico.
- Rutas protegidas con `AuthGuard`.
- Módulo de perfil de usuario con edición.
- Estilo moderno y responsive con Angular Material.
- Fake backend con `json-server` y persistencia en `db.json`.

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu_usuario/admin-dashboard.git
cd admin-dashboard
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor JSON (en otra terminal):

```bash
npx json-server --watch db.json
```

4. Ejecutar la app Angular:

```bash
ng serve
```

Accede desde tu navegador en `http://localhost:4200/`.

## 🛠️ Scripts útiles

- `ng generate component pages/nombre --standalone --flat --skip-tests` → Crea un componente standalone sin subcarpetas.
- `npx json-server --watch db.json` → Inicia backend simulado.

## 🧠 Conocimientos aplicados

- Angular Standalone Components
- Reactive Forms y Template Forms
- Material Design
- Observables y programación reactiva
- HttpClient para comunicación con API
- Routing y lazy loading
- LocalStorage y persistencia de sesión

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   ├── layout/
│   ├── services/
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── main.ts
├── assets/
│   └── img/
└── db.json
```

## 📷 Capturas de pantalla

Puedes agregar capturas de cada vista en la carpeta `/assets/img`.

---

Desarrollado por [Felipe Pinzón Ruiz]. ¡Gracias por visitar el proyecto!
