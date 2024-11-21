pipeline {
    agent any
    stages {
        stage('Check Docker') {
            steps {
                sh 'docker info || echo "Docker is not available"'
                echo 'Check Docker step completed'
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SebastianPicas/SaludArqui_Front.git'
                echo 'Checkout step completed'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'sudo docker build -t saludArqui/front . --progress=plain || echo "Docker build failed"'
                echo 'Docker Build step completed'
            }
        }
    }
}
