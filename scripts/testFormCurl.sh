#!/usr/bin/env bash
curl -v -X POST "http://localhost:5000/api/form" \
 -H "Content-Type: application/json" \
 -d '{"name":"Tester","email":"test@example.com","message":"hello"}'
