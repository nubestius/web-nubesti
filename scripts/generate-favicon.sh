#!/bin/bash

# Script para generar todos los tamaños de favicon desde una imagen fuente
# Uso: ./generate-favicon.sh ruta/a/imagen-fuente.png

SOURCE_IMAGE=$1
FAVICON_DIR="public/images/favicons"

if [ -z "$SOURCE_IMAGE" ]; then
  echo "Error: Debes especificar la ruta de la imagen fuente"
  echo "Uso: $0 ruta/a/imagen-fuente.png"
  exit 1
fi

if [ ! -f "$SOURCE_IMAGE" ]; then
  echo "Error: La imagen fuente no existe: $SOURCE_IMAGE"
  exit 1
fi

echo "🎨 Generando favicons desde: $SOURCE_IMAGE"

# Crear directorio si no existe
mkdir -p "$FAVICON_DIR"

# Verificar si ImageMagick está instalado
if ! command -v convert &> /dev/null; then
  echo "❌ ImageMagick no está instalado. Instalando..."
  if command -v brew &> /dev/null; then
    brew install imagemagick
  else
    echo "Por favor instala ImageMagick manualmente"
    exit 1
  fi
fi

# Generar PNG de diferentes tamaños
echo "📱 Generando apple-touch-icon.png (180x180)"
convert "$SOURCE_IMAGE" -resize 180x180 "$FAVICON_DIR/apple-touch-icon.png"

echo "🖥️ Generando favicon-96x96.png"
convert "$SOURCE_IMAGE" -resize 96x96 "$FAVICON_DIR/favicon-96x96.png"

echo "📱 Generando web-app-manifest-192x192.png"
convert "$SOURCE_IMAGE" -resize 192x192 "$FAVICON_DIR/web-app-manifest-192x192.png"

echo "📱 Generando web-app-manifest-512x512.png"
convert "$SOURCE_IMAGE" -resize 512x512 "$FAVICON_DIR/web-app-manifest-512x512.png"

# Generar ICO (con múltiples tamaños)
echo "💾 Generando favicon.ico"
convert "$SOURCE_IMAGE" -resize 48x48 "$FAVICON_DIR/temp48.png"
convert "$SOURCE_IMAGE" -resize 32x32 "$FAVICON_DIR/temp32.png"
convert "$SOURCE_IMAGE" -resize 16x16 "$FAVICON_DIR/temp16.png"
convert "$FAVICON_DIR/temp48.png" "$FAVICON_DIR/temp32.png" "$FAVICON_DIR/temp16.png" "$FAVICON_DIR/favicon.ico"
rm "$FAVICON_DIR/temp48.png" "$FAVICON_DIR/temp32.png" "$FAVICON_DIR/temp16.png"

# Generar SVG (si la fuente no es SVG)
if [[ "$SOURCE_IMAGE" != *.svg ]]; then
  echo "🎨 Generando favicon.svg"
  # Convertir a SVG básico
  convert "$SOURCE_IMAGE" "$FAVICON_DIR/favicon.svg"
else
  echo "📋 Copiando favicon.svg"
  cp "$SOURCE_IMAGE" "$FAVICON_DIR/favicon.svg"
fi

echo "✅ ¡Favicons generados exitosamente!"
echo "📁 Ubicación: $FAVICON_DIR"
ls -la "$FAVICON_DIR"
