pipeline {
    agent any

    environment {
        IMAGE_NAME = 'revario/nextjs-app'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        KUBE_NAMESPACE = 'default'
        DEPLOYMENT_NAME = 'nextjs-app-deployment'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build App') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    app = docker.build("${env.IMAGE_NAME}:${env.IMAGE_TAG}")
                    
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }

        stage('Deploy to MicroK8s') {
            steps {
                script {
                    sh "microk8s kubectl set image deployment/${env.DEPLOYMENT_NAME} app=${env.IMAGE_NAME}:${env.IMAGE_TAG} -n ${env.KUBE_NAMESPACE}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline sukses! Image berhasil di-push ke Docker Hub dan dideploy ke MicroK8s.'
        }
        failure {
            echo 'Pipeline gagal, silakan cek log.'
        }
    }
}