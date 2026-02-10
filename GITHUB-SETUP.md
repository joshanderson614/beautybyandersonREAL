# Connect this site to GitHub

Your project is already a Git repo with an initial commit. To connect it to GitHub:

## 1. Create a new repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Set **Repository name** (e.g. `beauty-by-anderson`).
3. Choose **Public**.
4. **Do not** add a README, .gitignore, or license (this repo already has them).
5. Click **Create repository**.

## 2. Add the remote and push

In Terminal, from this project folder run (replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repo name):

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

If you use SSH instead of HTTPS:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

After this, your site will be on GitHub. You can connect the repo to Netlify for deploys (Site settings → Build & deploy → Link repository).
