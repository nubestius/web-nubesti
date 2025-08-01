#!/bin/bash

echo "🔒 Starting secure deployment build..."

# Security pre-checks
echo "🛡️ Running security pre-checks..."

# Check for sensitive files
if [ -f ".env" ] || [ -f ".env.local" ]; then
    echo "⚠️  Warning: Environment files detected in build"
fi

# Run npm audit
echo "📦 Checking dependencies..."
npm audit --audit-level moderate

# Check if the script is running in a production or preview environment
if [[ $VERCEL_ENV == "production" ]]; then
  # Use the production project URL and prepend 'https://'
  baseURL="https://${VERCEL_PROJECT_PRODUCTION_URL}"
  echo "🚀 Building for production: $baseURL"
  npm run build -- --site "$baseURL"
else
  # Create the preview URL and prepend 'https://staging.'
  baseURL="https://staging.${VERCEL_PROJECT_PRODUCTION_URL}"
  echo "🎯 Building for preview: $baseURL"
  npm run build -- --site "$baseURL"
fi

# Post-build security cleanup
echo "🧹 Post-build security cleanup..."

# Remove potential sensitive files from dist
if [ -d "dist" ]; then
    # Remove source maps in production
    if [[ $VERCEL_ENV == "production" ]]; then
        find dist -name "*.map" -delete 2>/dev/null || true
        echo "🗺️ Source maps removed from production build"
    fi
    
    # Set secure permissions
    find dist -type f -exec chmod 644 {} \;
    find dist -type d -exec chmod 755 {} \;
fi

echo "✅ Secure build completed successfully!"

