pipeline { 
    agent any
    environment{
        imageName = "rubenjacob23/reactapp"
        registrycredential = 
        dockerImage = " "
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
        stage('Build'){
            steps {
                sh 'npm run build'
            }
        } 
         
    }
     post{
          always{
               echo "pipeline concluded."
          }
          
     }
}