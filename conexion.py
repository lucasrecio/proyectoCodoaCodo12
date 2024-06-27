import mysql.connector

# Establezco la conexión usando el archivo de configuración
from config_db import conexion

# Interacción con los datos
cursor = conexion.cursor()

consulta = "SELECT * FROM productos;"
cursor.execute(consulta)

datos = cursor.fetchall()
for dato in datos:
    print(dato)

# SIEMPRE CERRAR LA CONEXIÓN!!!
conexion.close()
