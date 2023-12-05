# 构建镜像

docker build -t docker-connect-plugin .

# 运行镜像

docker run -dt -p 9000:3000 docker-connect-plugin
