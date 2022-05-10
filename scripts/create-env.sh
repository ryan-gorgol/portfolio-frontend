if [ $# -lt 1 ]; then
    echo "Usage: ./script.sh [environment]"
    echo "Valid environments: local-dev, production, staging"
    echo "Must run from project root directory"
    exit 1
fi

cp env/$1.env .env