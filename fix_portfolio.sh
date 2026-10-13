#!/bin/bash
set -euo pipefail

PROJECT_DIR="/Users/jai_sree_ram/Documents/portfolio2/portfolio"

cd "$PROJECT_DIR" || {
  echo "ERROR: Project directory not found."
  exit 1
}

echo "Updating GitHub Pages deployment workflow..."

cat > .github/workflows/deploy.yml <<'YAML'
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Upload website
        uses: actions/upload-pages-artifact@v4
        with:
          name: portfolio-pages-${{ github.run_id }}-${{ github.run_attempt }}
          path: ./dist

      - name: Deploy website
        id: deployment
        uses: actions/deploy-pages@v4
        with:
          artifact_name: portfolio-pages-${{ github.run_id }}-${{ github.run_attempt }}
YAML

echo "Checking workflow changes..."
git diff -- .github/workflows/deploy.yml

echo "Committing and pushing..."
git add .github/workflows/deploy.yml

if git diff --cached --quiet; then
  echo "No new workflow changes to commit."
else
  git commit -m "Fix duplicate GitHub Pages artifacts"
fi

git push origin main

echo "Done. Check GitHub Actions for the new deployment."



for f in hero.mp4 hero-poster.jpg portrait.jpg; do
  echo "========== $f =========="
  curl -L -s -o /dev/null \
    -w "HTTP status: %{http_code} | Content type: %{content_type} | Size: %{size_download} bytes\n" \
    "https://anushdevops.github.io/Portfolio/$f"
done
