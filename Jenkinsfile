pipeline {
    agent any

    environment {
        
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
               
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                
                sh 'npm run build'
            }
        }
    }

    post {
        always {
           
            echo 'Proses pipeline selesai.'
        }
        success {
            echo 'Build Next.js berhasil!'
        }
        failure {
            echo 'Build Next.js gagal. Periksa log di atas.'
        }
    }
}