# GitHub Setup Script
# Run this script after Git is installed and you've restarted your terminal

Write-Host "Initializing git repository..." -ForegroundColor Green
git init .

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "first commit"

Write-Host "Renaming branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "Adding remote origin..." -ForegroundColor Green
git remote add origin https://github.com/thesk26/Soil-Sense-Roverf.git

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done! Your repository has been pushed to GitHub." -ForegroundColor Green

