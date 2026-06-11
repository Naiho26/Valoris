#!/bin/bash
# VALORIS — Vercel Deploy Script
# Voraussetzung: Vercel CLI installiert (npm i -g vercel)
# Einmalig ausführen, dann ist die Seite live.

set -e

echo "📦 Valoris deployen..."

# In Projektordner wechseln (passe den Pfad ggf. an)
cd "$(dirname "$0")"

# Abhängigkeiten installieren
echo "📥 Abhängigkeiten installieren..."
npm install

# Zu Vercel deployen (fragt beim ersten Mal nach Login)
echo "🚀 Deploy zu Vercel..."
npx vercel --prod \
  --name valoris \
  --yes

echo "✅ Fertig! Die Seite ist live."
