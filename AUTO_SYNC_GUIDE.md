# 🚀 Auto Sync & Deploy Setup

Portfolio website sekarang sudah dikonfigurasi untuk auto-sync ke GitHub dan auto-deploy ke Vercel!

## Cara Kerja

### 1. **Auto-Commit ke GitHub**
Setiap kali ada perubahan file, Anda bisa langsung push ke GitHub dengan command:

```bash
npm run sync
```

Command ini akan:
- ✅ Membaca semua perubahan file
- ✅ Auto-staging semua file yang berubah
- ✅ Auto-commit dengan timestamp
- ✅ Push ke GitHub repository

### 2. **Auto-Deploy ke Vercel**
Ketika perubahan sudah push ke GitHub:
- 🔄 GitHub Actions akan otomatis trigger
- 🚀 Vercel akan otomatis build dan deploy
- ✨ Website akan live dalam beberapa detik!

## Setup Awal (Satu Kali)

### Langkah 1: Setup Vercel Token
1. Buka https://vercel.com/account/tokens
2. Create new token
3. Copy token tersebut
4. Setting di GitHub Repository:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Nama: `VERCEL_TOKEN`
   - Value: Paste Vercel token Anda

### Langkah 2: Verify GitHub Connection
```bash
# Test GitHub connection
npm run sync

# Atau test manual
git push origin main
```

## Workflow Sehari-hari

### Option A: Manual Sync (Recommended)
Setelah membuat perubahan, jalankan:
```bash
npm run sync
```

### Option B: Auto Sync (Experimental)
Untuk auto-sync setiap ada perubahan:
```bash
npm install -D nodemon
npm run sync:watch
```

## Troubleshooting

### Error: "Repository not found"
- Pastikan nama repository benar: `Bismin98/portfolio-bismin`
- Check GitHub SSH key setup

### Vercel Deploy Stuck
- Check GitHub Actions logs di repository
- Verify VERCEL_TOKEN sudah set di GitHub Secrets
- Manual deploy: `vercel deploy --prod`

### Git Push Error
- Check SSH key: `ssh -T git@github.com`
- Atau gunakan HTTPS dengan Personal Access Token

## Current Status

✅ **GitHub Repository**: git@github.com:Bismin98/portfolio-bismin.git
✅ **Vercel Project**: portfolio-bismin.vercel.app
✅ **Auto Deployment**: Ready (GitHub Actions configured)

## Quick Links

- 🌐 Live Website: https://portfolio-bismin.vercel.app
- 📝 GitHub Repo: https://github.com/Bismin98/portfolio-bismin
- 🔧 Vercel Dashboard: https://vercel.com/bismin98s-projects/portfolio-bismin
- 📊 GitHub Actions: https://github.com/Bismin98/portfolio-bismin/actions

## Next Steps

1. ✅ Set VERCEL_TOKEN di GitHub Secrets (if not done)
2. ✅ Test dengan `npm run sync`
3. ✅ Watch GitHub Actions untuk auto-deploy
4. ✅ Visit https://portfolio-bismin.vercel.app untuk lihat hasilnya
