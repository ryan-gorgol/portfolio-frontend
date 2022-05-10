pipeline {
  agent any
  stages {
    stage('Discord notification - Pipeline started') {
      steps {
        script {
          env.GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
        }
        discordSend description: "Jenkins pipeline build started",
        result: currentBuild.currentResult,
        title: JOB_NAME,
        footer: "${GIT_COMMIT_MSG}",
        webhookURL: "https://discord.com/api/webhooks/896958743814758440/8uBTIadsI3gCUrhOso2dhFHxIwHSjwCJys8eR_wzP7U7i-zbco4Cio3Z7KKTE1wB_vsZ"
      }
    }

    stage('Build, tag, push the images') {
      steps {
        sh "chmod u+x ./scripts/create-env.sh"
        sh "bash scripts/create-env.sh ${BRANCH_NAME}"
        sh "chmod u+x ./scripts/build.sh"
        sh "bash scripts/build.sh ${BRANCH_NAME}"
      }
    }

    stage('Start the stack') {
      steps {
        sh "chmod u+x ./scripts/start.sh"
        sh "bash scripts/start.sh ${BRANCH_NAME}"
        sh "docker inspect eventcharm-webapp_${BRANCH_NAME}"
      }
    }
  }

  post {
    always {
      discordSend description: "Jenkins pipeline build completed",
      result: currentBuild.currentResult,
      title: JOB_NAME,
      footer: "${GIT_COMMIT_MSG}",
      webhookURL: "https://discord.com/api/webhooks/896958743814758440/8uBTIadsI3gCUrhOso2dhFHxIwHSjwCJys8eR_wzP7U7i-zbco4Cio3Z7KKTE1wB_vsZ"
      cleanWs()
    }
  }
}