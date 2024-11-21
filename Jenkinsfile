pipeline {
    agent any

    tools { nodejs "node_default" }  // Define la versión de Node.js que usarás
    environment {
        DOCKER_IMAGE = 'salud_arqui/front'  // Nombre de la imagen Docker que usarás
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    // Asegurarse de que Docker está en el PATH, si lo necesitas
                    def dockerHome = tool 'Docker'  // Asegúrate de tener la herramienta Docker configurada en Jenkins
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SebastianPicas/SaludArqui_Front.git'
            }
        }

        stage("Install Dependencies") {
            steps {
                nodejs("node_default") {
                    // Instalar las dependencias y construir el proyecto
                    sh 'npm install'
                }
            }
        }

        stage("Build") {
            steps {
                nodejs("node_default") {
                    // Ejecutar TypeScript y luego compilar el proyecto
                    sh 'npx tsc && npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen Docker con el nombre especificado
                    sh "docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {

                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD"
                        sh 'docker push sergioss21/spring-api'
                    }
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                script {
                    // Ejecutar Trivy para escanear la imagen de Docker
                    sh 'docker run --rm -v "/var/jenkins_home/workspace/CI Frontend:/root/.cache/" aquasec/trivy:latest -q image --light ${DOCKER_IMAGE}:latest'
                }
            }
        }
    }
}
