
/* Definir clase Empleado */
class Empleado {
    constructor(codigo, nombre, apellido, correo, cargo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.cargo = cargo;
    }

    sueldoBruto() {
        switch (this.cargo) {
            case "Jefe":
                return 5000;
            case "Analista":
                return 4000;
            case "Programador":
                return 3000;
            case "Soporte":
                return 2000;
            case "Asistente":
                return 1500;
            default:
                return 0;
        }
    }

    descuento() {
        const sueldo = this.sueldoBruto();
        return sueldo * 0.125;
    }

    sueldoNeto() {
        const sueldo = this.sueldoBruto();
        const descuento = this.descuento();
        return sueldo - descuento;
    }
}

// Preguntar al usuario el cargo del empleado usando prompt()
const cargoEmpleado = prompt(`Ingrese el cargo:
        Jefe
        Analista
        Programador
        Soporte
        Asistente
    `);

// Crear una instancia de Empleado con el cargo ingresado por el usuario
const empleado1 = new Empleado(1, "Juan", "Pérez", "juan@example.com", cargoEmpleado);

// Mostrar los resultados
const mensaje = `Sueldo bruto: $${empleado1.sueldoBruto()}\nDescuento: $${empleado1.descuento()}\nSueldo neto: $${empleado1.sueldoNeto()}`;
alert(mensaje);