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
                 
                    sh 'npm install'
                    sh 'npm install typescript'
                    sh 'npm run build'
                    
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
               
                    sh 'docker build -t sergioss21/salud_front .'
                }
            }
        }

        stage('Scan Docker Image with Trivy') {
            steps {
                script {
                
                    sh 'trivy image --exit-code 1 --severity CRITICAL --scanners vuln --cache-dir /var/jenkins_home/.cache/trivy sergioss21/salud_front'
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

    }
}
