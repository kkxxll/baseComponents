npm login (username password email)
npm beta (npm publish --tag beta)（需要在package.json 的version 加上 beta 后缀）
npm publish
npm unpublish(撤销发布，不允许撤销发布24小时的，需要则加上 --force)
npm deprecate preject 'message'(在使用者安装包错误时候的警告)

# 给当前包的版本设置为 1.0.0
npm version 1.0.0

# 运行下面命令将由1.0.0变为1.0.1 修订号升级：v1.0.1
npm version patch

# 运行下面命令将由1.0.0变为1.1.0  次版本号升级：v1.1.0
npm version minor

# 运行下面命令将由1.0.0变为2.0.0  主版本号升级：v2.0.0
npm version major

# 运行下面命令将由1.0.0变为 2.0.0-rc.0
npm version premajor --preid=rc

# 运行下面命令将由1.0.0变为 1.1.0-beta.0
npm version preminor --preid=beta

# 运行下面命令将由1.0.0变为 1.0.1-alpha.0
npm version prepatch --preid=alpha

# 运行下面命令将由1.0.0变为 1.0.1-0  如果是1.0.1-alpha.0将变为1.0.1-alpha.1
npm version prerelease

# 再次运行会由 1.0.1-0变为 1.0.1-1  如果是1.0.1-alpha.1将变为1.0.1-alpha.2
npm version prerelease

# 运行下面命令将由1.0.1-1变为 2.0.0   7.0.0-beta.0=>7.0.0
npm version major

# 运行下面命令将由 1.1.0-beta.0 变为 1.1.0
npm version minor

# 运行下面命令将由 1.0.1-alpha.变为 to 1.0.1
npm version patch
