pipeline {
    agent any

    tools {
        nodejs "node_default"
    }

    environment {
        DOCKER_IMAGE = 'salud_front'
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    def dockerHome = tool name: 'Docker', type: 'Tool'
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
                nodejs("node_default") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE}:latest .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {

                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD"
                        sh 'docker push sergioss21/salud_front'
                    }
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                script {
                    sh 'docker run --rm -v "/var/jenkins_home/workspace/CI Frontend:/root/.cache/" aquasec/trivy:latest -q image --light ${DOCKER_IMAGE}:latest'
                }
            }
        }
    }
}
