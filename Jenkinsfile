pipeline {
    agent any


     tools {
        nodejs 'Node'  
    }
    
    stages {
        stage('Checkout') {
            steps {
                    git branch: 'main', url: 'https://github.com/SebastianPicas/SaludArqui_Front.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Aquí no es necesario el bloque nodejs, solo usa npm para instalar dependencias y construir
                    sh 'npm install'
                    sh 'npm install typescript'
                    sh 'npm run build'
                    
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construye la imagen Docker
                    sh 'docker build -t sergioss21/salud_front .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Autenticación en Docker Hub usando credenciales
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD"
                        // Empuja la imagen a Docker Hub
                        sh 'docker push sergioss21/salud_front'
                    }
                }
            }
        }

         stage('Scan Docker Image with Trivy') {
            steps {
                script {
                    sh 'trivy image --exit-code 1 --severity CRITICAL --scanners vuln sergioss21/salud_front'
                }
            }
        }
    }
}
