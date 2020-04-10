message=$1
# 更新 master
git add .
git commit -m "$message"
git push -f git@github.com:noralinlll/doc_test.git master

# 更新 gh-pages
# cd docs/
# git init
# git add -A
# git commit -m "$message"
#git push -f git@github.com:noralinlll/doc_test.git  master:gh-pages
