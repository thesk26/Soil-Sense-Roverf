# GitHub Setup Instructions

## Step 1: Install Git (if not already installed)

1. Download Git from: https://git-scm.com/download/win
2. Install it with default settings
3. Restart your terminal/PowerShell after installation

## Step 2: Initialize Git Repository

Open PowerShell in this directory and run:

```powershell
git init
git add .
git commit -m "Initial commit"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (don't initialize with README)
3. Copy the repository URL

## Step 4: Connect and Push

```powershell
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

Replace `<YOUR_REPOSITORY_URL>` with your actual GitHub repository URL (e.g., `https://github.com/username/repo-name.git`)

## Alternative: Using GitHub Desktop

1. Download GitHub Desktop from: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" > "Add Local Repository"
4. Select this folder
5. Click "Publish repository" to create it on GitHub

