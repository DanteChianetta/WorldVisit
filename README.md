# WorldVisit - Guía de trabajo en equipo con Git

## 1. Configuración inicial (una sola vez)

Configurar nombre y email:

git config --global user.name "Tu Nombre"
git config --global user.email "tu-email-de-github@mail.com"

---

## 2. Configurar SSH (recomendado)

Ver si ya tenés clave:

ls ~/.ssh

Si NO existe id_ed25519.pub:

ssh-keygen -t ed25519 -C "tu-email-de-github@mail.com"

Enter a todo.

Copiar la clave pública:

cat ~/.ssh/id_ed25519.pub

Ir a GitHub:
Settings → SSH and GPG keys → New SSH key
Pegar la clave.

Probar conexión:

ssh -T git@github.com

---

## 3. Clonar el proyecto

git clone git@github.com:DanteChianetta/WorldVisit.git
cd WorldVisit

Instalar dependencias:

npm install

Levantar app:

ionic serve

---

## 4. Flujo de trabajo en equipo

ANTES de empezar:

git checkout main
git pull

Crear rama nueva:

git checkout -b feature/nombre

Trabajar normalmente.

Guardar cambios:

git add .
git commit -m "mensaje claro"

Subir rama:

git push -u origin feature/nombre

---

## 5. Pull Request

Ir a GitHub → abrir Pull Request hacia main.

NO trabajar directo sobre main.

---

## 6. Regla clave

Siempre trabajar en ramas.
Nunca pushear directo a main.
