pipeline {
    agent {
        docker {
            image 'vitorfltt/playwright-nj-v1.58.2-noble'
            args '--network qatw-primeira-edicao_skynet'
        }
    }

    stages {
        stage('Node.js Deps') {
            steps {
                sh 'npm install'
            }
        }

        stage('Teste e2e') {
            steps {
                sh 'npx playwright test'
                allure includeProperties: false, jdk: '', resultPolicy: 'LEAVE_AS_IS', results: [[path: 'allure-results']]
            }
        }
    }
}