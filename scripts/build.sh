if [ $# -lt 1 ]; then
    echo "Usage: ./script.sh [environment]"
    echo "Valid environments: local-dev, production, staging"
    echo "Must run from project root directory"
    exit 1
fi

docker build -t rg-portfolio_$1 . && 
docker tag rg-portfolio_$1 localhost:5000/rg-portfolio_$1 &&
docker push localhost:5000/rg-portfolio_$1