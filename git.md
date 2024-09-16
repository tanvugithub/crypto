## Cấu hình tên 
> git config --global user.name "Vu Nguyen"

## Cấu hình email
> git config --global user.email "tanvumbs@yahoo.com"

## Xem list
> git config --list

## Tạo repository: git init
> git init
=> nhánh chính: master

> git init -b main
=> tạo repo local nhánh chính là main

# Remote repo của local và github
> git remote add origin https://github.com/tanvugithub/crypto.git

# Cài extension:
1. git lens
2. git history

# Thêm file vào staging
> git add .  => tất cả file trong folder hiện tại
> git add -A => tất cả file trong dự án
> git add <đường dẫn file cụ thể>

## ghi chú: 
### working directory (file màu đỏ)
### staging (file màu xanh)

# Commit -> mỗi commit có id 
> git commit -m "message"

# Xem lại log commit
> git log

# Git push -u origin master | main   -> lần đầu
# lần thứ 2 trở đi chỉ cần: git push

git reset --soft HEAD~1
git reset --hard HEAD~1