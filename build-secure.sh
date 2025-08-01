#!/bin/bash

# Security-enhanced build script for Nubesti
# This script runs security checks before building

echo "🔒 Starting security-enhanced build process..."

# Check for security vulnerabilities in dependencies
echo "📦 Checking npm dependencies for vulnerabilities..."
npm audit --audit-level moderate
if [ $? -ne 0 ]; then
    echo "❌ Security vulnerabilities found in dependencies!"
    echo "🔧 Running npm audit fix..."
    npm audit fix
fi

# Run TypeScript checks
echo "🔍 Running TypeScript security checks..."
npm run astro-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript checks failed!"
    exit 1
fi

# Security file checks
echo "🛡️ Checking for sensitive files..."
if [ -f ".env" ]; then
    echo "⚠️  Warning: .env file found in project root"
fi

if [ -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local file found in project root"
fi

# Check for common security misconfigurations
echo "🔎 Checking for security misconfigurations..."

# Verify CSP headers are in place
if ! grep -q "Content-Security-Policy" vercel.json; then
    echo "❌ Content Security Policy not found in vercel.json"
    exit 1
fi

# Verify security.txt exists
if [ ! -f "src/pages/.well-known/security.txt.ts" ]; then
    echo "❌ security.txt not found"
    exit 1
fi

# Build the project
echo "🏗️  Building Astro project..."
astro build

# Post-build security checks
echo "🔒 Running post-build security checks..."

# Check for exposed source maps in production
if [ -d "dist" ]; then
    if find dist -name "*.map" | grep -q .; then
        echo "⚠️  Warning: Source maps found in production build"
        # Remove source maps for security
        find dist -name "*.map" -delete
        echo "🧹 Source maps removed"
    fi
fi

# Check for sensitive information in build output
if [ -d "dist" ]; then
    if grep -r "password\|secret\|key\|token" dist/ --exclude-dir=node_modules > /dev/null 2>&1; then
        echo "⚠️  Warning: Potential sensitive information found in build output"
    fi
fi

echo "✅ Security-enhanced build completed successfully!"
echo "🚀 Ready for deployment"
