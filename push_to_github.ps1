
Write-Host "Configuring git remote..."
git remote remove origin 2>$null
git remote add origin https://github.com/RohitBit-25/board-webapp

Write-Host "Adding files..."
git add .

Write-Host "Committing changes..."
git commit -m "feat: Initialize Boardy - Real-time Collaborative Whiteboard`n`n- Implemented real-time collaboration using Liveblocks.`n- Integrated Convex database and Clerk authentication.`n- Added comprehensive README documentation.`n- Designed infinite canvas UI with Tailwind CSS and Shadcn."

Write-Host "Pushing to GitHub..."
git branch -M main
git push -u origin main

Write-Host "Done. Check output for any errors."
