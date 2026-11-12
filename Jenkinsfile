pipeline {
    agent any
parameters {
string (
name: 'TAG',
defaultValue: '@smoke',
description: 'Select Cucumber tag to excecute'
)
}
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }
    }
}