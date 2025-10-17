# Git Authentication Guide for macOS

## Finding Your Git Credentials

If you're trying to authenticate with GitHub and your password isn't working, this guide will help you understand why and how to fix it.

### Why Your Password Doesn't Work

**Important:** GitHub no longer accepts account passwords for Git operations as of August 13, 2021. You must use a **Personal Access Token (PAT)** instead.

## Understanding git-credential-osxkeychain

`git-credential-osxkeychain` is a credential helper that stores your Git credentials in the macOS Keychain. Here's how to find and manage your credentials:

### Finding Stored Credentials in macOS Keychain

1. Open **Keychain Access** (You can find it in Applications → Utilities, or use Spotlight by pressing `Cmd + Space` and typing "Keychain Access")

2. In Keychain Access:
   - Select **"login"** keychain from the left sidebar
   - Select **"Passwords"** category
   - Search for **"github.com"** in the search field

3. You'll see an entry like:
   - **Name:** `github.com`
   - **Kind:** Internet password
   - **Account:** Your GitHub username

4. Double-click the entry and check **"Show password"** to view the stored credential (you'll need to enter your macOS password)

### Checking if git-credential-osxkeychain is Installed

To verify if the credential helper is installed and configured:

```bash
git config --global credential.helper
```

You should see `osxkeychain` in the output. If not, install and configure it:

```bash
git config --global credential.helper osxkeychain
```

## How to Fix Authentication Issues

### Option 1: Create a Personal Access Token (Recommended)

1. **Generate a Personal Access Token on GitHub:**
   - Go to GitHub.com and sign in
   - Click your profile picture → **Settings**
   - Scroll down and click **Developer settings** (bottom left)
   - Click **Personal access tokens** → **Tokens (classic)**
   - Click **Generate new token** → **Generate new token (classic)**
   - Give your token a descriptive name (e.g., "MacBook Development")
   - Select the scopes/permissions you need:
     - For basic repository access: Check `repo`
     - For additional operations, select appropriate scopes
   - Click **Generate token** at the bottom
   - **IMPORTANT:** Copy the token immediately! You won't be able to see it again.

2. **Update Your Keychain with the Token:**
   
   The easiest way is to trigger a Git operation that requires authentication:
   
   ```bash
   git clone https://github.com/username/repository.git
   ```
   
   When prompted:
   - **Username:** Your GitHub username
   - **Password:** Paste your Personal Access Token (not your GitHub password!)
   
   The credential helper will automatically save it to your macOS Keychain.

3. **Alternatively, Manually Update the Keychain:**
   - Open **Keychain Access**
   - Find the `github.com` entry
   - Double-click it
   - Click **Show password**
   - Replace the old password with your new Personal Access Token
   - Click **Save Changes**

### Option 2: Use SSH Keys Instead

SSH authentication is another secure method that doesn't require entering credentials for each operation:

1. **Generate an SSH key:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add the SSH key to ssh-agent:**
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. **Copy the public key:**
   ```bash
   pbcopy < ~/.ssh/id_ed25519.pub
   ```

4. **Add to GitHub:**
   - Go to GitHub.com → Settings → SSH and GPG keys
   - Click **New SSH key**
   - Paste your key and save

5. **Use SSH URLs for cloning:**
   ```bash
   git clone git@github.com:username/repository.git
   ```

## Removing Old Credentials

If you need to remove outdated credentials from your Keychain:

1. Open **Keychain Access**
2. Find the `github.com` entry
3. Right-click and select **Delete**
4. The next time you authenticate, you'll be prompted for new credentials

Or use the command line:

```bash
git credential-osxkeychain erase
host=github.com
protocol=https
```

Press Enter twice after the last line to execute.

## Troubleshooting

### "git: 'credential-osxkeychain' is not a git command"

If you get this error, install the Xcode Command Line Tools:

```bash
xcode-select --install
```

### Authentication Still Failing

1. Make sure you're using a Personal Access Token, not your password
2. Verify the token has the correct permissions (scopes)
3. Check if the token has expired (tokens can be set to expire)
4. Clear old credentials from Keychain and re-authenticate

## Additional Resources

- [GitHub: Creating a Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub: About Authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
- [GitHub: Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)
