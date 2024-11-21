pipeline {
    agent any
    stages {
        stage('Check Docker') {
            steps {
                sh 'docker info || echo "Docker is not available"'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SebastianPicas/SaludArqui_Front.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npx tsc && npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'sudo docker build -t saludArqui/front . --progress=plain || echo "Docker build failed"'
            }
        }
    }
}
