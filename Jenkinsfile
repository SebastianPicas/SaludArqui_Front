pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'salud_front'
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    // Definimos la ubicación del Docker en el PATH
                    def dockerHome = tool 'docker'  // Usa la configuración de Docker en Jenkins
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
        }

        stage('Checkout') {
            steps {
                // Asegúrate de que Jenkins esté descargando el repositorio correctamente
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Aquí no es necesario el bloque nodejs, solo usa npm para instalar dependencias y construir
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construye la imagen Docker
                    sh 'docker build -t ${DOCKER_IMAGE}:latest .'
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

        stage('Trivy Scan') {
            steps {
                script {
                    // Escanea la imagen con Trivy
                    sh 'docker run --rm -v "/var/jenkins_home/workspace/CI Frontend:/root/.cache/" aquasec/trivy:latest -q image --light ${DOCKER_IMAGE}:latest'
                }
            }
        }
    }
}
