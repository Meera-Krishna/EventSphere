pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Meera-Krishna/EventSphere.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t meerakrishna07/eventsphere:v1.0.0 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push meerakrishna07/eventsphere:v1.0.0
                    '''
                }
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh 'kubectl apply -f kubernetes/deployment.yaml'
                sh 'kubectl apply -f kubernetes/service.yaml'
            }
        }
    }
}