if [ $# -lt 1 ]; then
    echo "Usage: ./script.sh [environment]"
    echo "Valid environments: local-dev, production, staging"
    echo "Must run from project root directory"
    exit 1
fi

scripts/create-env.sh $1 &
docker-compose -p "eventcharm-webapp_$1" up -d