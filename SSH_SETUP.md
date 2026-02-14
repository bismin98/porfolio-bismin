# 🔐 SSH Key Setup untuk GitHub

## SSH Key Sudah Dibuat! ✅

Berikut adalah public SSH key Anda:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKxuwnHNZeVerMKP5WerIKStfNRXFaDm8YLpJjgU42iw bisminibrahim@gmail.com
```

## Langkah-langkah Menambahkan SSH Key ke GitHub

### 1. Copy Public Key
Key sudah ditampilkan di atas, tinggal copy.

### 2. Buka GitHub SSH Settings
- Go to: https://github.com/settings/keys
- Atau: GitHub → Settings → SSH and GPG keys → New SSH key

### 3. Tambahkan Key
- **Title**: Masukkan nama, contoh: "MacBook Air - Portfolio"
- **Key type**: Authentication Key
- **Key**: Paste public key di atas
- Click "Add SSH key"

### 4. Selesai!
Setelah ditambahkan, Anda bisa langsung jalankan:

```bash
npm run sync
```

Atau manual push:
```bash
git push origin main
```

## Verification

Test SSH connection:
```bash
ssh -T git@github.com
```

Seharusnya output seperti ini:
```
Hi Bismin98! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## Alternatif: Gunakan HTTPS + Personal Access Token

Jika SSH masih bermasalah, bisa gunakan HTTPS:

1. Create Personal Access Token di https://github.com/settings/tokens
2. Change remote ke HTTPS:
   ```bash
   git remote set-url origin https://github.com/Bismin98/portfolio-bismin.git
   ```
3. When prompted for password, paste Personal Access Token

---

**Status**: SSH key sudah generate, tinggal add ke GitHub!
