#!/usr/bin/env bash
sonar-scanner \
  -Dsonar.projectKey=ec-admin \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://192.168.1.202:9001 \
  -Dsonar.login=81d7c748533d706a02740ae105a9e57f7a7f6dc1 \
  -Dsonar.issuesReport.html.enable=true \
  -Dsonar.sourceEncoding=utf-8 \
  -Dsonar.report.export.path=sonar-report.json
