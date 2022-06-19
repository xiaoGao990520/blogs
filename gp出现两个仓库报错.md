# gp时出现报错

一个本地仓库上传两个仓库的过程中
```
git push
ERROR:Repository not found
```
解决办法:     
查询远程仓库有几个
```
git remote -v
origin ...
origin ...
repo2 ...
repo2 ...
```
接下来是删除其中的一个仓库或者指定其中某个仓库
```
git remote remove repo2
git push
git push --set-upstream origin master
```
或者
```
git push -u repo2 master