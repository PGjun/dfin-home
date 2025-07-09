#!/bin/bash

# DFIN 웹사이트 S3 배포 스크립트
# 사용법: ./deploy.sh your-bucket-name

BUCKET_NAME=$1

if [ -z "$BUCKET_NAME" ]; then
    echo "사용법: ./deploy.sh your-bucket-name"
    exit 1
fi

echo "🚀 DFIN 웹사이트 배포 시작..."

# 1. 빌드
echo "📦 빌드 중..."
npm run build

# 2. S3 업로드
echo "☁️  S3 업로드 중..."
aws s3 sync out/ s3://$BUCKET_NAME --delete

echo "✅ 배포 완료!"
echo "🌐 웹사이트: https://$BUCKET_NAME.s3-website-region.amazonaws.com" 