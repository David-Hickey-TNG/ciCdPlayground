pipeline {
    agent any

    tools {
        // Setup yarn
        nodejs 'yarn'
    }

    stages {
        stage('build') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', url: 'https://github.com/David-Hickey-TNG/ciCdPlayground'

                // Run Yarn.
                sh 'yarn install'   
            }
        }

        stage('unit-test') {
            steps {
                sh 'yarn test'
            }

            post {
                always {
                    junit 'reports/**/*.xml'
                }
            }
        }

        stage('e2e-test') {
            steps {
                sh 'yarn build'
                sh 'yarn test:e2e'
            }

            post {
                always {
                    junit 'reports/**/*.xml'
                }
            }
        }
    }
}