#!/usr/bin/env bash
sonar-scanner \
  -Dsonar.projectKey=frame-react \
  -Dsonar.sources=. \
  -Dsonar.host.url=https://sonar.singularitychina.com \
  -Dsonar.login=0d4838b4a22063910c42cdc910ed492bca04e18c \
  -Dsonar.issuesReport.html.enable=true \
  -Dsonar.sourceEncoding=utf-8 \
  -Dsonar.report.export.path=sonar-report.json
