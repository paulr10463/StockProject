-- on db "Acciones"

CREATE TABLE registro_acciones (
    id SERIAL PRIMARY KEY,
    nombre_accion VARCHAR(100),
    fecha_compra DATE,
    precio_compra DOUBLE PRECISION,
    cantidad_acciones INT,
    costo_total_compra DOUBLE PRECISION,
    cambio DOUBLE PRECISION,
    ganancia_perdida DOUBLE PRECISION
);