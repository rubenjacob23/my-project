pipeline { 
    agent any
        environment{
            imageName = "rubenjacob23/react-app"
           DOCKERHUB_CREDENTIALS = credentials('docker-creds')
        }
    stages {
            stage('Install') { 
            steps {
                echo "building states"
                sh 'node -v' 
                sh 'npm install' 
                }
            }    
        stage('Test') { 
            steps {
                echo "testing stage"
                sh "npm test"
            }
        }
        stage('Building Image') {
            steps {
                script{
                 dockerImage = docker.build imageName    
                }                
            }
        }
        stage('Login') {
            steps {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        
    }
     post{
          always{
                sh 'docker logout'
               echo "pipeline concluded."
          }
          
     }
}

