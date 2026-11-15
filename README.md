# T1 - Billetera Digital (Angular)

## Descripción del Proyecto

**Billetera Digital** es una aplicación web desarrollada en Angular para el curso **Soluciones Web y Aplicaciones Distribuidas** de la Universidad Privada del Norte (UPN).

La aplicación simula el comportamiento básico de una billetera electrónica permitiendo realizar **recargas** y **gastos** sobre un saldo disponible, manteniendo además un historial de movimientos realizados durante la ejecución de la aplicación.

El proyecto fue desarrollado aplicando el patrón de comunicación **Padre-Hijo** en Angular mediante las funciones modernas **input()** y **output()**, sin utilizar servicios, bases de datos ni backend, tal como se solicita en la práctica.

---

## Integrantes

- Jhon Davys Ramirez Ledesma - N00215941
- Juan Martin Chávez Anto - N00391243
- Lesly Andrea Isla Ventura	- N00398983
- Jackeline Ivette Linares Chávez - N00398835

---

## Objetivos Implementados

- Mostrar un saldo inicial de **S/ 250.00**.
- Registrar recargas de saldo.
- Registrar gastos de saldo.
- Validar que los gastos no superen el saldo disponible.
- Validar montos mayores a cero.
- Mostrar mensajes de error cuando corresponda.
- Mantener un historial de movimientos.
- Aplicar Bootstrap para una interfaz moderna y responsive.
- Implementar comunicación entre componentes mediante `input()` y `output()`.

---

## Tecnologías Utilizadas

| Tecnología | Versión |
|------------|----------|
| Angular | 20.x |
| TypeScript | 5.x |
| Node.js | 20+ |
| Bootstrap | 5.3 |
| HTML5 | Última |
| CSS3 | Última |

---

## Arquitectura de Componentes

### BilleteraComponent (Padre)

Responsable de:

- Mantener el saldo actual.
- Mantener el historial de movimientos.
- Recibir eventos emitidos por el componente hijo.
- Actualizar la interfaz de usuario.
- Mostrar movimientos registrados.

### NuevoMovimientoComponent (Hijo)

Responsable de:

- Mostrar el formulario de registro.
- Validar montos ingresados.
- Verificar saldo disponible para gastos.
- Emitir movimientos válidos al componente padre.

### Modelo Movimiento

Representa cada operación registrada por el usuario:

```typescript
{
  tipo: 'Recarga' | 'Gasto',
  monto: number
}
```

---

## Funcionalidades

### Gestión de Saldo

La aplicación inicia con un saldo de:

```text
S/ 250.00
```

Las recargas incrementan el saldo y los gastos lo reducen.

---

### Registro de Movimientos

Cada operación válida genera un registro en el historial mostrando:

- Tipo de movimiento.
- Monto.
- Orden cronológico inverso (el más reciente aparece primero).

---

### Validaciones Implementadas

#### Monto vacío

La aplicación impide registrar operaciones sin ingresar un monto.

#### Monto igual a cero

No se permiten operaciones con monto cero.

#### Monto negativo

No se permiten montos negativos.

#### Saldo insuficiente

Cuando un gasto supera el saldo disponible:

```text
No tienes saldo suficiente para cubrir este gasto.
```

La operación es rechazada.

---

## Estructura del Proyecto

```text
src
└── app
    ├── billetera
    │   ├── billetera.ts
    │   ├── billetera.html
    │   └── billetera.css
    │
    ├── nuevo-movimiento
    │   ├── nuevo-movimiento.ts
    │   ├── nuevo-movimiento.html
    │   └── nuevo-movimiento.css
    │
    ├── movimientos.model.ts
    ├── app.ts
    └── app.html
```

---

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/Dzhonx/billetera-digital-angular
```

### Ingresar al proyecto

```bash
cd billetera-angular
```

### Instalar dependencias

```bash
npm install
```

---

## Ejecución del Proyecto

Iniciar el servidor de desarrollo:

```bash
ng serve -o
```

La aplicación estará disponible en:

```text
http://localhost:4200
```

---

## Casos de Prueba

### Caso 1

Acción:

```text
Recarga S/ 100.00
```

Resultado esperado:

```text
Saldo: S/ 350.00
```

---

### Caso 2

Acción:

```text
Gasto S/ 50.00
```

Resultado esperado:

```text
Saldo: S/ 300.00
```

---

### Caso 3

Acción:

```text
Gasto S/ 400.00
```

Resultado esperado:

```text
Mensaje de saldo insuficiente.
Saldo sin cambios.
```

---

### Caso 4

Acción:

```text
Monto = 0
```

Resultado esperado:

```text
Operación rechazada.
```

---

### Caso 5

Acción:

```text
Monto negativo.
```

Resultado esperado:

```text
Operación rechazada.
```

---

## Repositorio

[URL_DEL_REPOSITORIO](https://github.com/Dzhonx/billetera-digital-angular)

---

## Conclusiones

La implementación permitió aplicar los conceptos fundamentales de Angular relacionados con:

- Creación de componentes standalone.
- Comunicación entre componentes mediante `input()` y `output()`.
- Binding de propiedades y eventos.
- Directivas de control de flujo (`@if` y `@for`).
- Validación de formularios.
- Maquetación responsiva utilizando Bootstrap.
