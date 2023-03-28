# git pull
/*actualizar el repositorio local

# git branch 
/*Nos indica en que rama trabajamos

# git checkout -b NombreRama
/* Crea la rama e ingresas a ella

# git checkout NombreRama
/* Solo para cambiar de rama 

# git push origin <rama>
/*Sube las ramas al repositorio remoto

# git merge NombreRama
/* Para traer los cambios a la rama principal-(este comando se ejecuta de la rama -main-)

# git push origin main
/*Subir cambios al repositorio remoto

# git status o git status -s
/* Para ver el estado de los archivos con respecto a git (M, A, ??)
# git log --oneline
/* Muestra el historial de los commit y muestra el identificador del mismo 

# Indicar el tipo de commit (los principales) 
git commit -m "palabraClave:  mensaje"

1. `feat`: Una nueva característica o contribución a una
2.  `fix`: Una solución a un bug o error
3. `docs`: Documentación
4. `perf`: Código que mejora el performance
5. `refactor`: Código que no es sobre docs, no mejora el performance o es sobre una característica. Usualmente solo cambia la forma de algo ya hecho sin que entre en un **perf.**
6. `test`: Cuando se trata de código para testing

# Documentacion en ( https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/trabajando-con-ramas.html )