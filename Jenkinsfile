pipeline { 
    agent any
        environment{
        imageName = "rubenjacob23/react-app"
        registryCredential = 'rubenjacob23-dockerhub'
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
        stage('Deploy Image') {
            steps {
                script{
                    docker.withRegistry("https://registry.hub.docker.com",'rubenjacob23-dockerhub'){
                    dockerImage.push("$env.BUILD_NUMBER")    
                    }
                }
            }
        }
         
         
    }
     post{
          always{
               echo "pipeline concluded."
          }
          
     }
}

