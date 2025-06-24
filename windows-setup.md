# Configuración Git en Windows 11

## 1. Instalar Git (si no lo tienes)
- Descargar de: https://git-scm.com/download/win
- Instalar con configuración por defecto
- Esto incluye Git Bash, Git GUI y integración con PowerShell

## 2. Verificar instalación
```powershell
# Abrir PowerShell (Win + X → Windows PowerShell)
git --version
```

## 3. Navegar al directorio del proyecto
```powershell
# Cambiar a la unidad donde está tu proyecto (ejemplo: D:)
cd D:\ruta\a\tu\proyecto

# O si está en C:
cd C:\Users\TuUsuario\Documents\asistente-financiero
```

## 4. Configurar Git (primera vez)
```powershell
git config --global user.name "dsm-Trafic"
git config --global user.email "tu-email@gmail.com"
```

## 5. Comandos para subir al repositorio
```powershell
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit: Asistente Financiero"

# Conectar con GitHub
git remote add origin https://github.com/dsm-Trafic/asistente-financiero.git

# Subir código
git branch -M main
git push -u origin main
```

## 6. Si tienes problemas de autenticación
```powershell
# GitHub ya no acepta contraseñas, necesitas un token
# Ve a: GitHub → Settings → Developer settings → Personal access tokens
# Crea un token y úsalo como contraseña
```

## Alternativas de terminal:

### Git Bash (Recomendado para Git)
- Clic derecho en la carpeta → "Git Bash Here"
- Terminal tipo Unix, más compatible con comandos Git

### Windows Terminal (Moderno)
- Instalar desde Microsoft Store
- Combina PowerShell, CMD y Git Bash en una interfaz moderna

### VS Code Terminal
- Si usas VS Code, puedes usar su terminal integrada
- Ctrl + ` para abrir terminal