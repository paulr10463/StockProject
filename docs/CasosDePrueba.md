# ESCUELA POLITÉCNICA NACIONAL

## CONSTRUCCIÓN Y EVALUACIÓN DEL SOFTWARE 


### GRUPO 2
---
Integrantes:

- Paúl Román
- René Simbaña
- David Yánez

# Casos de Prueba

|***Prueba 1***||
|-|-|
|**Identificador**|CP01|
|**Fecha**|11 de Enero del 2024|
|**Nombre del caso**|Agregar Stock con valores válidos.|
|**Objetivo**|Verificar que el sistema permite agregar un stock con valores válidos.|
|**Contexto**|El usuario debe mantener activa la página web correspondiente a al registro de acciones compradas.|
|**Proceso**|1. El usuario ingresa un nombre de stock válido. <br/> 2. Ingresa una fecha de compra válida. <br/> 3. Ingresa un precio de compra válido. <br/> 4. Ingresa una cantidad válida. <br/> 5. Presiona el botón para agregar el stock.|
|**Resultado esperado**|**Resultado Obtenido**|
|Se agrega el stock con éxito y se muestra en la interfaz.|El stock se añade exitosamente y se presenta en la interfaz.|

|***Prueba 2***||
|-|-|
|**Identificador**|CP02|
|**Fecha**|11 de Enero del 2024|
|**Nombre del caso**|Agregar Stock con valores inválidos.|
|**Objetivo**|Verificar que el sistema maneje adecuadamente la adición de un stock con valores inválidos.|
|**Contexto**|El usuario debe mantener activa la página web correspondiente a al registro de acciones compradas y ha ingresado al menos un valor no válido en los campos.|
|**Proceso**|1. El usuario ingresa un nombre de stock válido. <br/> 2. Ingresa una fecha de compra válida. <br/> 3. Ingresa un precio de compra no numérico o negativo. <br/> 4. Ingresa una cantidad no numérica o negativa. <br/> 5. Presiona el botón para agregar el stock.|
|**Resultado esperado**|**Resultado Obtenido**|
|Se muestra un mensaje de error indicando que los valores ingresados son inválidos, y el stock no se agrega.|Un mensaje de error se exhibe para señalar que los valores ingresados no son válidos, y el stock no se incorpora.|

|***Prueba 3***||
|-|-|
|**Identificador**|CP03|
|**Fecha**|11 de Enero del 2024|
|**Nombre del caso**|Visualizar lista de stocks.|
|**Objetivo**|Comprobar que la lista de stocks se muestra correctamente en la interfaz.|
|**Contexto**|El usuario previamente debe haber agregado stocks al sistema|
|**Proceso**|1. El usuario accede a la sección que muestra la lista de stocks.|
|**Resultado esperado**|**Resultado Obtenido**|
|Se visualiza la lista de stocks existentes en la interfaz según lo almacenado en el sistema.| La lista de stocks que se encuentra almacenada en el sistema se presenta en la interfaz.|