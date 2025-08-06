# Git Command Cheatsheet for Website Updates

This cheatsheet provides quick reference commands for managing your Lake Norman Dog Training website using Git and GitHub.

## Initial Setup Commands

### Clone the Repository
Download the repository to your local machine:
```bash
git clone https://github.com/yourusername/lake-norman-dog-training.git
cd lake-norman-dog-training
```

### Configure Git Identity
Set your name and email for commits:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Basic Workflow Commands

### Check Repository Status
See which files have been changed:
```bash
git status
```

### Get Latest Changes
Update your local repository with changes from GitHub:
```bash
git pull
```

### Stage Changes
Add files to be committed:
```bash
git add filename.html           # Add specific file
git add css/styles.css          # Add specific file in subdirectory
git add .                       # Add all changed files
git add pages/*.html            # Add all HTML files in pages directory
```

### Commit Changes
Save your changes with a message:
```bash
git commit -m "Brief description of changes"
```

### Push Changes to GitHub
Upload your commits to GitHub:
```bash
git push
```

### View Commit History
See the history of changes:
```bash
git log                         # Full history
git log --oneline               # Compact history
git log -p filename.html        # History for specific file
```

## Common Update Scenarios

### Update Text Content
```bash
# 1. Edit the file with your text editor
# 2. Check what you've changed
git status
# 3. Add the file
git add pages/services.html
# 4. Commit with a message
git commit -m "Update service descriptions and pricing"
# 5. Push to GitHub
git push
```

### Add New Page
```bash
# 1. Create the new file
# 2. Add the file
git add pages/new-service.html
# 3. Commit with a message
git commit -m "Add new training service page"
# 4. Push to GitHub
git push
```

### Update Multiple Files
```bash
# 1. Edit multiple files
# 2. Check what you've changed
git status
# 3. Add all changed files
git add .
# 4. Commit with a message
git commit -m "Update contact information across all pages"
# 5. Push to GitHub
git push
```

### Add New Images
```bash
# 1. Add images to the images directory
# 2. Add the new images
git add images/new-photo.jpg
# 3. Commit with a message
git commit -m "Add new dog training photo"
# 4. Push to GitHub
git push
```

## Advanced Commands

### Create a Branch for Testing
Create a separate branch for testing changes:
```bash
git checkout -b test-new-feature
# Make and commit your changes as usual
git add .
git commit -m "Test new contact form design"
# Push the branch to GitHub
git push -u origin test-new-feature
```

### Merge a Test Branch
Apply changes from a test branch to the main branch:
```bash
# Switch to the main branch
git checkout main
# Pull latest changes
git pull
# Merge the test branch
git merge test-new-feature
# Push the merged changes
git push
```

### Discard Changes
Remove changes that haven't been committed:
```bash
git checkout -- filename.html   # Discard changes to specific file
git checkout -- .               # Discard all changes
```

### Undo Last Commit (but keep changes)
```bash
git reset --soft HEAD~1
```

### View Changes Before Committing
See what's changed in your files:
```bash
git diff                        # All changes
git diff filename.html          # Changes in specific file
```

## Handling Common Issues

### Fix Merge Conflicts
When Git can't automatically merge changes:
```bash
# 1. Open the files with conflicts
# 2. Look for <<<<<<< HEAD, =======, and >>>>>>> markers
# 3. Edit the files to resolve conflicts
# 4. Add the resolved files
git add .
# 5. Complete the merge
git commit -m "Resolve merge conflicts"
git push
```

### Recover Deleted File
Restore a file that was accidentally deleted:
```bash
git checkout HEAD -- path/to/deleted/file.html
```

### Undo a Published Commit
Create a new commit that reverses changes:
```bash
git revert HEAD           # Revert the last commit
git revert commit-hash    # Revert a specific commit
```

## Best Practices

1. **Pull before making changes** to avoid conflicts
2. **Commit frequently** with clear messages
3. **Use branches** for major changes or experiments
4. **Review changes** before committing
5. **Push regularly** to back up your work
6. **Check deployment status** in Vercel after pushing

## Git Command Structure

Most Git commands follow this pattern:
```
git <command> [options] [arguments]
```

Examples:
```
git add filename.html
git commit -m "message"
git push
```

---

This cheatsheet was created on August 6, 2025. For more detailed information, refer to the [official Git documentation](https://git-scm.com/doc).

