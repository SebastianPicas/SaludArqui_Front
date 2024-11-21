pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/SebastianPicas/SaludArqui_Front.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t nombre-imagen .'
            }
        }
    }
}
